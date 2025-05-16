import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "../_providers/auth";
import Sidebar from "./dashboard/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Nexus - Painel Administrativo",
  description: "Gerencie sua loja de forma simples e rápida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <div className="flex overflow-hidden">
              <Sidebar />
              {children}
            </div>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
