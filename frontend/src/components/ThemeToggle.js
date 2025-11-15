import React from 'react';

export default function ThemeToggle({ dark, setDark }) {
    return (
        <button onClick={() => setDark(!dark)} className="px-3 py-1 rounded border dark:border-gray-700">
            {dark ? 'Light' : 'Dark'}
        </button>
    );
}
