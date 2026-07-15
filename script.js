const box=document.querySelector('.hearts');
setInterval(()=>{
 let s=document.createElement('span');
 s.textContent=['❤️','💖','💕','💞','🥰'][Math.floor(Math.random()*5)];
 s.style.left=Math.random()*100+'vw';
 s.style.fontSize=(20+Math.random()*25)+'px';
 box.appendChild(s);
 setTimeout(()=>s.remove(),6000);
},250);
