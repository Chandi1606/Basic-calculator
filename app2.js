//target
let num1=document.querySelector('#box-1');
let num2=document.querySelector('#box-2');
let result=document.querySelector('#box-3');
let calculate=opeartor=>{
    if(opeartor==='+'){
        result.value=Number(num1.value)+Number(num2.value);
    }
    else if(opeartor==='-'){
        result.value=Number(num1.value)-Number(num2.value);
    }
    else if(opeartor==='*'){
        result.value=Number(num1.value)*Number(num2.value);
    }
    else if(opeartor==='/'){
        result.value=Number(num1.value)/Number(num2.value);
    }
    else{
        num1.value='';
        num2.value='';
        result.value='';
    }
}

//add button
let addButton=document.querySelector('#add');
addButton.addEventListener('click' , function(){
    calculate('+');
});

//sub button
let subButton=document.querySelector('#sub');
subButton.addEventListener('click' , function(){
    calculate('-');
});

//mul button
let mulButton=document.querySelector('#mul');
mulButton.addEventListener('click' , function(){
    calculate('*');
});

//div button
let divButton=document.querySelector('#div');
divButton.addEventListener('click' , function(){
    calculate('/');
});

//clear button
let clearButton=document.querySelector('#del');
clearButton.addEventListener('click',function(){
    calculate(' ');
});