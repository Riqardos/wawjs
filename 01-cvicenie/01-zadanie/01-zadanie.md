
# Zaujímavé JavaScript aplikácie
## SheetJS js

### Charakteristika
SheetJS je nástroj na parsovanie a vytváranie excel dokumentov. Umožňuje napríklad rýchle a jednoduché konvertovanie HTML tabuliek do excel súboru. Má bohatu podporu rôznych formátov.

Podporované formáty:
![Podporované formáty
](https://github.com/SheetJS/js-xlsx/raw/master/formats.png)

### Ukážka
Vytvorenie nového workbooku: 
```javascript
var wb = XLSX.utils.book_new();
```

Základné nastavenia workbooku:
```javascript
wb.Props = {
                Title: "SheetJS Tutorial",
                Subject: "Test",
                Author: "Red Stapler",
                CreatedDate: new Date(2017,12,19)
        };
``` 
Vytvorenie nového názvu sheetu:
```javascript
wb.SheetNames.push("Test Sheet");
```

Vloženie dát do riadku konkrétneho sheetu:
```javascript
var ws_data = [['hello' , 'world']];
var ws = XLSX.utils.aoa_to_sheet(ws_data);
wb.Sheets["Test Sheet"] = ws;
```

### Zdroje
Návod:
https://redstapler.co/sheetjs-tutorial-create-xlsx/
Zdrojový kód:
https://github.com/SheetJS/js-xlsx?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more



## G2: The Grammar of Graphics in JavaScript

### Charakteristika
Vysoko užívateľsky prívetivý a rozšíriteľný nástroj na vizualizáciu údajov. Užívatelia môžu vytvárať rôzne interaktívne štatistiky. Z údajov môžeme ľahko získať požadované zobrazenie grafu pomocou niekoľkých riadkov kódu.

### Ukážka
Vytvorenie jednoduchého grafu:
![enter image description here](https://camo.githubusercontent.com/c9b086e9e347f37d499bc0946ea1c19ae3d13497/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f61487656674669426e477a7a4b43456a6456744c2e706e67)

```javascript
import G2 from '@antv/g2';

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 1150 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const chart = new G2.Chart({
  container: 'c1',
  width: 500,
  height: 500
});

chart.source(data);
chart.interval().position('genre*sold').color('genre');
chart.render();
```

### Zdroje
Zdrojový kód:
https://github.com/antvis/g2?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more

## Tone.js

### Charakteristika
Framework na vytváranie interaktívnej hudby v prehliadači. Poskytuje pokročilé nástroje pre tvorbu hudby. Obsahuje množstvo syntetizátorov a rôznych efektov. 

### Ukážka
Funkcia ktorá zahrá štvrť tón:
```javascript
var loop = new Tone.Loop(function(time){
	synth.triggerAttackRelease("C2", "8n", time);
}, "4n");
```
Zadefinovanie dĺžky opakovania loopu a následné spustenie:
```javascript
loop.start("1m").stop("4m");
Tone.Transport.start();
```

### Zdroje
Zdrojový kód:
https://github.com/Tonejs/Tone.js?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more)

    
    