import React, { useState } from "react";

export default function ChatInput({ onSend }) {
    const [text, setText] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText("");
    }

    return (
        <form onSubmit={submit} className="flex gap-2 w-full">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="Ask something..."
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
    );
}
