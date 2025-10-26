// src/views/components/Packages.jsx
import React from 'react';
export default function Packages({ onSelectPackage }) {
    const pkgs = [
        { name: 'Gói Cơ Bản', price: '500K', desc: ['Tập gym không giới hạn', 'Sử dụng khu cardio', 'Phòng tắm & tủ đồ', 'Wifi miễn phí'] },
        { name: 'Gói Premium', price: '800K', featured: true, desc: ['Tất cả quyền lợi gói Cơ Bản', 'Group class không giới hạn', '1 buổi PT miễn phí/tháng', 'Sauna & massage', 'Nước uống miễn phí'] },
        { name: 'Gói VIP', price: '1.2M', desc: ['Tất cả quyền lợi gói Premium', 'PT riêng 4 buổi/tháng', 'Tủ đồ cá nhân', 'Ưu tiên đặt lịch', 'Giảm 20% sản phẩm'] }
    ];
    return (
        <section id="packages" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Gói thành viên</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {pkgs.map((p, i) => (
                        <div key={i} className={`bg-white rounded-2xl p-8 shadow-lg card-hover ${p.featured ? 'border-4 border-purple-500 relative' : ''}`}>
                            {p.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">Phổ biến nhất</div>}
                            <div className="text-center"><h3 className="text-2xl font-bold mb-4 text-gray-800">{p.name}</h3><div className="text-4xl font-bold text-purple-600 mb-2">{p.price}</div><div className="text-gray-600 mb-6">/tháng</div><ul className="space-y-3 text-left mb-8">{p.desc.map((d, idx) => (<li key={idx} className="flex items-center"><span className="text-green-500 mr-2">✓</span>{d}</li>))}</ul><button onClick={() => onSelectPackage(p.name, p.price)} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">Chọn gói này</button></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
