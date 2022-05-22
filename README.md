# **The Mobility Challenge Travel app**

## Exempel Bilder
<p float="left">
<img src="public\App.png" alt="drawing" width="250"/>
<img src="public\AppWithPosition.png" alt="drawing" width="250"/>
<img src="public\AppOpenDetails.png" alt="drawing" width="250"/>
</p>


## Introduktion
Här finner du en app skapad i React gjort originellt för en tävling som fokuserar på hållbara och klimatsmarta mobilitetslösningar, arrangerat av Consid & Riksbyggen runt år 2022

*Skapat av: Josiah Barkström och David Fagerström*

## Målet
Idén och målet med tävlingen var att skapa en innovativ mobilitetslösning som möjliggör enklare vardags transporter och resor för invånarna i Kv. Spårvagnshallarna. Men som också fungerar som en guide till att ta mera genomtänkta transport beslut med hänsyn till påverkan på klimat, tid och pengar. Det ska vara enkelt att resa klimatsmart.

## Projekt idén
Vår idé är att göra en webbaserad mobilapp som gör det enklare och snabbare för slutanvändaren att jämföra flera transportsätt och låter användaren själv ta beslutet av sitt önskade transportsätt baserat på klimateffekt, tid och pengar. Med det här projektet ville vi uppmuntra fler människor att gå utanför sin komfortzon och prova nya sätt för klimatsmarta transporter och resor.

## Varför du borde välja våran app
Vår app har både en tydlig målgrupp och samhällsfunktion, att opartiskt kombinera alla lokala transportsätt inom Helsingborg i ett enkelt paket så att slutanvändaren kan ta mer genomtänkta beslut.

Vår app är lätt skalbar och kan sprängas och användas i flera regioner i Sverige, vilket stöder och integrerar ännu fler transportsätt från flera olika företag/varumärken.

Vi arbetar i våra kunders intresse genom att kombinera information från flera olika appar och presentera den i ett komplett paket. De sparar tid, pengar och besväret att behöva ladda ner och hålla flera appar uppdaterade.

Med vår app-lösning ger vi slutanvändaren en större tydlig bild av hur deras vardagliga resvanor påverkar miljön, deras ekonomi och tid. Med vårt verktyg vill vi inspirera fler människor att titta utanför ramarna och prova nya sätt att resa de kanske inte tänkt på innan.


## App funktioner
Listat här är de funktioner vi håller på att implementerar och utvecklar in i appen.

- En lätt manövrerad hemsida med en urskiljande app identitet

- Val av transport sätt:

    - Personbil
    - Pool bil
    - Cykel
    - Pool Cykel
    - Buss (Skånetrafiken)
    - El-sparkcykel (Bolt)
    - Gå
    
## Extra funktioner
Listat här är idéer som vi anser viktiga att implementera i en framtida version av våran app som krävs för att kunna officiellt släppa appen till de större massorna som en produkt.

- Betalmetoder (Swish, kreditkort/kontokort, Förbetalt kort)
- Användning av fler API:er från fler regioner
- Fordons platsposition från de olika rese sätten
- Stöd för utlandsresor?

## Utförande
Vi kom in i tävlingen och startade utvecklandet på appen ganska sent. Detta gjorde att vi inte hann implementera alla metoder vi hade planerat till den slutgiltiga appen. Vi startade projektet och samarbetet genom att skapa ett designdokument över appen som inkluderar punkter vi fann viktiga för en klimat och mobilitetsfokuserad app samt önskade funktioner med tydliga kopplingar till ämnet. Vi fortsatte med att börja förverkliga vårat design-dokument och föra över det från papper till app. Resultatet av våran skapelse går att se här och är en tidig prototyp av våran vision för en klimatsmart mobilitets-app.

## Design val
Vi valde att använda oss av React språket som också inkluderar HTML, CSS, och JavaScript språken. Anledningen till valet att använda React ligger i dess flexibilitet i programmering för flera plattformar med flera integrationer, och dess upprätthåll av Meta samt den övergripande bekväma utvecklings-miljö den ger.

För API integrationerna valde vi att främst köra TrafikLab för information gällande kollektivtrafiken. Vi valde TrafikLab på grund av deras: lättanvändlighet, dokumentation, fortsatt framtida underhållning och utveckling och den skalbarhet som kommer med att kombinera fler regioners kollektivtrafik i framtida versioner av vår app.

För elscooter valde vi att starta med att integrera Bolt's elsparkcyklar genom att använda Bolt API.

Slutligen för att beräkna rese tid med bil, gång, cyklar och elsparkcyklar använder vi Google Maps API. Vi valde att köra på Googles APi:er utifrån våra tidigare erfarenheter att kalla på deras API:er och användning av deras pålitliga kart applikation.

## Setup
För manuell deployment i test miljö: Se till att du har node.js installerat, ställ dig i root mappen (./travel-app), där kör du npm start för att starta rest miljön.

Om du direkt vill se sidan direkt kan du följa länken <a  href=https://rese.xn--ml-yia.net/ >HÄR</a> eller skanna qr-koden.


<p align="center">
   <img src="public\qrcode_rese.mål.net.png" alt="drawing" width="200"/>
</p>
