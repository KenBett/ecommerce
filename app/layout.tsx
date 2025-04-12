import type { Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/providers/modalProvider";
import { ToastProvider } from "@/providers/toastProvider";


const robotoMono = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${robotoMono.className} antialiased`}
        >
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
