import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "نظام برنامه‌ریزی و بودجه‌ریزی",
  description: "سیستم برنامه‌ریزی، بودجه‌ریزی و کنترل عملکرد سازمان"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fa" dir="rtl"><body><AppShell>{children}</AppShell></body></html>;
}