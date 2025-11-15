import React from 'react';

export default function TableResponse({ table }) {
    if (!table) return null;
    const { columns = [], rows = [], description } = table;

    return (
        <div className="mt-2">
            <div className="overflow-x-auto border rounded">
                <table className="min-w-full">
                    <thead className="bg-gray-200 dark:bg-gray-700">
                        <tr>
                            {columns.map((c, i) => <th key={i} className="px-3 py-2 text-left text-sm">{c}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, ri) => (
                            <tr key={ri} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                {r.map((cell, ci) => <td key={ci} className="px-3 py-2 text-sm">{cell}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {description && <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">{description}</div>}
        </div>
    );
}
