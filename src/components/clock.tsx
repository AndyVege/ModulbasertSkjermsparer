"use client";

import { useEffect, useState } from 'react'

export default function Clock() {
 const [time, setTime] = useState(new Date())
 useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
 })

 const timeString = time.toLocaleTimeString('no-NO', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const dateString = time.toLocaleDateString('no-NO', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})
 
  return(
    
      <div className="text-white text-center">
        <p className="text-3xl mt-2">{dateString}</p>
        <p className="text-8xl font-mono font-bold">{timeString}</p>
    </div>
  )
}
