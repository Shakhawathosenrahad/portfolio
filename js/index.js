// loading 
const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  document.body.classList.add("loadStart");
  setTimeout(() => {
    document.body.classList.remove("loadStart");
  }, 3000);
})

// NavBar

const nav = document.querySelector("nav")
const menu = nav.querySelector(".menu")
const links = nav.querySelector(".links");

menu.addEventListener("click", (e) => {
  let open = menu.classList.toggle("open")
  open ? links.style.right = "0" : links.style.right = "-300px";
  open ? links.style.borderRadius = 0: links.style.borderRadius = "50% 0 0 100%";
})

let isScrolling = 0;

document.addEventListener("scroll", (e) => {
  let offsetY = document.documentElement.scrollTop;
  isScrolling <= offsetY ? nav.classList.add("scrolling") : nav.classList.remove("scrolling");
  isScrolling = offsetY;
})


const a = links.querySelectorAll("a")
const section = document.querySelectorAll(".section");

document.addEventListener("scroll", () => {
  section.forEach(section => {
    let offsetTop = section.offsetTop -150;
    let scrollTop = document.documentElement.scrollTop;
    let id = section.getAttribute("id")

    if(scrollTop > offsetTop) {
      a.forEach(a => {
        a.classList.remove("active");
        document.querySelector(".links a[href*=" + id + "]").classList.add("active");
      })
    }
  })
})

// sign up

const signup = document.querySelector(".sign");

signup.addEventListener("click", () => {
  document.body.classList.add("loadStart");

  
})


// type writer 

let TypeWriter = document.getElementById("TypeWriter")
let prases = ["Front-End Developer", "Interactive Web Designer", "Responsive Design Specialist", "Troubleshooting Expert", "Creative Problem Solver", "User Experience Enthusiast"]

let isDeleting = 0;

const type = ms => {
  return new Promise(promise => setTimeout(promise, ms))
}

onload = async () => {

  for(let i = 0; i <= prases.length; i++) {

    if(i === prases.length) {
      i = 0;
      isDeleting++;
    }

    for(let j = 0; j <= prases[i].length; j++) {
      TypeWriter.innerText = prases[i].substring(0, j);
      await type(100);
    }

    if(isDeleting === 4) return;
    await type(2000);

    for(let j = prases[i].length -1; j >= 0; j--) {
      TypeWriter.innerText = prases[i].substring(0, j);
      await type(100);
    }
  }
}



// all Projects

import  projects from "./projects.js"


const list = document.querySelector(".projects");
let li;

for (let i = 0; i < projects.length; i++) {

  
    li = `<li>
    <div class="img">
      <img src="${projects[i].img}" alt="">
    </div>
    <h4>${projects[i].name}</h4>
    <p>${projects[i].details}</p>
    <div class="tech">
      <span>Tech Used:&nbsp;</span>
      <span>HTML,</span>
      <span>CSS,</span>
      <span>JAVASCRIPT</span>
    </div>
    <div class="source">
     <a class="btn btn-primary" href="${projects[i].source.code}" target="_blank">
      <span>Code</span>
      <i class="fa-brands fa-github"></i>
     </a>
     <a class="btn btn-outline-light" href="${projects[i].source.live}" target="_blank">
      <span>Live</span>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
     </a>
    </div>
    </li>`;
    
  list.insertAdjacentHTML("beforeend", li);
}



// contact img

const img = document.querySelector(".contact-img img")

img.addEventListener("mousemove", (e) => {
  let offsetTop = e.offsetY;
  let offsetLeft = e.offsetX;
  let width = img.offsetWidth;
  let height = img.offsetHeight;
  let moveX = offsetLeft - width/3;
  let moveY = offsetTop - height/3;
  img.style.transform = `translate(${moveX}px, ${moveY}px)`;

  img.addEventListener("mouseout", () => {
    img.style.transform = "";
  })
})


// internet connect or not

const connected = document.querySelector(".connected");
const disconnected = document.querySelector(".disconnected");
const close = document.querySelectorAll(".wifi-close");

addEventListener("offline", () => {
  disconnected.classList.add("offline");

  addEventListener("online", () => {
    disconnected.classList.remove("offline");
    connected.classList.add("online")
  })
})

close.forEach(close => {
  close.addEventListener("click", () => {
    close.parentElement.classList.remove("offline")
    close.parentElement.classList.remove("online")
  })
})