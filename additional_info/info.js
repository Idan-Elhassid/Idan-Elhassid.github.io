const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".card")){
    card.onmousemove = e => handleOnMouseMove(e);
}

const btns = document.querySelectorAll(".nav-toggle");
btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const element = event.currentTarget;
         if (element.id === "github"){
            window.open("https://github.com/Idan-Elhassid", "_blank");
        }
        else if (element.id === "linkedin"){
            window.open("https://www.linkedin.com/in/idan-elhassid-483024228/", "_blank");
        }
        else if (element.id === "mail"){
            window.open("mailto:edan.elhassid@gmail.com");
        }

});
});



