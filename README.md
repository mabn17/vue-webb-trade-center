# Vue Website
A frontend for [JsRamverk](https://jsramverk.me/) project at BTH.  
All of the **reasons** behind the techniques chosen for both the frontend and the backend can be found [here](https://gist.github.com/mabn17/6d6016b1e5bce632f8cbdf7a29013fad).  

# Badges
[![Build Status](https://travis-ci.org/mabn17/vue-webb-trade-center.svg?branch=master)](https://travis-ci.org/mabn17/vue-webb-trade-center)  
[![Build Status](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mabn17/vue-webb-trade-center/?branch=master)

## Requirements
[Server](https://github.com/mabn17/server-webb-trade-center/)

## Installation
1. Clone the repo `git clone git@github.com:mabn17//vue-webb-trade-center.git`
2. Install the dependencies cd vue-webb-trade-center && npm install
3. Change the congif values inside `.env`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

###### Thanks
This website was made with vue-chartjs, semantic ui vue and bootstrap grid. 

# Teknikval - Frontend (Kav 2)

Eftersom jag var klar med koden för alla kursmomenten innan kmom01 slutade så började jag lungt med React projektet, jag kanske gjorde en fjärdedels krav per dag och blev klar med hela funktionaliteten men bra marginal. React har jag jobbat med under hela grupprojektet, sommaren och nu på Sigma så jag känner mig ganska lugn med valet och därför blev det mitt huvudval av alla tre ramverken så att man inte behövde stressa. Detta ledde dock till att jag slarvade en hel del för att jag tänkte att man kunde fixa det lite senare för jag hade gått om tid.

I mitten av kmom06 tänkte jag börja städa upp lite men bestämde mig att jag likaväl kan göra en ny applikation i Vue som jag skulle ta det lungt med och fixa till det jag kände var dåligt. Jag kände att jag redan hade ett projekt klars så hinner jag inte med Vue så gör det inget men efter fyra dagar blev jag klar och riktigt nöjd. Däremot så la jag inte så mycket tid på stylen i Vue applikationen när fokuset var mer att lära sig hur det fungerade, precis som jag gjorde under kursmomenten, en sak i taget.

Det finns ett flertal olika faktorer som kan avgöra vad som är det bästa ramverket för ett företag för projektet, liknande det första kravet skulle nog inte en webbplats helt byggd på JavaScript vara det bästa valet för en trading.

Alla node projekt har oftast ett antal paket som behövs för att köra projektet, detta kommer att integrations problem så snabbt något uppdateras eller i västa fall tas bort. Just av den anledningen skulle jag nog inte velat använda mig av JS men, så länge som man "sparar" sina moduler i t.ex zip format skall det inte vara farligt och förhoppningsvis att räcka. Valet skulle bero lite på budgeten också, har man lite mer skulle Angular inte skada då man kan undvika de flesta av problemen med paketen samt att scuffholden för alla vyer, modeler osv ger en konsistent struktur. Men baserat på hur jag kände det var att jobba med ramverken tar detta längre tid att utveckla. React är det mest flexibla då man inte får någonting "gratis" men då läggs det även lite mer av utvecklarna, listan med deppendencies kommer till att bli lång och det kan ta lite längre stund att få till grundstrukturen på ett bra sätt. Just därför skulle jag välja Vue då den är som ett mellanting på båda ramverken, allt som behövs finns redan tillgängligt samtidigt som det går snabbt att komma igång och vidareutveckla.

## Routes
**Delade routes**
\*/\* - Index sidan, inget speciellt.  
\*/about\* - Om sidan, renderas från markdown.  
\*/register\* - Här kan användare registrera sig.  
\*/login\* - Här loggar använda in sig.  
\*/about\* - About sidan, renderas från en markdown fil.  
\*/account\* - Behövs vara inloggad, invalid/utgånga tokens tar en tillbaka till login. Här visas grafer, tabell med mer information samt en summering på sin låsta balans och hur mycket aktierna är värda. Detta är endast på de aktierna man äger (uppdateras på socket).  
\*/stocks/:namn\* - Visar hela grafen, beskrivning på varan och en lista för att snabbt kunna titta på andra aktier (uppdateras på socket).  
\*/update\* - Uppdaterar alla priser.  
\*/shop\* - Listar alla metaller man kan investera i, de är uppdelade 3-4 items per "sida" och man kan söka på alla namnen, när man trycker på "Add to cart" så kommer ett nummer bredvid varukorgen övanför sökfältet att ökas. Klickar man på korgen så öppnas det en modal där man kan editera varukorgen och köpa dem (uppdateras på socket).  
