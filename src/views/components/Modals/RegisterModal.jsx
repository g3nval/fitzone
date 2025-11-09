// src/views/components/Modals/RegisterModal.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterModal({ visible, onClose, onRegister }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    if (!visible) return null; // ẩn modal nếu chưa mở

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            toast.warn("⚠️ Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if (form.password !== form.confirmPassword) {
            toast.error("❌ Mật khẩu không khớp!");
            return;
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    password: form.password
                }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("🎉 Đăng ký thành công!");
                onRegister && onRegister(data);
                onClose(); // đóng modal
            } else {
                toast.error(data.message || "❌ Đăng ký thất bại!");
            }
        } catch (err) {
            toast.error("🚨 Lỗi kết nối server!");
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Họ tên"
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                        >
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
