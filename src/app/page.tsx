"use client";

import VerticalInvitation from "@/components/VerticalInvitation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const time = searchParams.get("time") || "";

  return (
    <main className="min-h-screen">
      <VerticalInvitation name={name} time={time} />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
      <PageContent />
    </Suspense>
  );
}

// "use client";

// import VerticalInvitation from "@/components/VerticalInvitation";
// import { useSearchParams } from "next/navigation";

// export default function Home() {
//   const searchParams = useSearchParams();

//   const name = searchParams.get("name") || "";
//   const time = searchParams.get("time") || "";

//   return (
//     <main className="min-h-screen">
//       <VerticalInvitation name={name} time={time} />
//     </main>
//   );
// }

// import VerticalInvitation from "@/components/VerticalInvitation";

// // Runtime-г dynamic гэж зааж өгнө
// export const dynamic = "force-dynamic";

// export default function Home({
//   searchParams,
// }: {
//   searchParams?: { [key: string]: string | string[] };
// }) {
//   const name = Array.isArray(searchParams?.name)
//     ? searchParams?.name[0]
//     : searchParams?.name;

//   const time = Array.isArray(searchParams?.time)
//     ? searchParams?.time[0]
//     : searchParams?.time;

//   return (
//     <main className="min-h-screen">
//       <VerticalInvitation name={name} time={time} />
//     </main>
//   );
// }

// import VerticalInvitation from "@/components/VerticalInvitation";

// export default async function Home({
//   searchParams,
// }: {
//   searchParams?: { [key: string]: string | string[] | undefined };
// }) {
//   const name = Array.isArray(searchParams?.name)
//     ? searchParams?.name[0]
//     : searchParams?.name;

//   const time = Array.isArray(searchParams?.time)
//     ? searchParams?.time[0]
//     : searchParams?.time;

//   return (
//     <main className="min-h-screen">
//       <VerticalInvitation name={name} time={time} />
//     </main>
//   );
// }
