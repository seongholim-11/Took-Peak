"use client";

import Footer from "@/components/main/footer/Footer";
import "./globals.scss";
import NavBar from "@/components/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

// 클라이언트 컴포넌트에서 로그인 정보 및 유무를 확인을 위해 import
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <NavBar />
                    {children}
                    <Footer/>
                </SessionProvider>
            </body>
        </html>
    );
}
