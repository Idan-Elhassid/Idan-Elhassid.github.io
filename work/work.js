const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const pic = document.getElementById("pic");

about.addEventListener("click", function(event){
    const id = event.target.dataset.id;
    if(id){
        // remove active from all buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            // add active to the target that was clicked
            event.target.classList.add("active");
        });
        // hide all other articles
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
        if (element.id === "manager"){
            pic.src = "leader.PNG";
        }
        else if (element.id === "helpdesk") {
            pic.src = "helpdesk.jpg";
        }
        else {
            pic.src = "servers.jpg";
        }
    }
});