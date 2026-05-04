import type { Metadata } from "next";
import "./globals.css";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion"
import Header from '../components/Header'
import Footer from '../components/Footer'
import ToggleTheme from '@/components/ToggleTheme'
import { cookies } from "next/headers"
import ThemeProvider from "@/context/ThemeProvider"

export const metadata: Metadata = {
  metadataBase: new URL('https://danielwijaya.com'),
  title: "Daniel Wijaya | UX Engineer",
  description: "Bridging design and code — from Figma and Framer to production-ready Next.js.",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const cookieTheme = cookieStore.get("theme")?.value
  const initialTheme: "dark" | "light" = cookieTheme === "light" ? "light" : "dark"

  return (
    <html lang="en" className={initialTheme === "dark" ? "dark" : ""}>
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          <LazyMotion features={domAnimation} strict>
            <MotionConfig
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            >
              <Header styles="fixed top-6 inset-x-0 mx-auto z-50" />
              <ToggleTheme styles="fixed top-8 right-8 z-50 sm:flex hidden" />
              {children}
              <Footer />
            </MotionConfig>
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}