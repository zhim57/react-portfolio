import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="first-row">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
