import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Living - Affiliate Store",
  description: "Your one-stop shop for modern furniture and home decor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold">ModernLiving</a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/shop" className="text-gray-700 hover:text-gray-900">Shop</a>
                <a href="/stories" className="text-gray-700 hover:text-gray-900">Stories</a>
                <a href="/room" className="text-gray-700 hover:text-gray-900">Room</a>
                <a href="/promotions" className="text-gray-700 hover:text-gray-900">Promotions</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/account" className="text-gray-700 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </a>
                <a href="/cart" className="text-gray-700 hover:text-gray-900 relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-100 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-600">Your trusted source for modern furniture and home decor inspiration.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a></li>
                  <li><a href="/stories" className="text-gray-600 hover:text-gray-900">Stories</a></li>
                  <li><a href="/room" className="text-gray-600 hover:text-gray-900">Room</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                <ul className="space-y-2">
                  <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                  <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                  <li><a href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping Info</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="mt-2 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
