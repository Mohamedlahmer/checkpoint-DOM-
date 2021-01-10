
// buttons plus minus //

let plus=document.querySelectorAll(".plus");
let inc=document.querySelectorAll(".quantityp");


var p=document.querySelectorAll(".price");
console.log(p);

var tp=document.querySelectorAll(".tprice");
console.log(tp);




for( let i=0; i<plus.length;i++){

      plus[i].addEventListener('click', function(){
      inc[i].innerHTML = Number(inc[i].innerHTML)+1;
      
      tp[0].textContent= Number(p[i].innerHTML) * Number(inc[i].innerHTML);
      console.log(tp[0]);
})
}



let minus=document.querySelectorAll(".minus");
console.log(minus);

for ( let i=0; i<minus.length;i++){
      
      
minus[i].addEventListener('click',function(){
if (Number(inc[i].innerHTML)>0)

inc[i].innerHTML=Number(inc[i].innerHTML)-1;

if(tp[0].textContent>=Number (p[i].innerHTML))
tp[0].textContent=tp[0].textContent - Number (p[i].innerHTML) ;
      console.log(tp[0]);

})

}


// like heart

let col=document.querySelectorAll(".fa-heart");


for( let i=0; i<col.length; i++){
col[i].addEventListener('click', function(){
      col[i].style.color = "red";
})
}



// delete section




let parentElem=document.getElementById('container');
// let childElem1=document.querySelectorAll(".product-details");
// let childElem2=document.querySelectorAll(".product-image");



let del=document.querySelectorAll(".fa-trash-alt");
console.log(del);

console.log(parentElem);
// console.log(childElem1);
// console.log(childElem2);


for(let i=0; i<del.length; i++){
del[i].addEventListener('click', function(){
parentElem.remove();        
})
}

// in this part, the delete function was not able to work for all the parentElem(s), 
// it worked only for the first section because the body was divided to 3 sections having all the same id !
// so i was not able to use querySelectorAll, also i was unable to find a selector that calls all 
// the elements with the same id.  



























