// src/views/components/Hero.jsx
import React from 'react';
export default function Hero() {
    return (
        <section id="home" className="hero-bg text-white py-32 mt-16" style={{ background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)' }}>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Chào mừng đến FitZone</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">Nơi biến ước mơ thành hiện thực - Gym hiện đại nhất thành phố</p>
                <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100">Đăng ký ngay 🚀</button>
            </div>
        </section>
    );
}
