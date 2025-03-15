import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <main className="flex flex-col justify-center items-center h-screen">
        <Image
          src="/logo.png"
          alt="Logo"
          className="hover:invert border rounded-3xl"
          width={280}
          height={238}
          priority
        />
      </main>
      <footer className="fixed left-0 bottom-0 w-full text-center mb-3">
        <span className="font-extrabold uppercase mr-12 text-sm">
          © 2025 Square Studios
        </span>
        <Button variant={"ghost"} className="font-extrabold uppercase" asChild>
          <Link href="/omni">Omni</Link>
        </Button>
        <Button variant={"ghost"} className="font-extrabold uppercase" asChild>
          <Link href="https://www.github.com/Square-Studios">GitHub</Link>
        </Button>
        <Button variant={"ghost"} className="font-extrabold uppercase" asChild>
          <Link href="https://guilded.gg/square">Guilded.gg</Link>
        </Button>
        <Button variant={"ghost"} className="font-extrabold uppercase" asChild>
          <Link href={"/team"}>Our Team</Link>
        </Button>
      </footer>
    </div>
  );
}
