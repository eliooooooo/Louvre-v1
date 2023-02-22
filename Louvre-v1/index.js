const liens = document.querySelectorAll(".menu20 > .deroulant");
const img = document.querySelectorAll(".retour");
const menu = document.querySelector(".menu20");
const allmenu = document.querySelectorAll(".menu20");

for (let l of liens){
    l.addEventListener("click", ()=>{
        menu.style.display = "none";
        document.querySelector("#menu" + l.id).style.display = "block";
    })
};

for (let i of img){
    i.addEventListener("click", ()=>{
        for (let y of allmenu){
            y.style.display = "none";
        }
            document.querySelector("#menu2accueil").style.display = "block";
    })
};



mybutton = document.getElementById("bouton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

