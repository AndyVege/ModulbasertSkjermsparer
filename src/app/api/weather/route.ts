import { NextResponse } from 'next/server'

export async function GET() {
  

  const lat = 59.91  // Oslo
  const lon = 10.75


  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
    {
      next: {revalidate: 600},
      headers: {
        "User-Agent" : "graa-sone/1.0 andyvege@gmail.com"
      },
    }
  )

  if (!response.ok) {
    return NextResponse.json({ error: "Klarte ikke å hente vær"}, {status: 500})
  }

  const data = await response.json()

  const now = data.properties.timeseries[0]

  const temperature = now.data.instant.details.air_temperature; // henter temperatur
  const symbol = now.data.next_1_hours?.summary.symbol_code || "unknown"; // henter værikon
  const rainAmount = now.data.next_6_hours?.details?.precipitation_amount ?? 0; // sjekker regnnnivå i.la neste 6 timene

  return NextResponse.json({
    temperature, symbol, rainAmount
  })


}
