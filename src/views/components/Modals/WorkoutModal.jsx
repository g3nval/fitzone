import React from 'react';

export default function WorkoutModal({ visible, title, content, onClose }) {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <button onClick={onClose} className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-4">Đóng</button>
            </div>
        </div>
    );
}
