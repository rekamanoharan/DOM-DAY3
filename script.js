let result=document.getElementById("result")

let calculate=(number) => {
     result.value+=number;
 }

let Result=()=>{
   try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Invalid input");
    }
}

 function clr(){
    result.value=""
 }
 function del(){
    result.value=result.value.slice(0,-1)
 }
 
 document.addEventListener("keydown",function(e){
    e.preventDefault()
    if(e.code.indexOf("Digit") != -1 ||  e.code.indexOf("Numpad") != -1 || e.code.indexOf("Minus") != -1){
        var myKey = e.key;
        result.value += myKey;
    } 
    else {
        // result.value=""
        return alert("Only Numbers are allowed");
    }

});
