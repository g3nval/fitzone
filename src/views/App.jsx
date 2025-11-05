import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Workouts from './components/Workouts';
import Products from './components/Products';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/Modals/LoginModal';
import RegisterModal from './components/Modals/RegisterModal';
import PackageModal from './components/Modals/PackageModal';
import WorkoutModal from './components/Modals/WorkoutModal';
import CartModal from './components/Modals/CartModal';
import { useAuth } from './hooks/useAuth';
import { useCart } from './hooks/useCart';

export default function App() {
    const auth = useAuth();
    const cart = useCart();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [packageInfo, setPackageInfo] = useState(null);
    const [showPackage, setShowPackage] = useState(false);
    const [workout, setWorkout] = useState({ visible: false, title: '', content: '' });
    const [showCart, setShowCart] = useState(false);

    function handleSelectPackage(name, price) {
        if (!auth.currentUser) { setShowLogin(true); return; }
        setPackageInfo({ name, price });
        setShowPackage(true);
    }

    function handleShowWorkout(type, htmlContent) {
        setWorkout({ visible: true, title: type, content: htmlContent });
    }

    function handleAddToCart(name, price) {
        if (!auth.currentUser) { setShowLogin(true); return; }
        cart.add({ name, price });
    }

    return (
        <div className="bg-gray-50">
            <Navbar
                currentUser={auth.currentUser}
                onShowLogin={() => setShowLogin(true)}
                onShowRegister={() => setShowRegister(true)}
                onLogout={auth.logout}
            />
            <Hero />
            <About />
            <Packages onSelectPackage={handleSelectPackage} />
            <Workouts onShowWorkout={handleShowWorkout} />
            <Products onAdd={handleAddToCart} />
            <Quotes />
            <Contact />
            <Footer />

            {/* Giỏ hàng */}
            <div className="fixed bottom-6 right-6 z-40">
                <button onClick={() => setShowCart(true)} className="bg-purple-600 text-white p-4 rounded-full shadow-lg">
                    🛒 <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-1">{cart.totalCount}</span>
                </button>
            </div>

            {/* Modal */}
            <LoginModal visible={showLogin} onClose={() => setShowLogin(false)}
                onLogin={(email, pass) => auth.login(email, pass)} />
            <RegisterModal visible={showRegister} onClose={() => setShowRegister(false)}
                onRegister={(u) => auth.register(u)} />
            <PackageModal visible={showPackage} packageInfo={packageInfo} onClose={() => setShowPackage(false)} />
            <WorkoutModal visible={workout.visible} title={workout.title} content={workout.content}
                onClose={() => setWorkout({ ...workout, visible: false })} />
            <CartModal visible={showCart} cart={cart.cart}
                onClose={() => setShowCart(false)}
                onRemove={cart.remove}
                onCheckout={() => {
                    if (cart.cart.length === 0) return alert('Giỏ hàng trống');
                    alert('Cảm ơn bạn!');
                    cart.clear();
                    setShowCart(false);
                }}
            />
        </div>
    );
}
