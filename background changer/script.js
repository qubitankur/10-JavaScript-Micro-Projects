const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    document.body.style.background = randomBg();
});

function randomBg(){
        let hue = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        let lightness = Math.floor(Math.random() * 100);
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
    