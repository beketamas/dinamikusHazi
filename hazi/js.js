const TOMB = ["Advertising Holding PNG 01.png","Advertising Holding PNG 02.png",
"Advertising Holding PNG 03.png","Advertising Holding PNG 04.png",
"Advertising Holding PNG 05.png","Advertising Holding PNG 06.png",
"Advertising Holding PNG 07.png","Advertising Holding PNG 08.png",
"Advertising Holding PNG 09.png","Advertising Holding PNG 10.png",
"Advertising Holding PNG 11.png","Advertising Holding PNG 12.png",
"Advertising Holding PNG 13.png","Advertising Holding PNG 14.png",
"Advertising Holding PNG 15.png","Advertising Holding PNG 16.png",
"Advertising Holding PNG 17.png","Advertising Holding PNG 18.png",
"Advertising Holding PNG 19.png","Advertising Holding PNG 20.png",
"Advertising Holding PNG 21.png","Advertising Holding PNG 22.png",
"Advertising Holding PNG 23.png","Advertising Holding PNG 24.png",
"Advertising Holding PNG 25.png","Advertising Holding PNG 26.png",
"Advertising Holding PNG 27.png","Advertising Holding PNG 28.png",
"Advertising Holding PNG 29.png","Advertising Holding PNG 30.png",
"Advertising Holding PNG 31.png","Advertising Holding PNG 32.png",
"Advertising Holding PNG 33.png","Advertising Holding PNG 34.png",
"Advertising Holding PNG 35.png","Advertising Holding PNG 36.png",
"Advertising Holding PNG 37.png","Advertising Holding PNG 38.png",
"Advertising Holding PNG 39.png","Advertising Holding PNG 40.png",
"Advertising Holding PNG 41.png","Advertising Holding PNG 42.png",
"Advertising Holding PNG 43.png","Advertising Holding PNG 44.png",
"Advertising Holding PNG 45.png","Advertising Holding PNG 46.png",
"Advertising Holding PNG 47.png","Advertising Holding PNG 48.png",
"Advertising Holding PNG 49.png","Advertising Holding PNG 50.png",
"Advertising Holding PNG 51.png","Advertising Holding PNG 52.png",
"Advertising Holding PNG 53.png","Advertising Holding PNG 54.png",
"Advertising Holding PNG 57.png","Advertising Holding PNG 58.png",
"Advertising Holding PNG 59.png","Advertising Holding PNG 60.png",
"Advertising Holding PNG 61.png","Advertising Holding PNG 62.png",
"Advertising Holding PNG 63.png","Advertising Holding PNG 64.png",
"Advertising Holding PNG 65.png","Advertising Holding PNG 66.png"]

TOMB.forEach(x => {
    let ujTarolo = document.createElement("div");
    ujTarolo.classList.add("kartya");
    let kep = document.createElement("img");
    kep.src = `Images\\Advertising Holding PNG\\${x}`;
    let szam = Math.floor(Math.random() * 3) +1;
    kep.classList.add(`kep${szam}`)
    ujTarolo.appendChild(kep);
    document.getElementById("felulet").appendChild(ujTarolo);
})
