"use client";

import { useEffect, useState } from 'react'


export default function Weather() {
 
    const [weather, setWeather] = useState(null)

    useEffect(() => {
    async function fetchWeather() {
      const res = await fetch('/api/weather')
      const data = await res.json()
      setWeather(data)
    }

        fetchWeather()

        const interval = setInterval(fetchWeather, 600000) // hvert 10. minutt ? dobbeltsjekk senere

        return () => clearInterval(interval) // rydd opp når komponenten fjernes

    }, [])

    
    var regn = ""

    try {
    if (weather?.rainAmount === 0) {
        regn = "Ikke noe regn!";
    }
    else if (weather?.rainAmount > 0 && weather?.rainAmoun < 1.5) {
        regn = "Ta med en paraply.\n Nedbør: " + weather.rainAmount + "mm";
    }
    else if (weather?.rainAmount > 1.5) {
        regn = "På med regnbuksa og poncho!\n Nedbør: " + (weather.rainAmount) + "mm";
    }
    else {
        regn = "Nedbør" + (weather.rainAmount) + "mm";
    }}  catch(e) {console.log("Error: " + e)
        console.log("RainAmount: "+ weather?.rainAmount);}
    
    return (
        <div className="">
        {weather ? (
        <div className="items-center text-center">
            <p className="text-xl font-bold">{regn}</p>
            <div className="flex items-center gap-4">
                <img className="w-18" src={`/weather-icons/${weather.symbol}.png`} alt={`Værikon: ${weather.symbol}`} />
                <p className="text-6xl">{Math.round(weather.temperature)}°C</p>
            </div>
        </div>
        ) : (
       <p>Laster værdata...</p>
            )}
        </div>
)

}