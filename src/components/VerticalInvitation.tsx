"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

// export default function VerticalInvitation({
//   // name,
//   time,
// }: {
//   // name: string;
//   time: string;
// }) {
export default function VerticalInvitation() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     audio.volume = 0.4; // Хүч багатай тоглуулах
  //     audio.play().catch((err) => {
  //       console.log("Автоматаар тоглуулах боломжгүй:", err);
  //     });
  //   }
  // }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Тоглуулахад алдаа гарлаа:", err);
      });
    }

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FF0080", "#FFD700", "#00FFEA", "#FF6F00"],
    });
  };

  useEffect(() => {
    handlePlay();
    // 2 секунд тутамд party animation
    const interval = setInterval(() => {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF0080", "#FFD700", "#00FFEA", "#FF6F00"],
      });
    }, 2000);

    return () => clearInterval(interval); // Component устахад цэвэрлэх
  }, []);

  const MAP_URL = "https://maps.app.goo.gl/g4YS97jwGHNd7wxr8";

  return (
    <div
      className="w-full min-h-screen bg-[#02093F] bg-cover bg-center relative flex flex-col items-center  "
      style={{ backgroundImage: "url('/asd.jpg')" }}
    >
      <div className="w-full min-h-screen bg-[#00000090] bg-cover bg-center relative flex flex-col items-center py-10 px-4 ">
        <h1 className="text-4xl text-[#FF0080] font-bold  font-mongol mb-4">
          Урилга
        </h1>

        <p className="text-center text-white text-lg font-mongol max-w-md leading-loose">
          Хайрт найз та бүгдийг
          <br />
          {/* <span className="text-[#FF0080] extrabold text-2xl"> */}
          <span className=" extrabold text-2xl">Д.Одгэрэл -н</span>
          <br /> төрсөн өдрийн баярт хүрэлцэн
          <br /> ирэхийг урьж байна.
          {/* <br /> хэмээн урьж байна. */}
        </p>

        {/* Хүүхдийн зураг */}
        <div className="mt-8 mb-6 relative">
          <div className="w-80 h-80 rounded-full border-[6px] border-[#FF0080] overflow-hidden">
            <Image
              src="/zurag1.png"
              alt="Child"
              className="object-cover w-full h-full"
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </div>
        <p className="text-center text-white text-lg font-mongol max-w-md  ">
          {/* <span className="text-yellow-300 font-semibold">Содонгоо -н</span> */}
          Хэзээ:
          <br />
          {`2025.08.16 19:00 цагт`}
        </p>
        <div className="flex gap-5">
          <button
            className="mt-6 text-white bg-[#FF0080] px-4 py-2 rounded"
            onClick={handlePlay}
          >
            Дууг тоглуулах 🎉
          </button>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-white bg-[#FF0080] px-4 py-2 rounded inline-block text-center"
          >
            Location
          </a>
        </div>

        <audio ref={audioRef} loop autoPlay>
          <source src="/audio/duu1.mp3" type="audio/mpeg" />
          Таны хөтөч энэ аудио-г дэмжихгүй байна.
        </audio>
      </div>
    </div>
  );
}

// <div
//   className="w-full min-h-screen bg-[#02093F] bg-cover bg-center relative flex flex-col items-center py-10 px-4 "
//   style={{ backgroundImage: "url('/tumen-nast-bg.png')" }}
// >
//   <Image
//     src="/corner-khee.png"
//     alt="Corner TL"
//     width={60}
//     height={60}
//     className="absolute top-4 left-4"
//   />
//   <Image
//     src="/corner-khee.png"
//     alt="Corner TR"
//     width={60}
//     height={60}
//     className="absolute top-4 right-4 rotate-90"
//   />
//   <Image
//     src="/corner-khee.png"
//     alt="Corner BL"
//     width={60}
//     height={60}
//     className="absolute bottom-4 left-4 -rotate-90"
//   />
//   <Image
//     src="/corner-khee.png"
//     alt="Corner BR"
//     width={60}
//     height={60}
//     className="absolute bottom-4 right-4 rotate-180"
//   />

//   <h1 className="text-4xl font-bold text-yellow-400 font-mongol mb-4">
//     Урилга
//   </h1>

//   <p className="text-center text-white text-lg font-mongol max-w-md leading-loose">
//     {name !== "" ? (
//       <>
//         {`Эрхэм хүндэт ${name} таныг гэр бүлийн `}
//         <br />
//         хамт бидний охин
//       </>
//     ) : (
//       `Эрхэм хүндэт таныг гэр бүлийн хамт бидний охин`
//     )}
//     <br />
//     <span className="text-yellow-300 font-semibold text-2xl">
//       М.Содонгоо -н
//     </span>
//     <br /> “Сэвлэг үргээх ёслол” -д зочлон
//     <br /> ирж ерөөл буян хайрлана уу
//     <br /> хэмээн урьж байна.
//   </p>

//   {/* Хүүхдийн зураг */}
//   <div className="mt-8 mb-6 relative">
//     <div className="w-80 h-80 rounded-full border-[6px] border-yellow-400 overflow-hidden">
//       <Image
//         src="/zurag.png"
//         alt="Child"
//         className="object-cover w-full h-full"
//         width={400}
//         height={400}
//         priority={true}
//       />
//     </div>
//   </div>
//   <p className="text-center text-white text-lg font-mongol max-w-md  ">
//     {/* <span className="text-yellow-300 font-semibold">Содонгоо -н</span> */}
//     Хэзээ:
//     <br />
//     {`2025.06.29 ${time !== "" ? time : "13:00"} цагт`}
//   </p>
//   <button
//     className="mt-6 text-white bg-yellow-500 px-4 py-2 rounded"
//     onClick={handlePlay}
//   >
//     Дууг тоглуулах
//   </button>
//   <audio ref={audioRef} loop autoPlay>
//     <source src="/audio/duu.mp3" type="audio/mpeg" />

//     {/* Таны хөтөч энэ аудио-г дэмжихгүй байна. */}
//   </audio>
// </div>;
