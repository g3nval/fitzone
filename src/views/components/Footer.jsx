// src/views/components/Footer.jsx
import React from 'react';
import gymlogo from '../../assets/images/gym_logo.jpg';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={gymlogo}
                                className="w-6 h-6 mr-2 rounded-full"
                                alt="logo"
                            />
                            <h3 className="text-xl font-bold">FitZone Gym</h3>
                        </div>
                        <p className="text-gray-400">
                            Phòng gym hiện đại nhất thành phố, nơi biến ước mơ thành hiện thực.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Dịch vụ</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Tập gym</li>
                            <li>Group class</li>
                            <li>Personal Training</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Hỗ trợ</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Liên hệ</li>
                            <li>FAQ</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Kết nối</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/ta.quan.819844" className="text-2xl">📘</a>
                            <a href="https://www.instagram.com/quan.a.n.h03/" className="text-2xl">📷</a>
                            <a href="https://www.youtube.com/@quanta4912" className="text-2xl">🎥</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 FitZone Gym. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
}
