import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import { AuthProvider } from "@/Context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasks Manager",
  description: "Note app generator",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/note-logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
