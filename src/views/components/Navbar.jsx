// src/views/components/Navbar.jsx
import React from 'react';
import gymlogo from '../../assets/images/gym_logo.jpg';
export default function Navbar({ currentUser, onShowLogin, onShowRegister, onLogout }) {
    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src={gymlogo} alt="FitZone Logo" className="w-8 h-8 mr-2 rounded-full" onError={(e) => { e.target.style.display = 'none' }} />
                        <span className="text-2xl font-bold text-purple-600">FitZone</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link text-gray-700 font-medium">Trang chủ</a>
                        <a href="#about" className="nav-link text-gray-700 font-medium">Giới thiệu</a>
                        <a href="#packages" className="nav-link text-gray-700 font-medium">Gói tập</a>
                        <a href="#workouts" className="nav-link text-gray-700 font-medium">Bài tập</a>
                        <a href="#products" className="nav-link text-gray-700 font-medium">Sản phẩm</a>
                        <a href="#contact" className="nav-link text-gray-700 font-medium">Liên hệ</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        {currentUser ? (
                            <div className="flex items-center">
                                <span className="text-gray-700 font-medium mr-4">Xin chào, {currentUser.name}</span>
                                <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Đăng xuất</button>
                            </div>
                        ) : (
                            <div className="flex space-x-2">
                                <button onClick={onShowLogin} className="bg-purple-600 text-white px-4 py-2 rounded-lg">Đăng nhập</button>
                                <button onClick={onShowRegister} className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg">Đăng ký</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
