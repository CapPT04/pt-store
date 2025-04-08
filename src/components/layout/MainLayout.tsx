'use client';
import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
    hideLoginButton?: boolean;
}

const MainLayout = ({ children, hideLoginButton = false }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-teal-50 to-indigo-100">
            <Navbar hideLoginButton={hideLoginButton} />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout; 