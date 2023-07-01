var first=document.getElementById("first");
var second=document.getElementById("second");
var res=document.getElementById("res");

var add=document.getElementById("add");
var Subtract=document.getElementById("Subtract");
var clear=document.getElementById("clear");
var sum,sub,result;

add.addEventListener('click',()=>{
git_first= Number(first.value) ;
git_second=Number(second.value)  ;

result=git_first+git_second;
console.log(result);
res.style.display="block";
res.innerText=result;

});


Subtract.addEventListener('click',()=>{
    git_first= Number(first.value) ;
    git_second=Number(second.value)  ;
    
    result=git_first-git_second;
    console.log(result);
    res.style.display="block";
res.innerText=result;
    });
    

    clear.addEventListener('click',()=>{
        first.value="";
        second.value="";

        console.log("clear");
        res.style.display="none";
        });