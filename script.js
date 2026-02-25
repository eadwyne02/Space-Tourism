const dropDown = document.getElementById("drop-down")
const iconClose = document.getElementById("icon-close")
const iconHamburger = document.getElementById("icon-hamburger")
const showDrop = document.getElementById("show-drop")
if (dropDown){
    dropDown.addEventListener("click", () =>{
    iconClose.style.display = "flex"
    iconHamburger.style.display = "none"
    showDrop.style.display = "flex"
})
}



const destinations = {
    moon: {
        name: "MOON",
        image: "assets/destination/image-moon.webp",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 kM",
        time: "3 DAYS"
    },
    mars: {
        name: "MARS",
        image: "assets/destination/image-mars.webp",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. kM",
        time: "9 MONTHS"
    },
    europa: {
        name: "EUROPA",
        image: "assets/destination/image-europa.webp",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. kM",
        time: "3 YEARS"
    },
    titan: {
        name: "TITAN",
        image: "assets/destination/image-titan.webp",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. kM",
        time: "7 YEARS"
    }
}

const images = document.getElementById("destination-image")
const name = document.getElementById("destination-name");
const description = document.getElementById("destination-description");
const distance = document.getElementById("destination-distance");
const time = document.getElementById("destination-time");


document.querySelectorAll("#destination-nav button").forEach(button => {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const dest = destinations[button.dataset.destination];

            images.src = dest.image;
            name.textContent = dest.name;
            description.textContent = dest.description;
            distance.textContent = dest.distance;
            time.textContent = dest.time;

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    if (buttons.length > 0) {
        buttons[0].classList.add("active");
    }
});

const crews = {
    crew1:{
        title:"COMMANDER",
        img: "assets/crew/image-douglas-hurley.webp",
        name:"DOUGLAS HURLEY",
        info: " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",

    },
    crew2:{
        title:"Mission Specialist",
        img: "assets/crew/image-mark-shuttleworth.webp",
        name:"MARK SHUTTLEWORTH",
        info: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    crew3:{
        title:"PILOT",
        img: "assets/crew/image-victor-glover.webp",
        name:"Victor Glover",
        info: " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    crew4:{
        title:"Flight Engineer",
        img: "assets/crew/image-anousheh-ansari.webp",
        name:"Anousheh Ansari",
        info: " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
}
const title = document.getElementById("title")
const titleHolder = document.getElementById("title-holder")
const titleDescription = document.getElementById("title-description")
const titleImg = document.getElementById("title-img")

const buttons = document.querySelectorAll(".navigation-btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const cr = crews[button.dataset.crew];

        titleImg.src = cr.img;
        title.textContent = cr.title;
        titleHolder.textContent = cr.name;
        titleDescription.textContent = cr.info;

        buttons.forEach(btn => {
            btn.querySelector(".dot").classList.remove("scale-100");
            btn.querySelector(".dot").classList.add("scale-0");
        });

        button.querySelector(".dot").classList.remove("scale-0");
        button.querySelector(".dot").classList.add("scale-100");
    });
});

if (buttons.length > 0) {
    buttons[0].click();
}


const technologys = {
    technologyA:{
        title:"LAUNCH VEHICLE",
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imgPortrait:"assets/technology/image-launch-vehicle-portrait.jpg",
        imgLandscape: "assets/technology/image-launch-vehicle-landscape.jpg"
    },
    technologyB:{
        title:"SPACEPORT",
        description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imgPortrait:"assets/technology/image-spaceport-portrait.jpg",
        imgLandscape:"assets/technology/image-spaceport-landscape.jpg"
    },
    technologyC:{
        title:"SPACE CAPSULE",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imgPortrait:"assets/technology/image-space-capsule-portrait.jpg",
        imgLandscape:"assets/technology/image-space-capsule-landscape.jpg"
    }
}
const techTitle = document.getElementById("tech-title");
const techdesc = document.getElementById("tech-desc");
const techImgPor = document.getElementById("tech-Img-Por")
const techImgland = document.getElementById("tech-Img-land")
const techButtons = document.querySelectorAll("#tech-button div");

techButtons.forEach(button => {
    button.addEventListener("click", () => {

        const tech = technologys[button.dataset.technology];

        techTitle.textContent = tech.title;
        techdesc.textContent = tech.description;
        techImgPor.src = tech.imgPortrait;
        techImgland.src = tech.imgLandscape;
        techButtons.forEach(btn => {
            btn.classList.remove("bg-white", "border-transparent");
            btn.classList.add("border", "border-white/25");

            btn.querySelector("span").classList.remove("text-[#0B0D17]");
            btn.querySelector("span").classList.add("text-white");
        });

        button.classList.add("bg-white");
        button.classList.remove("border", "border-white/25");

        button.querySelector("span").classList.remove("text-white");
        button.querySelector("span").classList.add("text-[#0B0D17]");
    });
});

if (techButtons.length > 0) {
    techButtons[0].click();
}

 const navItems = document.querySelectorAll(".nav-link");

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navItems.forEach(nav => {
    const link = nav.querySelector("a");
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      nav.classList.remove("border-transparent");
      nav.classList.add("border-white");
    }
  });
  const hamburger = document.getElementById("icon-hamburger");
const closeBtn = document.getElementById("icon-close");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger){
    hamburger.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});
}
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.remove("border-transparent");
        link.classList.add("border-white");
    }
});