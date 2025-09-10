import { useEffect, useRef } from 'react';

const NaverMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 네이버 지도 API가 로드되었는지 확인
    if (typeof window.naver === 'undefined') {
      console.error('네이버 지도 API가 로드되지 않았습니다.');
      return;
    }

    // 동서울웨딩컨벤션 좌표 (실제 위치)
    const weddingHallPosition = new window.naver.maps.LatLng(37.5665, 126.9780);

    // 지도 옵션 설정
    const mapOptions = {
      center: weddingHallPosition,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: window.naver.maps.Position.TOP_LEFT,
      },
    };

    // 지도 생성
    const map = new window.naver.maps.Map(mapRef.current, mapOptions);

    // 마커 생성
    const marker = new window.naver.maps.Marker({
      position: weddingHallPosition,
      map: map,
      title: '동서울웨딩컨벤션',
    });

    // 정보창 생성
    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding: 15px; font-family: 'Nanum Myeongjo', serif; min-width: 200px;">
          <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #4e3f4a;">
            동서울웨딩컨벤션
          </div>
          <div style="font-size: 14px; color: #666; margin-bottom: 5px;">
            서울특별시 중구
          </div>
          <div style="font-size: 12px; color: #888;">
            김병춘 ❤️ 황선호 결혼식 장소
          </div>
        </div>
      `,
    });

    // 마커 클릭 시 정보창 표시/숨김
    window.naver.maps.Event.addListener(marker, 'click', () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });

    // 지도 클릭 시 정보창 닫기
    window.naver.maps.Event.addListener(map, 'click', () => {
      infoWindow.close();
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.naver.maps.Event.clearInstanceListeners(map);
      window.naver.maps.Event.clearInstanceListeners(marker);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={mapRef}
        className="w-full h-80 rounded-lg shadow-lg"
        style={{ minHeight: '320px' }}
      />
    </div>
  );
};

export default NaverMap;
