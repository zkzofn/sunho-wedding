import React, { useState, useEffect } from "react";
import mainImage from "./assets/main-image.png";
import envelopeImage from "./assets/envelope.png";
import starImage from "./assets/star.png";
import cupidImage from "./assets/cupid-56586a.png";
import mapImage from "./assets/map.png";
import tmapIcon from "./assets/tmap-icon.png";
import kakaoIcon from "./assets/kakao-icon.png";
import naverIcon from "./assets/naver-icon.png";
import copyIcon from "./assets/copy-icon.png";
import LetterIcon from "./components/LetterIcon";
import PhoneIcon from "./components/PhoneIcon";
import ArrowDownIcon from "./components/ArrowDownIcon";
import ArrowUpIcon from "./components/ArrowUpIcon";

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showGroomAccounts, setShowGroomAccounts] = useState(false);
  const [showBrideAccounts, setShowBrideAccounts] = useState(false);

  // 결혼식 날짜 설정 (2025년 1월 18일 오후 2시 - 한국 시간)
  const weddingDate = new Date("2025-11-29T14:00:00+09:00");

  useEffect(() => {
    const timer = setInterval(() => {
      // 한국 시간 기준으로 현재 시간 계산
      const now = new Date();
      const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
      const distance = weddingDate.getTime() - koreaTime.getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // 결혼식이 이미 지난 경우
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  const openMap = (type) => {
    const address = "동서울웨딩컨벤션";
    const encodedAddress = encodeURIComponent(address);

    switch (type) {
      case "tmap":
        window.open(`tmap://search?name=${encodedAddress}`, "_blank");
        break;

      case "kakao":
        // 카카오맵 앱으로 검색어와 함께 연결
        window.open(`https://place.map.kakao.com/706132423`, "_blank");
        break;

      case "naver":
        window.open(
          `https://map.naver.com/p/search/${encodedAddress}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[600px] "></div>
      </div>

      {/* 메인 컨텐츠 */}
      <div
        className="relative z-10 flex flex-col items-center gap-20 py-10 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        {/* 1단락 - 메인 이미지 및 정보 */}
        <div className="flex flex-col gap-20 w-full">
          {/* 메인 이미지 */}
          <div className="relative w-full rounded-xl overflow-hidden">
            <img
              src={mainImage}
              alt="Wedding Main Image"
              className="w-full h-auto"
            />
            {/* 이미지 위에 겹치는 텍스트 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-[7rem]">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <div className="font-nanum text-4xl drop-shadow-lg">김병춘</div>
                <div className="font-kapakana font-medium text-5xl drop-shadow-lg">
                  and
                </div>
                <div className="font-nanum text-4xl drop-shadow-lg">황선호</div>
              </div>

              <h1 className="font-kapakana font-medium text-5xl text-primary-500 drop-shadow-lg">
                Wedding Day
              </h1>
            </div>
          </div>

          {/* 카운트다운 */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-end gap-2">
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-primary-700">Days</span>
                <span className="text-2xl font-bold text-primary-900">
                  {countdown.days}
                </span>
              </div>
              <span className="text-xl text-primary-900 mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-primary-700">Hour</span>
                <span className="text-2xl font-bold text-primary-900">
                  {countdown.hours}
                </span>
              </div>
              <span className="text-xl text-primary-900 mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-primary-700">Min</span>
                <span className="text-2xl font-bold text-primary-900">
                  {countdown.minutes}
                </span>
              </div>
              <span className="text-xl text-primary-900 mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-primary-700">Sec</span>
                <span className="text-2xl font-bold text-primary-900">
                  {countdown.seconds}
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-primary-900">
                병춘, 선호의 결혼식이{" "}
                <span className="font-bold text-primary-800">
                  {countdown.days}
                </span>
                일 남았습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 2단락 - 연락처 정보 */}
        <div className="w-full px-4 bg-[#903A4DD1] pt-20 pb-[5rem] rounded-b-[2rem] rounded-t-[20rem]">
          <div className="flex flex-col gap-20">
            {/* 편지봉투 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-full">
                <img src={envelopeImage} alt="Wedding Invitation" />
              </div>
              <img src={starImage} alt="star" />
            </div>

            {/* Wedding Invitation 카드 */}
            <div className="bg-primary-50 rounded-xl shadow-custom py-14 text-center gap-[2.25rem] flex flex-col">
              <p className="font-kapakana font-medium text-5xl text-primary-600">
                Wedding Invitation
              </p>
              <div className="flex items-center justify-center">
                <div className="w-[9.76rem] h-[10.34rem] ">
                  <img
                    src={cupidImage}
                    alt="Cupid"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-primary-900 leading-relaxed font-nanum text-base ">
                저희 결혼식에 초대합니다.
                <br />
                서로의 삶에 따듯한 동반자가 되어
                <br />
                사랑과 신뢰로 한 가정을 이루려합니다.
                <br />
                축복의 자리에 귀한 걸음 하시어
                <br />
                저희의 새로운 시작을 함께해 주세요.
              </p>
              <p className="text-primary-900">BC & SH</p>
            </div>

            <div className="bg-primary-50 rounded-xl shadow-custom p-11">
              {/* 신랑 신부 정보 */}
              <div className="flex gap-5 mb-7">
                <div className="flex flex-col flex-1 text-center gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary-900">신랑</p>
                    <p className="font-bold text-primary-900">김병춘</p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center justify-center bg-white transition-colors">
                      <LetterIcon
                        strokeColor="#8F9DCA"
                        borderColor="#BEC0DD"
                        width={48}
                        height={48}
                      />
                    </button>
                    <button className="flex items-center justify-center bg-white transition-colors">
                      <PhoneIcon
                        strokeColor="#8F9DCA"
                        borderColor="#BEC0DD"
                        width={48}
                        height={48}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 text-center gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary-900">신부</p>
                    <p className="font-bold text-primary-900">황선호</p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button className=" flex items-center justify-center bg-white transition-colors">
                      <LetterIcon
                        strokeColor="#CA8F99"
                        borderColor="#DDBEBF"
                        width={48}
                        height={48}
                      />
                    </button>
                    <button className=" flex items-center justify-center bg-white  transition-colors">
                      <PhoneIcon
                        strokeColor="#CA8F99"
                        borderColor="#DDBEBF"
                        width={48}
                        height={48}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* 혼주 정보 */}
              <div className="flex gap-5 mb-5">
                <div className="flex flex-col flex-1 text-center gap-6">
                  <p className="font-bold text-secondary-300">신랑 측 혼주</p>
                  <div className="flex flex-col gap-3">
                    <p className="text-primary-900">
                      아버지{" "}
                      <span className="font-bold text-primary-900">김영호</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <LetterIcon
                          strokeColor="#8F9DCA"
                          borderColor="#BEC0DD"
                          width={48}
                          height={48}
                        />
                      </button>
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <PhoneIcon
                          strokeColor="#8F9DCA"
                          borderColor="#BEC0DD"
                          width={48}
                          height={48}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-primary-900">
                      어머니{" "}
                      <span className="font-bold text-primary-900">최일순</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <LetterIcon
                          strokeColor="#8F9DCA"
                          borderColor="#BEC0DD"
                          width={48}
                          height={48}
                        />
                      </button>
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <PhoneIcon
                          strokeColor="#8F9DCA"
                          borderColor="#BEC0DD"
                          width={48}
                          height={48}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 text-center gap-6">
                  <p className="font-bold text-secondary-300">신부 측 혼주</p>
                  <div className="flex flex-col gap-3">
                    <p className="text-primary-900">
                      아버지{" "}
                      <span className="font-bold text-primary-900">황충길</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <LetterIcon
                          strokeColor="#CA8F99"
                          borderColor="#DDBEBF"
                          width={48}
                          height={48}
                        />
                      </button>
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <PhoneIcon
                          strokeColor="#CA8F99"
                          borderColor="#DDBEBF"
                          width={48}
                          height={48}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-primary-900">
                      어머니{" "}
                      <span className="font-bold text-primary-900">김정하</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <LetterIcon
                          strokeColor="#CA8F99"
                          borderColor="#DDBEBF"
                          width={48}
                          height={48}
                        />
                      </button>
                      <button className="flex items-center justify-center bg-white transition-colors">
                        <PhoneIcon
                          strokeColor="#CA8F99"
                          borderColor="#DDBEBF"
                          width={48}
                          height={48}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 갤러리 섹션 */}
        <div className="w-full px-4">
          <h2 className="font-kapakana text-5xl text-primary-600 text-center mb-5 font-medium">
            Gallery
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-300 rounded-xl"
              ></div>
            ))}
          </div>
        </div>

        {/* 위치 정보 */}
        <div className="w-full px-4">
          <h2 className="font-kapakana text-5xl text-primary-600 text-center mb-5 font-medium">
            Location
          </h2>

          {/* 지도 */}
          <div className="mb-9">
            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4">
              <img
                src={mapImage}
                alt="Wedding Location"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* 지도 버튼들 */}
            <div className="flex gap-1">
              <button
                onClick={() => openMap("tmap")}
                className="flex-1 flex items-center gap-2 p-2 bg-gray-50 rounded-md shadow-button"
              >
                <img src={tmapIcon} alt="Tmap" className="w-7 h-7" />
                <span className="text-primary-900 text-center w-full">
                  티맵
                </span>
              </button>
              <button
                onClick={() => openMap("kakao")}
                className="flex-1 flex items-center gap-2 p-2 bg-gray-50 rounded-md shadow-button"
              >
                <img src={kakaoIcon} alt="Kakao" className="w-7 h-7" />
                <span className="text-primary-900 text-center w-full">
                  카카오
                </span>
              </button>
              <button
                onClick={() => openMap("naver")}
                className="flex-1 flex items-center gap-2 p-2 bg-gray-50 rounded-md shadow-button"
              >
                <img src={naverIcon} alt="Naver" className="w-7 h-7" />
                <span className="text-primary-900 text-center w-full">
                  네이버
                </span>
              </button>
            </div>
          </div>

          {/* 교통 안내 */}
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">버스안내</h3>
              <p className="text-primary-900">
                일반 100번, 119번, 30번, 32번, 357번
              </p>
              <p className="text-primary-900">
                간선 302번, 303번, 452번, 422번
              </p>
              <p className="text-primary-900">지선 4425번</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-900 mb-2">
                지하철 안내
              </h3>
              <p className="text-primary-900">
                복정역 2번 출구에서 셔틀버스 운행(15분 간격)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-900 mb-2">주차 안내</h3>
              <p className="text-primary-900">
                동서울웨딩컨벤션을 입력하세요.
                <br />
                건물 내 지하 주차장 이용가능합니다.
                <br />
                (3시간 무료 최대 1,300대)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <img src={starImage} alt="star" />
        </div>

        {/* 계좌번호 정보 */}
        <div className="w-full px-4">
          <div className="text-center mb-10">
            <h2 className="font-kapakana text-5xl text-primary-600 mb-2 font-medium">
              Account
            </h2>
            <p className="font-semibold text-xl text-primary-400">
              마음 전하는 곳
            </p>
            <p className="text-primary-900 mt-10">
              참석이 어려우신 분들을 위해
              <br />
              계좌번호를 기재하였습니다.
              <br />
              너그러운 마음으로 양해 부탁드립니다.
            </p>
          </div>

          {/* 신랑 측 계좌번호 */}
          <div className="mb-5">
            <div
              className="bg-primary-100 rounded-md p-3 cursor-pointer"
              onClick={() => setShowGroomAccounts(!showGroomAccounts)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary-900">
                  신랑측 계좌번호
                </span>
                <span className="text-primary-900">
                  {showGroomAccounts ? (
                    <ArrowUpIcon strokeColor="#4E3F4A" width={18} height={18} />
                  ) : (
                    <ArrowDownIcon
                      strokeColor="#4E3F4A"
                      width={18}
                      height={18}
                    />
                  )}
                </span>
              </div>
            </div>

            {showGroomAccounts && (
              <div className="bg-primary-100 rounded-md mt-1">
                <div className="p-5 border-b border-primary-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">신랑</span>
                        <span className="font-bold text-primary-900">
                          김병춘
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">우리은행</span>
                        <span className="text-primary-900">
                          1002-661-716173
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("1002-661-716173")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>

                <div className="p-5 border-b border-primary-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">아버지</span>
                        <span className="font-bold text-primary-900">
                          김영호
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">농협은행</span>
                        <span className="text-primary-900">
                          351-1276-8753-83
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("351-1276-8753-83")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">어머니</span>
                        <span className="font-bold text-primary-900">
                          최일순
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">MG 새마을금고</span>
                        <span className="text-primary-900">
                          1720-09-006227-1
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("1720-09-006227-1")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 신부 측 계좌번호 */}
          <div>
            <div
              className="bg-primary-100 rounded-md p-3 cursor-pointer"
              onClick={() => setShowBrideAccounts(!showBrideAccounts)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary-900">
                  신부측 계좌번호
                </span>
                <span className="text-primary-900">
                  {showBrideAccounts ? (
                    <ArrowUpIcon strokeColor="#4E3F4A" width={18} height={18} />
                  ) : (
                    <ArrowDownIcon
                      strokeColor="#4E3F4A"
                      width={18}
                      height={18}
                    />
                  )}
                </span>
              </div>
            </div>

            {showBrideAccounts && (
              <div className="bg-primary-100 rounded-md mt-1">
                <div className="p-5 border-b border-primary-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">신부</span>
                        <span className="font-bold text-primary-900">
                          황선호
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">우리은행</span>
                        <span className="text-primary-900">
                          1002-561-033445
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("1002-561-033445")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>

                <div className="p-5 border-b border-primary-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">아버지</span>
                        <span className="font-bold text-primary-900">
                          황충길
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">KB국민은행</span>
                        <span className="text-primary-900">
                          815-24-0333-490
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("815-24-0333-490")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-primary-900">어머니</span>
                        <span className="font-bold text-primary-900">
                          김정하
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-900">신한은행</span>
                        <span className="text-primary-900">110-373-670146</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("110-373-670146")}
                      className="w-8 h-8 text-primary-400"
                    >
                      <img src={copyIcon} alt="copy" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <img src={starImage} alt="star" />
        </div>
      </div>
    </div>
  );
}

export default App;
