"use client";

import "./globals.scss";
import NavBar from "@/components/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <NavBar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
