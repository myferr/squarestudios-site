"use client";

import Image from "next/image";

import { FloatingFeatures } from "@/components/RotatingFeatures";
import GuildedLogoSrc from "@/public/Guilded Logomark White.png";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0f11] to-black relative">
      <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center p-4 md:p-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              className="invert hover:invert-0 border rounded-3xl"
              width={80}
              height={38}
              onClick={() => {
                window.location.href = "/";
              }}
              priority
            />{" "}
          </div>

          <div className="md:flex items-center gap-8 text-gray-300 bg-slate-800/50 px-6 py-4 rounded-lg">
            <Link
              href="/omni/commands"
              className="hover:text-white hover:cursor-pointer transition"
            >
              Commands
            </Link>
            <Link href="/omni/status" className="hover:text-white transition">
              Status
            </Link>
          </div>

          <button
            className="bg-[#111820] hover:bg-[#36363D] duration-300 text-white flex items-center gap-2 px-4 py-2 rounded-lg"
            onClick={() => {
              window.location.href = "/omni/i";
            }}
          >
            <Image
              src={GuildedLogoSrc}
              width={25}
              height={25}
              alt="Guilded Logo"
            />
            Invite to Guilded
          </button>
        </nav>

        <main className="pt-20 md:pt-32 relative font-satoshi">
          <div className="flex flex-col lg:flex-row items-start gap-8 justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-6xl mb-4 leading-tight">
                <span className="bg-gradient-to-br from-slate-50 to-teal-100 text-transparent bg-clip-text">
                  omni
                </span>{" "}
                <span className="text-white">is Guildeds</span> <br />
                <span className="text-white">premier </span>
                <span className="bg-gradient-to-l from-teal-200 via-slate-50 to-teal-200 text-transparent bg-clip-text font-medium">
                  moderation
                </span>{" "}
                <span className="text-white">app</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Meet the best moderation bot on Guilded.gg, keeping your
                communities safe and rules in place. With Omni, it is easy to
                enforce rules and authority.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-2 flex items-center gap-2 rounded-lg">
                  <Link href="https://guilded.gg/square">Support</Link>
                </button>
                <button className="bg-[#6b8f9b] hover:bg-[#5a7a85] px-6 py-2 rounded-lg text-white">
                  <Link
                    href="https://github.com/Square-Studios/omni"
                    target="_blank"
                    className="flex gap-2"
                  >
                    GitHub
                    <ArrowUpRightFromSquareIcon className="size-4 relative top-1" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-1 max-w-[300px] relative right-48">
              <FloatingFeatures />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
