// src/views/components/About.jsx
import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                    Về FitZone Gym
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Phần mô tả bên trái */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-purple-600">
                            Trung tâm thể hình hàng đầu Việt Nam
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Tại <strong>FitZone</strong>, chúng tôi tin rằng sức khỏe là nền tảng của
                            thành công. Phòng gym được trang bị máy móc hiện đại, huấn luyện viên
                            chuyên nghiệp và không gian luyện tập thoải mái, giúp bạn đạt được mục tiêu
                            thể hình nhanh nhất.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Trang thiết bị đạt chuẩn quốc tế
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Đội ngũ huấn luyện viên chuyên nghiệp, tận tâm
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Không gian luyện tập thoáng mát, sạch sẽ
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Lịch tập linh hoạt, phù hợp với mọi đối tượng
                            </li>
                        </ul>
                    </div>

                    {/* Bảng giới thiệu bên phải */}
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-md">
                        <h4 className="text-xl font-bold mb-6 text-center text-gray-800">
                            Thiết bị và dịch vụ nổi bật
                        </h4>

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-3xl">💪</span>
                                <p className="font-semibold mt-2 text-gray-800">Life Fitness</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-3xl">🏃</span>
                                <p className="font-semibold mt-2 text-gray-800">Technogym</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-3xl">🚴</span>
                                <p className="font-semibold mt-2 text-gray-800">Matrix</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-3xl">⚖️</span>
                                <p className="font-semibold mt-2 text-gray-800">Hammer</p>
                            </div>
                        </div>

                        <p className="text-center mt-6 text-gray-700">
                            Tất cả thiết bị được bảo trì thường xuyên để đảm bảo trải nghiệm an toàn và hiệu quả nhất cho hội viên.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
