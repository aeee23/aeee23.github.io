const clear = // مسح البيانات المخزنة بالجهاز
      document.querySelector('.clear');

const date = // عرص التاريخ
      document.getElementById('date');

const list = // القائمة
      document.getElementById('list');

const input = // حقل الإدخال
      document.getElementById('input');


const plusCircle = // ايقونة الإصافة
      document.querySelector('.fa-plus-circle');

const CHECK = // دائرة الإتمان
      "fa-check-circle";

const UNCHECK = // دائرة خالية
      "fa-circle";

const LINE_THROUGH = 
      "lineThrough";

let LIST,id;

let data = localStorage.getItem('TODO');

if(data){
  
  LIST =JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
  
} else{
LIST = [];
  id =0;
}

function loadList(array){
array.forEach(function(item){
addToDo(item.name,item.id,item.done,item.trash);
})
};



clear.addEventListener('click' , function(){
  
localStorage.clear();
location.reload();
});


const option = 
      {weekday:"long",month: "short" , day:"numeric"};
 const today = 
      new Date();
     
date.innerHTML = 
  today.toLocaleDateString('ar-KSA', option);




function addToDo(toDo,id,done,trash) {
 
  if(trash) {return;}
  const DONE = done ? CHECK : UNCHECK;
  
  const LINE = done ? LINE_THROUGH : "";
  

  
const item = 
      `<li class="item">
<i class="co far ${DONE} complete" job="complete" id="${id}"></i>
<p class="text ${LINE}">${toDo}</p>
<i class="de far fa-trash-alt delete" job="delete" id="${id}"><i/>
</li>`;

const position =
      "beforeend";

list.insertAdjacentHTML (position,item);
  chch("11");
};


document.addEventListener('keyup' , function(event) {
  if(event.keyCode == 13){
const toDo = input.value;
    if(toDo){
      
      addToDo(toDo,id,false,false);
      
      LIST.push(
        {
          name:toDo,
          id: id,
          dane: false,
          trash: false
        });
      

      id++;
      }
      input.value ="";
   
      chch("22");
   
    
   }
  
});

function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  
  
  LIST[element.id].dane = LIST[element.id].done ? false : true;
  
  
};

function removeToDo(element){
element.parentNode.parentNode.removeChild(element.parentNode);
  
  LIST[element.id].trash = true;
  chch("33");

}






list.addEventListener('click', function(event){
  
  const element =
        event.target;
  if(element.attributes.job){
  const elementJob =
        element.attributes.job.value;
 
  if (elementJob == "complete") 

  {
completeToDo(element);
    
} else if (elementJob =="delete"){
  removeToDo(element);
  
   }    
  }
chch("44");
});









plusCircle.addEventListener('click' ,function() {
  const toDo = input.value;
    if(toDo){
      
      addToDo(toDo, id,false , false);
      
      LIST.push(
        {
          name:toDo,
          id: id,
          dane: false,
          trash: false
        });
      chch("55");

      id++;
      }
      input.value ="";
   
      
   
    
});




function chch(ii) {

localStorage.setItem("TODO", JSON.stringify(LIST));
}



