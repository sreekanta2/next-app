import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "PRO",
    template: " PRO - %s",
  },
  default: "app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1280px] mx-auto px-4 bg-gray-100 text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
