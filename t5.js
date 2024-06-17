const letters="abcdefghijklmnopqrstuvwxyz";
let lettersarray= Array.from(letters)
let letterscontainer=document.querySelector(".letters")
lettersarray.forEach((letter)=>{
    span=document.createElement("span")
    spantext=document.createTextNode(letter)
    span.appendChild(spantext);
    span.className=`letter-box`;
    letterscontainer.appendChild(span)
})
const words ={
    programing:["php","javascript","go","scala","fortran","r","my sql","python"],
    movies:["prestige","Inception","parasite","Interstellar","whiplash","Memento","Coco","Up"],
    pepole:["Albert inshtien","Hitchcock","Alexander","Cleopatra","Mahatma Ghandi"],
    countries:["Algirai","Palestine","Yemen","Egypt","Bahrain","Qatar"],
}
let allkey= Object.keys(words);
// console.log(allkey);
let random1=Math.floor(Math.random()*allkey.length)
let  random2=allkey[random1]
let  random3=words[random2]

let random4=Math.floor(Math.random()*random3.length)
let random5=random3[random4]
let count1=0

console.log(random5)
// console.log( random2)
document.querySelector(".game-info span").innerHTML=random2;
let letterGusset=document.querySelector(".letters-guess");
let letterworldSpice=Array.from(random5);
console.log(letterworldSpice)
letterworldSpice.forEach(letter=>{
    let emlySpan=document.createElement("span");
    if(letter===` `)
    {
        emlySpan.className="has-spice"
    }
    letterGusset.appendChild(emlySpan);
})
let letterGusset2=document.querySelectorAll(".letters-guess span");
let letterworldSpice2=Array.from(random5.toLowerCase());
let count=0;
let hanng=document.querySelector(".hangman-draw")


document.querySelectorAll(".letters span").forEach((e)=>{
e.addEventListener("click",()=>{
    let s=false;
    e.classList.add("click")
    let theLetterclick=e.innerHTML.toLowerCase();
    console.log(theLetterclick)
    letterworldSpice2.forEach((w,i)=>{
        if(w==theLetterclick){
            s=true;
            count1++;
            letterGusset2.forEach((l,I2)=>{
                if(i==I2){
                    l.innerHTML=w;
                }
            })
            if(count1===letterworldSpice2.length){
                letterscontainer.classList.add(`fenish`);
                setTimeout(() => {
                    end1();
                },1000);
               
            }

            
        }
    })
    if(s==false){
        count++;
        hanng.classList.add(`g${count}`);
        // document.getElementById("fend").play();
        if(count===8){
            letterscontainer.classList.add(`fenish`);
            end()
        }
    }else{
      // document.getElementById("sucsses").play();

    }
})
})
function end(){
    let div=document.createElement("div");
    div.className=`end`;
    divTexte=document.createTextNode("Gime Over, the World is:"+random5);
    div.appendChild(divTexte);
    document.body.appendChild(div);
}

function end1(){
    let div=document.createElement("div");
    div.className=`end`;
    divTexte=document.createTextNode("Good");
    div.appendChild(divTexte);
    document.body.appendChild(div);
}
