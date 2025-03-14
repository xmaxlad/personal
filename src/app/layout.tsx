import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Sharma",
  description: "Kamal Sharma's personal webpage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon"
        href="/cat.png"
        >
        </link>
      </head>
      <body 
        className={`font-mono flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
