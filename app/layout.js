import './globals.css';

export const metadata = {
  title: 'Kho Phim Tự Động Của LongChun - Next.js',
  description: 'Trang phim tự động cập nhật dữ liệu từ OPhim API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-wider text-white">AUTO<span className="text-rose-500">PHIM</span></span>
              </a>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
