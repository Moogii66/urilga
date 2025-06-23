import VerticalInvitation from "@/components/VerticalInvitation";

// Runtime-г dynamic гэж зааж өгнө
export const dynamic = "force-dynamic";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const name = searchParams?.name;
  const time = searchParams?.time;

  return (
    <main className="min-h-screen">
      <VerticalInvitation name={name} time={time} />
    </main>
  );
}

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
