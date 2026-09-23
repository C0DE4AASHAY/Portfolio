import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aashay Kashyap — Professional Coder & Developer",
  description:
    "I build modern applications, creative tools, and digital experiences using code. Portfolio of Aashay Kashyap — developer, builder, creator.",
  keywords: [
    "Aashay Kashyap",
    "developer",
    "portfolio",
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "web developer",
  ],
  authors: [{ name: "Aashay Kashyap" }],
  openGraph: {
    title: "Aashay Kashyap — Professional Coder & Developer",
    description:
      "I build modern applications, creative tools, and digital experiences using code.",
    url: "https://aashaykashyap.dev",
    siteName: "Aashay Kashyap",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashay Kashyap — Professional Coder & Developer",
    description:
      "I build modern applications, creative tools, and digital experiences using code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text-primary antialiased font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
