import VerticalInvitation from "@/components/VerticalInvitation";
import { cookies, headers } from "next/headers";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: PageProps) {
  const name = Array.isArray(searchParams.name)
    ? searchParams.name[0]
    : searchParams.name;
  const time = Array.isArray(searchParams.time)
    ? searchParams.time[0]
    : searchParams.time;

  return (
    <main className="min-h-screen ">
      {/* <InvitationCard /> */}
      <VerticalInvitation name={name} time={time} />
    </main>
  );
}
//
