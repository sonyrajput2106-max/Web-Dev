



// //code 1 
// const t1 =performance.now();
// for(let i=1; i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent ="this is a para"+i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code is :"+(t2-t1));


// //code 2
// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i = 1 ; i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = 'this is para'+i;
// mydiv.appendChild(para);
// }


// document.body.appendChild(mydiv);
// const t4 = performance.now();

// console.log("tottal time taken by code 2:"+(t4-t3));

let fragment = document.createDocumentFragment();

for(let i = 1;i<=100;i++){
    let para = document.createElement(p);
    para.textContent = 'this is para'+i;
    // no reflow and no repaint for the below line
    fragment.appendChild(para);

}

document.body.appendChild(fragment);