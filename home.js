const text = ["FULL STACK DEV", "MERN STACK", "PYTHON STACK", "DATABASES", "WEB DEVELOPER"];
const speed = 100; 
const waitTime = 2000; 

let i = 0;
let a = 0;

function type() {
    const skill = text[a];
    
    if (i < skill.length) {
        document.getElementById("strong-holds").innerHTML += skill.charAt(i);
        i++;
        setTimeout(type, speed); 
    } else {
        setTimeout(() => {
            i = 0; 
            a++;
            if (a < text.length) {
                document.getElementById("strong-holds").innerHTML = ""; 
                type(); 
            }else{
                document.getElementById("strong-holds").innerHTML = skill;
            }
        }, waitTime); 
    }
}

type();

document.getElementById("scroll-down-link").addEventListener("click", (event)=> {
    event.preventDefault();
    document.getElementById("info-page").scrollIntoView({behavior:"smooth"});
});