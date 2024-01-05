import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({ subsets: ["latin"] });
import "./globals.css";

import ThemeProvider from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Supabase Realtime Chat App"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
