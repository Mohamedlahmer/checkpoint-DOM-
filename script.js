
// buttons plus 

let plus=document.querySelectorAll(".plus");
var inc=document.querySelectorAll(".quantityp");


for( let i=0; i<plus.length;i++){

      plus[i].addEventListener('click', function(){
      inc[i].innerHTML = Number(inc[i].innerHTML)+1; 
      sum()     
})
}

 
//button minus


let minus=document.querySelectorAll(".minus");
console.log(minus);

for ( let i=0; i<minus.length;i++){
            
minus[i].addEventListener('click',function(){
if (Number(inc[i].innerHTML)>0)
inc[i].innerHTML=Number(inc[i].innerHTML)-1;
sum()
})
}


// like heart

let col=document.querySelectorAll(".fa-heart");
console.log(col);

for( let i=0; i<col.length; i++){

      col[i].addEventListener('click', function(){
      if (col[i].style.color === "red"){
            col[i].style.color = "black"
      }
      
      else {col[i].style.color = "red"}
})
}



// delete section




let parentElem= Array.from(document.querySelectorAll(".container"));
console.log(parentElem);



let del=document.querySelectorAll(".fa-trash-alt");
console.log(del);


for(let i=0; i<del.length; i++){
del[i].addEventListener('click', function(){
parentElem[i].remove() ; 
sum()       
})
}


// total price

var tp=document.querySelector(".tprice");

function sum(){
var inc=document.querySelectorAll(".quantityp");
var p=document.querySelectorAll(".price");
      let s=0;
      for  (let i=0; i<inc.length; i++){
            s= s + Number(inc[i].innerHTML) * Number(p[i].innerHTML) ;
      }

      return (tp.innerHTML=s);
}



















