var arr=[]; 

var app=()=>{
 var x = document.querySelector("#day").value;
 var y = document.querySelector("#month").value;
 var b = document.querySelector("#year").value;
 var a = document.querySelector("#weight").value;
 var form = "your weight at "+ x+"-" + y+"-" + b+" " +"was"+" "+ a+'<br>' ;
 arr.push(form);
 var change = document.getElementById("lala").innerHTML=arr; 

};
app();
