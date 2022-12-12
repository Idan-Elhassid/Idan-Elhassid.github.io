const btns = document.querySelectorAll(".tab-btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const element = event.currentTarget;
         if (element.id === "Work Experience"){
            window.open("../work/work.html", "_blank");
        }
        else if (element.id === "Education"){
            window.open("../education/education.html", "_blank");
        }
        else if (element.id === "Additional information"){
            window.open("../additional_info/info.html", "_blank");
        }

});
});