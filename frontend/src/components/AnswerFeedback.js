import React, { useState } from 'react';

export default function AnswerFeedback() {
    const [state, setState] = useState(null);

    return (
        <div className="mt-2 flex items-center gap-3">
            <button onClick={() => setState(state === 'like' ? null : 'like')} className={`px-2 py-1 rounded ${state === 'like' ? 'bg-green-100 dark:bg-green-900' : 'bg-transparent'}`}>👍</button>
            <button onClick={() => setState(state === 'dislike' ? null : 'dislike')} className={`px-2 py-1 rounded ${state === 'dislike' ? 'bg-red-100 dark:bg-red-900' : 'bg-transparent'}`}>👎</button>
            <div className="text-xs text-gray-500 dark:text-gray-400">{state ? `You ${state}` : 'Give feedback'}</div>
        </div>
    );
}
