import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ isMobile = false, onClose }) {
    const [collapsed, setCollapsed] = useState(false);
    const [sessions, setSessions] = useState([]);
    const navigate = useNavigate();

    async function loadSessions() {
        try {
            const res = await axios.get('http://localhost:4000/api/sessions');
            setSessions(res.data.sessions || []);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => { loadSessions(); }, []);

    async function newChat() {
        const res = await axios.get("http://localhost:4000/api/new-chat");
        navigate(`/chat/${res.data.sessionId}`);
        // Refresh sessions list after creating new chat
        setTimeout(loadSessions, 300);
        if (isMobile && onClose) onClose();
    }

    return (
        <div
            className={`flex flex-col bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${isMobile ? "w-64 h-screen" : collapsed ? "w-16 h-full" : "w-64 h-full"} transition-all`}>

            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
                {!isMobile && (
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-sm"
                    >
                        {collapsed ? "➡" : "⬅"}
                    </button>
                )}
                {!collapsed && <span className="font-semibold">Chats</span>}
                {!collapsed && (
                    <button onClick={newChat} className="bg-blue-600 text-white text-sm px-2 py-1 rounded">
                        New Chat
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-auto p-2">
                {sessions.map((s) => (
                    <Link
                        key={s.id}
                        to={`/chat/${s.id}`}
                        className="block p-2 mb-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => isMobile && onClose && onClose()}
                    >
                        {!collapsed && (
                            <>
                                <div className="font-medium text-sm">{s.title}</div>
                                <div className="text-xs text-gray-500">{new Date(s.createdAt).toLocaleString()}</div>
                            </>
                        )}
                        {collapsed && <div className="text-center text-xl">💬</div>}
                    </Link>
                ))}
            </div>

            {!collapsed && (
                <div className="p-3 text-sm border-t dark:border-gray-700">
                    <div className="font-semibold">User</div>
                    <div>GANESH</div>
                </div>
            )}
        </div>
    );
}
