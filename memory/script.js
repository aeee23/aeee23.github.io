
// put your code here...

let name = document.querySelector("#name");

let duration = 1000;

document.querySelector("#overBtn").onclick = function() {
  
  var prom = prompt('ما اسمك');
  
  if (prom == "" || prom == null){
name.innerHTML ="مجهول";
} else {
name.innerHTML = prom;
}
document.querySelector(".over").classList.add('remove')
}

let main = document.querySelector("main")

let boxArray = Array.from(main.children)



let range = Array.from(Array(boxArray.length).keys());
shuffle(range)

boxArray.forEach((box, index) => {
box.style.order = range[index];
  
  box.addEventListener("click" , function () {

    flip(box);

});
  
  
});


function  flip(block){
block.classList.add('flip');
  
  let flipedBoxes = 
      boxArray.filter(flipedBoxe => 
flipedBoxe.classList.contains('flip'));
        
      
  if (flipedBoxes.length === 2 ){
  stopClicks();
    
    sheck(flipedBoxes[0], flipedBoxes[1])
}
}

function stopClicks() {
   
  main.classList.add('no-clicks')
  
  setTimeout(() => {
main.classList.remove('no-clicks')
},duration);
  
}

function sheck( f , s){
let  triesEl = document.querySelector("#score");
  if (f.dataset.t === s.dataset.t ) {
    f.classList.remove("flip");
    s.classList.remove("flip");
 
    f.classList.add("match");
    s.classList.add("match");
    
    document.querySelector('audio').play();


} else {
triesEl.innerHTML = parseInt(triesEl.innerHTML) + 1;
  
  setTimeout(() => {
    f.classList.remove("flip");
    s.classList.remove("flip");
},duration)
  
    
}
}


  


function shuffle(array) {
let current = array.length,
    temp,
    random;
  
  while ( current > 0) {
random = Math.floor(Math.random() * current);
    
    current--;
    temp = array[current];
    
    array[current] = array[random];
    
    array[random] = temp;
    
    
    
    }
  return array;
}
 












// console.log(btn.innerHTML)
