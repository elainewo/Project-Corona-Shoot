// ---------------------------------------- TypeWriter ----------------------------------------
let t = 0;
let txt = 'The world is near its end. The world is almost done. China has got it under control, Germany is still struggling but optimistic and USA is going to lose. Can you help the countries to overcome the apocalypse? Choose toiletpaper as your main weapon and fight!';
let speed = 50;
function typeWriter() {
    if (t < txt.length) {
        document.getElementById("delta1").innerHTML += txt.charAt(t);
        t++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()
// ---------------------------------------- TypeWriter ----------------------------------------
