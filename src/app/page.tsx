import Image from "next/image";
import Clock from '@/components/clock'
import Weather from "@/components/weather";
import Limelight from "next/font/google"
import Ruter from "@/components/ruter";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-5 p-5 h-full text-center">
      <div className="flex flex-col items-start gap-5">
        <div className= " p-5 bg-amber-800">
          <Clock />
        </div>
        <div className="p-5 bg-amber-800">
          <Weather />
        </div>
      </div>

      <div className="flex flex-col items-end gap-5">

        <div>
          <h1>Nyhetsoverskrift:</h1>
          <p>Kong Harald tweeter: <br></br> "Jeg syntes ikke noe om han Shaman Durek, jeg"</p>
        </div>

        <div className="p-3 rounded-2xl">
          <Ruter />
        </div>

        <div className="">
        <iframe className=" p-9 rounded-2xl w-[50ch] text-center" src="https://open.spotify.com/embed/playlist/1kC9HlBr3cPQ1gyfAgjWG6?utm_source=generator&theme=0" width="100%" height="250" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

      </div>
    </main>
  );
}
