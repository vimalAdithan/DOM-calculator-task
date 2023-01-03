function calci(e){
    var data=document.querySelector('.data');
    var val=data.innerText;
    var butnum=e.innerText;
    // console.log('slice',val.slice(-1));
    var val_last=val.slice(-1)[0]
    var exp=['+','-','*','/'];
    if (!exp.includes(val_last)) {
        data.innerText=val+butnum;
    } else if (!exp.includes(butnum)) {
        data.innerText=val+butnum;
    }else{
        console.log('last digit is an expression');
    }
}
document.querySelector('body').addEventListener('keypress',(e)=>{
    var data=document.querySelector('.data');
    if(e.code.includes('Digit')||e.code.includes('Numpad')){
        var val=data.innerText
        data.innerText=val+e.key;
    }
    else{
        console.log('not a number');
    }
})
var backs=document.querySelector('.bac');
backs.addEventListener('click',()=>{
    var data=document.querySelector('.data');
    var val=data.innerText;
    var sl=val.slice(0,-1);
    data.innerText=sl;
})

var equal=document.querySelector('.equalto');
equal.addEventListener('click',()=>{
    var data=document.querySelector('.data');
    var val=data.innerText;
    var solution=eval(val);
    console.log(solution);
    data.innerText=solution;
})