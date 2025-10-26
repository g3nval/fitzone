// src/views/components/Products.jsx
import React from 'react';
export default function Products({ onAdd }) {
    const products = [
        { name: 'Whey Protein', price: '850K', emoji: '🍶' },
        { name: 'Găng tay tập', price: '150K', emoji: '🧤' },
        { name: 'Áo tập FitZone', price: '250K', emoji: '👕' },
        { name: 'BCAA', price: '450K', emoji: '💊' },
        { name: 'Pre-Workout', price: '550K', emoji: '🧴' },
        { name: 'Túi tập gym', price: '350K', emoji: '🎒' },
        { name: 'Bình nước', price: '120K', emoji: '💧' },
        { name: 'Ứng dụng PT', price: '99K', emoji: '📱' }

    ];
    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Sản phẩm & Phụ kiện</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                            <div className="text-4xl mb-4 text-center">{p.emoji}</div>
                            <h3 className="text-lg font-bold mb-2 text-center">{p.name}</h3>
                            <p className="text-gray-600 text-sm mb-3 text-center">Mô tả ngắn</p>
                            <div className="text-center">
                                <span className="text-xl font-bold text-purple-600">{p.price}</span>
                                <button
                                    onClick={() => onAdd(p.name, p.price)}
                                    className="block w-full mt-3 bg-purple-600 text-white py-2 rounded-lg"
                                >
                                    Thêm vào giỏ
                                </button>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
