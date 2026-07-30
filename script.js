// Balloons
for(let i=0;i<25;i++){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML=["🎈","🎉","💝"][Math.floor(Math.random()*3)];

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(8+Math.random()*6)+"s";

b.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(b);

}
