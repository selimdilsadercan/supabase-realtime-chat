import type { Metadata } from "next";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import "./globals.css";

import ThemeProvider from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Supabase Realtime Chat App"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
