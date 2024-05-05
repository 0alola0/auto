import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "./components/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "auto",
  description: "test auto website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
