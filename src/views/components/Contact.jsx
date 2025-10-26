// src/views/components/Contact.jsx
import React from 'react';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ!');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Liên hệ & Địa chỉ</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Thông tin liên hệ */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-purple-600">Thông tin liên hệ</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📍</span>
                                <div>
                                    <p className="font-semibold">Địa chỉ:</p>
                                    <p className="text-gray-600">123 Đường Nguyễn Văn Cừ, Quận 1, TP.HCM</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📞</span>
                                <div>
                                    <p className="font-semibold">Điện thoại:</p>
                                    <p className="text-gray-600">0901 234 567</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-2xl mr-4">✉️</span>
                                <div>
                                    <p className="font-semibold">Email:</p>
                                    <p className="text-gray-600">info@fitzonegym.vn</p>
                                </div>
                            </div>
                            <h4 class="text-xl font-bold mb-4">Theo dõi chúng tôi</h4>
                            <div class="flex space-x-4">
                                <a href="https://www.facebook.com/ta.quan.819844" target="_blank" rel="noopener noreferrer"
                                    class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                                    📘 Facebook
                                </a>
                                <a href="https://www.instagram.com/quan.a.n.h03/" target="_blank" rel="noopener noreferrer"
                                    class="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300">
                                    📷 Instagram
                                </a>
                                <a href="https://www.youtube.com/@quanta4912" target="_blank" rel="noopener noreferrer"
                                    class="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300">
                                    📺 YouTube
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form liên hệ */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-center">Đăng ký tư vấn miễn phí</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2">Họ và tên</label>
                                <input type="text" className="w-full px-4 py-3 border rounded-lg" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                                <input type="tel" className="w-full px-4 py-3 border rounded-lg" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 border rounded-lg" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Mục tiêu tập luyện</label>
                                <select className="w-full px-4 py-3 border rounded-lg">
                                    <option>Chọn mục tiêu</option>
                                    <option>Giảm cân</option>
                                    <option>Tăng cơ</option>
                                    <option>Cải thiện sức khỏe</option>
                                    <option>Duy trì vóc dáng</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Tin nhắn</label>
                                <textarea rows="4" className="w-full px-4 py-3 border rounded-lg" />
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">
                                Gửi thông tin 🚀
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
