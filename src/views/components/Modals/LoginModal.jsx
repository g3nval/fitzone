import React, { useState } from 'react';

export default function LoginModal({ visible, onClose, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!visible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
                <h3 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm mb-2">Email hoặc số điện thoại</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <label className="block text-sm mb-2">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                            Đăng nhập
                        </button>
                        <button onClick={onClose} type="button" className="text-gray-500 px-4 py-2">
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
