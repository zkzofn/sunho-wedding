const NaverMap = () => {
  // 동서울웨딩컨벤션의 대략적인 좌표 (실제 위치에 맞게 조정 필요)
  const weddingHallLat = 37.5665;
  const weddingHallLng = 126.9780;
  
  // 네이버 지도 임베드 URL 생성
  const mapEmbedUrl = `https://map.naver.com/v5/embed/search/동서울웨딩컨벤션?c=${weddingHallLat},${weddingHallLng},15,0,0,0,dh`;

  return (
    <div className="w-full">
      <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="동서울웨딩컨벤션 위치"
        />
      </div>
    </div>
  );
};

export default NaverMap;
