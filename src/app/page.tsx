import Image from "next/image";
import Clock from '@/components/clock'
import Weather from "@/components/weather";
import Limelight from "next/font/google"
import Ruter from "@/components/ruter";

export default function Home() {
  return (
   <div className="container max-w-screen-1xl mx-auto px-4">
    <main className="flex flex-col gap-4 p-5 items-center justify-center h-full text-center">

      <div className="p-9 rounded-2xl w-[50ch] text-center">
        <Clock />
        
      </div>

      <div className="p-9  rounded-2xl  h-[30ch]">
        <Weather />
      </div>

      <div className="p-9 rounded-2xl w-[80ch] text-center">
        <Ruter />
      </div>

      <div>
       <iframe className=" p-9 rounded-2xl w-[60ch] text-center" src="https://open.spotify.com/embed/playlist/1kC9HlBr3cPQ1gyfAgjWG6?utm_source=generator&theme=0" width="100%" height="250" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

    </main>
   </div>
  );
}
