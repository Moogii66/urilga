"use client";
import VerticalInvitation from "@/components/VerticalInvitation";
import { useSearchParams } from "next/navigation";

export default function Invite() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Нэр оруулаагүй байна";
  const time = searchParams.get("time") || "Цаг оруулаагүй байна";

  console.log("name :>> ", name);
  console.log("time :>> ", time);
  return (
    // <main className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-50 py-10">
    <main className="min-h-screen ">
      {/* <InvitationCard /> */}
      <VerticalInvitation />
    </main>
  );
}
