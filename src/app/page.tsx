import Image from "next/image";
import Clock from '@/components/clock'
import Weather from "@/components/weather";
import Limelight from "next/font/google"

export default function Home() {
  return (
   <div className="container max-w-screen-1xl mx-auto px-4">
    <main className="flex gap-24 items-center">

      <div className="border-2 p-9 m-5 rounded-2xl bg-neutral-900">
        <Weather />
      </div>

      <div className="border-2 p-9 rounded-2xl w-[80ch] bg-neutral-900 text-center">
        <Clock />
      </div>


      <div>
       <iframe className="border-2 p-9 rounded-2xl w-60ch] bg-neutral-900 text-center" src="https://open.spotify.com/embed/playlist/1kC9HlBr3cPQ1gyfAgjWG6?utm_source=generator&theme=0" width="150%" height="250" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

    </main>
   </div>
  );
}
