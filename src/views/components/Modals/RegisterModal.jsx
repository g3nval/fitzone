import React, { useState } from 'react';

export default function RegisterModal({ visible, onClose, onRegister }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });

    if (!visible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password.length < 6) return alert('Mật khẩu phải có ít nhất 6 ký tự');
        if (form.password !== form.confirm) return alert('Mật khẩu xác nhận không khớp');
        const res = onRegister(form);
        if (res.success) {
            alert('Đăng ký thành công!');
            onClose();
        } else alert(res.message);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
                <h3 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản</h3>
                <form onSubmit={handleSubmit}>
                    <input className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Họ và tên"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    <input className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Email"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    <input className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Số điện thoại"
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    <input type="password" className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Mật khẩu"
                        onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                    <input type="password" className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Xác nhận mật khẩu"
                        onChange={(e) => setForm({ ...form, confirm: e.target.value })} required />
                    <div className="flex space-x-2">
                        <button type="submit" className="flex-1 bg-purple-600 text-white py-3 rounded-lg">Đăng ký</button>
                        <button type="button" onClick={onClose} className="flex-1 bg-gray-300 py-3 rounded-lg">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
