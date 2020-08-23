var cond=()=>{
var x = document.querySelector("#day").value;
 var y = document.querySelector("#month").value;
 var b = document.querySelector("#year").value;
 var a = document.querySelector("#weight").value;
 var btn = document.querySelector("#btn");
 function check(){
  if(x >31){
    var change = document.getElementById("lala").innerHTML="days can't be more than 31"; 
 //   btn.disabled=true
 }
}
};
cond();
