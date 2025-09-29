## Om Prosjektet
Dette prosjektet er i korte trekk en modulbasert skjermsparer som er laget for å gi relevant og nyttig informasjon ved et øyekast. Jeg har bygd appen for å brukes på en gammel svart-hvitt tv jeg kjøpte på et bruktmarked, men i teorien kan den kjøres på alle skjermer som kan vise et nettleservindu. For øyeblikket bruker jeg en chromecast der jeg caster et vindu til tv'en- men planen for videre implementering er å bruke en mini pc med hdmi (raspberry pi eller arduino).

## Teknisk Bakgrunn
Prosjektet er bygget med TypeScript og Next.js. Dette var både for å viderebygge ferdigheter innenfor TypeScript, men også da det ga mening for en webapp som dette. 

### Vær-modul
Vær-modulen bruker en API-kobling til MET sin værdata, og viser sanntidsdata fra Oslo. MET har også en ikonpakke, som lar deg bruke samme ikoner som vises på yr.no. Regnvarslen sjekker hvor mange milimeter regn som er meldt, og kommer med forskjellige kommentarer utifra hvor mye regn det er meldt de neste timene.

### Ruter-modul
Ruter hadde dessverre ikke noen enkel API å integrere i nettsiden her, men heller et eget system hvor du kan få en lenke som viser sanntidsoppdatert data for enkelte stopp. Jeg gikk derfor for å integrere hele den siden (men croppe og skalere ned litt) inn i webappen, og prøve å få den til å passe inn så sømløst som mulig.

## Hvordan starte applikasjonen

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
