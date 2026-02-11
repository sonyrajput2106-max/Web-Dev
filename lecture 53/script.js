
// function changeText(event){
//     console.log(event);
// let fpara = document.getElementById('fpara');
// fpara.textContent = "sona";
// }

// let fpara = document.getElementById('fpara');

// //to add event listener
// fpara.addEventListener('click',changeText);

//to remove event listener
// fpara.removeEventListener('click',changeText);
  

// default action
// let anchorElement = document.getElementById('fanchor');


// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent = "click done bro";
// });

// let paras = document.querySelectorAll('p');
// for(let i = 0;i<paras.length;i++){
//     let para = paras(i);
//     para.addEventListener('click',function(){
//         alert("you have clicked on paras");
//     })
// }

function alertPara(event){
    alert("you have clicket on para:"+event.target.textContent);
}
// }
// for(let i = 0;i<paras.length;i++){
//     let para = paras(i);
//     para.addEventListener('click', alertPara);
// }

let mydiv= document.getElementById('wrapper');

document.addEventListener('click', alertPara);