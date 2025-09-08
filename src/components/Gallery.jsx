import React, { useState, useEffect } from "react";

// 갤러리 이미지들 import
import gallery1 from "../assets/gallery/gallery-1.png";
import gallery2 from "../assets/gallery/gallery-2.png";
import gallery3 from "../assets/gallery/gallery-3.png";
import gallery4 from "../assets/gallery/gallery-4-4b3ad4.png";
import gallery5 from "../assets/gallery/gallery-5.png";
import gallery6 from "../assets/gallery/gallery-6.png";
import gallery7 from "../assets/gallery/gallery-7.png";
import gallery8 from "../assets/gallery/gallery-8.png";
import gallery9 from "../assets/gallery/gallery-9.png";
import gallery10 from "../assets/gallery/gallery-10-42797d.png";
import gallery11 from "../assets/gallery/gallery-11-4a7448.png";
import gallery12 from "../assets/gallery/gallery-12.png";
import gallery13 from "../assets/gallery/gallery-13-4935d5.png";
import gallery14 from "../assets/gallery/gallery-14-24ec23.png";
import gallery15 from "../assets/gallery/gallery-15-282f85.png";
import gallery16 from "../assets/gallery/gallery-16-7ee5d1.png";
import gallery17 from "../assets/gallery/gallery-17-60b789.png";
import gallery18 from "../assets/gallery/gallery-18.png";
import gallery19 from "../assets/gallery/gallery-19-57627c.png";
import gallery20 from "../assets/gallery/gallery-20.png";
import gallery21 from "../assets/gallery/gallery-21-68bf7b.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 갤러리 이미지 배열
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
  ];

  // 이미지 클릭 핸들러
  const handleImageClick = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImage(null);
  };

  // 다음 이미지
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  // 이전 이미지
  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="w-full px-4">
      <h2 className="font-kapakana text-5xl text-primary-600 text-center mb-5 font-medium">
        Gallery
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-300 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover gallery-image"
            />
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* 닫기 버튼 */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
          >
            ×
          </button>

          {/* 이전 버튼 */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
          >
            ‹
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
          >
            ›
          </button>

          {/* 이미지 */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={selectedImage}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg gallery-image"
            />
          </div>

          {/* 이미지 인덱스 표시 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
