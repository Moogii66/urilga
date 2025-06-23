// components/InvitationCard.tsx
export default function InvitationCard() {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-blue-100 rounded-2xl shadow-lg p-8 border border-blue-300">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        🎈 Урилга 🎈
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Та манай бяцхан одны <span className="font-semibold">усны наадамд</span>{" "}
        хүрэлцэн ирэхийг урьж байна!
      </p>
      <div className="bg-white rounded-xl p-4 shadow-md">
        <p className="text-md mb-2">
          <strong>👶 Хүүхдийн нэр:</strong> Номин-Эрдэнэ
        </p>
        <p className="text-md mb-2">
          <strong>📅 Огноо:</strong> 2025 оны 7-р сарын 5
        </p>
        <p className="text-md mb-2">
          <strong>🕒 Цаг:</strong> 14:00
        </p>
        <p className="text-md mb-2">
          <strong>📍 Байршил:</strong>&quot;Happy Water Park&quot;, Хан-Уул
          дүүрэг
        </p>
      </div>
      <p className="text-center text-pink-600 mt-6 font-medium">
        💦 Хүүхдүүдэд зориулсан тоглоом, бэлэг, гэнэтийн бэлгүүд таныг хүлээж
        байна!
      </p>
    </div>
  );
}
