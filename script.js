
// buttons plus minus //

let plus=document.querySelectorAll(".plus");
let inc=document.querySelectorAll(".quantityp");


for( let i=0; i<plus.length;i++){

plus[i].addEventListener('click', function(){
      inc[i].innerHTML = Number(inc[i].innerHTML)+1;
       })
}



let minus=document.querySelectorAll(".minus");
console.log(minus);

for ( let i=0; i<minus.length;i++){

minus[i].addEventListener('click',function(){
if (Number(inc[i].innerHTML)>0)

inc[i].innerHTML=Number(inc[i].innerHTML)-1;
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






// total price 







// var p=document.querySelectorAll(".price");
// console.log(p);
// console.log(p[0]);


// var tp=document.querySelectorAll(".tprice");
// console.log(tp);



// console.log(inc);



// for(let i=0; i<p.length;i++){

//       var b = [p[i].innerHTML];
//       console.log(b);

//       for(let j=0;j<b.length;j++){
//       var c =b[0];
//       console.log(c);
//                               }

//       var d=c[0];
//       console.log(d);

      
//    if (Number (inc[i].innerHTML)>0){
//          tp[0].textContent=(d*Number(inc[i].innerHTML));
//    }
      
// }
















