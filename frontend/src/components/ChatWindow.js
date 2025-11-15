import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnswerFeedback from "./AnswerFeedback";
import ChatInput from "./ChatInput";
import TableResponse from "./TableResponse";

export default function ChatWindow() {
    const { sessionId } = useParams();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const bottomRef = useRef();

    useEffect(() => {
        if (!sessionId) {
            navigate('/new');
            return;
        }
        axios.get(`http://localhost:4000/api/session/${sessionId}`)
            .then(res => setSession(res.data.session))
            .catch(err => {
                console.error(err);
                navigate('/new');
            });
    }, [sessionId, navigate]);

    async function sendMessage(text) {
        const res = await axios.post(`http://localhost:4000/api/chat/${sessionId}`, { question: text });
        setSession(prev => ({ ...prev, history: [...prev.history, res.data.answer] }));
        setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4">
                <div className="text-sm text-gray-500 dark:text-gray-300">Session ID: <span className="font-mono text-xs">{sessionId || '—'}</span></div>
                <h2 className="text-xl font-semibold">{session?.title || 'Chat'}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
                {session?.history?.map((msg) => (
                    <div key={msg.id}
                        className={`p-3 rounded max-w-full sm:max-w-2xl
                        ${msg.role === "assistant"
                                ? "bg-gray-200 dark:bg-gray-800"
                                : "bg-blue-50 dark:bg-gray-700"}`}>

                        <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                        {msg.table && <TableResponse table={msg.table} />}
                        {msg.role === "assistant" && <AnswerFeedback />}
                    </div>
                ))}

                <div ref={bottomRef} />
            </div>

            <div className="p-2 border-t dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-900">
                <ChatInput onSend={sendMessage} />
            </div>
        </div>
    );
}
