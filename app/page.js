"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [pathImage, setPathImage] = useState('https://img.ophim.live/uploads/movies/');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trình duyệt của người dùng sẽ tự động gọi API này khi mở web
    fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
      .then(res => res.json())
      .then(data => {
        if (data.items) setMovies(data.items);
        if (data.pathImage) setPathImage(data.pathImage);
        setLoading(false);
      })
      .catch(error => {
        console.error("Lỗi khi tải dữ liệu phim", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold border-l-4 border-rose-500 pl-3 uppercase">Phim Mới Cập Nhật</h1>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center text-rose-500 py-10">Máy chủ phim đang bảo trì, vui lòng thử lại sau!</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => {
            const thumbUrl = movie.thumb_url.startsWith('http') ? movie.thumb_url : pathImage + movie.thumb_url;
            
            return (
              <Link href={`/phim/${movie.slug}`} key={movie._id}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:ring-2 hover:ring-rose-500 transition cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-[2/3] w-full">
                    <Image 
                      src={thumbUrl} 
                      alt={movie.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                    <div className="absolute top-2 left-2 bg-rose-600 text-xs font-bold px-2 py-1 rounded">
                      {movie.year || '2024'}
                    </div>
                  </div>
                  <div className="p-3 flex-grow">
                    <h3 className="font-bold text-sm text-gray-100 line-clamp-1">{movie.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{movie.origin_name}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
