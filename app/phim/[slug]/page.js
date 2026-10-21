import Link from 'next/link';

export default async function MovieDetail({ params }) {
  const { slug } = params;
  
  // Lấy chi tiết phim
  const res = await fetch(`https://ophim1.com/phim/${slug}`, { next: { revalidate: 3600 } });
  
  if (!res.ok) {
    return <div className="text-center text-rose-500">Không tìm thấy phim!</div>;
  }
  
  const data = await res.json();
  const movie = data.movie;
  const episodes = data.episodes && data.episodes[0] ? data.episodes[0].server_data : [];

  // Mặc định lấy tập 1 để phát
  const firstEpisodeInfo = episodes.length > 0 ? episodes[0] : null;
  const embedLink = firstEpisodeInfo ? firstEpisodeInfo.link_embed : '';

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Cột trái: Trình phát video & Thông tin */}
      <div className="w-full lg:w-3/4">
        {/* Khung phát video */}
        {embedLink ? (
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-6">
            <iframe 
              src={embedLink} 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-800 flex items-center justify-center rounded-xl mb-6">
            <p className="text-gray-400">Phim đang cập nhật hệ thống phát...</p>
          </div>
        )}

        <h1 className="text-3xl font-bold mb-2">{movie.name}</h1>
        <h2 className="text-xl text-gray-400 mb-4">{movie.origin_name} ({movie.year})</h2>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: movie.content }}></p>
        </div>
      </div>

      {/* Cột phải: Danh sách tập */}
      <div className="w-full lg:w-1/4">
        <div className="bg-gray-800 rounded-lg p-4 sticky top-20">
          <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">Danh sách tập</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-3 gap-2">
            {episodes.map((ep, idx) => (
              <div key={idx} className={`text-center py-2 rounded text-sm font-medium cursor-pointer transition ${idx === 0 ? 'bg-rose-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
                {ep.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
