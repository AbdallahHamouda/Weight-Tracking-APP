  
      var bmr=()=>{
        var w = document.getElementById("weight").value;
      var h = document.getElementById("height").value;
      var a = document.getElementById("age").value;
       var active=  document.getElementById("active").value;
       var gender=  document.getElementById("gender").value;
       var show=document.getElementById("res");
       var mode=1.46;
         var light=1.38;
         var aactive=1.55;
         var vactive=1.7;
          var tolbs= w*2.2;
          var toinch= h*0.394;
          var mycalc=tolbs *15; 
          console.log(mycalc);
        if(gender == "Male"){
          var bmrM = 10*w + 6.25*h - 5*a + 5;
          if(active == "Light Exercise 1-3"){
              var totlight=parseInt(bmrM*light);
              show.innerHTML=("to maintain your weight"+" "+totlight+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(totlight -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(totlight -1000)+" "+"calorie"+"<br>");
          }
         else if(active == "Moderate Exercise 4-5"){
              var bmrM = 10*w + 6.25*h - 5*a + 5;
              var mode=1.46;
              var tomode=parseInt(bmrM*mode);
              show.innerHTML=("to maintain your weight"+" "+tomode+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(tomode -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(tomode -1000)+" "+"calorie"+"<br>");
          }
          if(active == "Active 3-4 intense"){
              var toact=parseInt(bmrM*aactive);
              console.log(toact);
              show.innerHTML=("to maintain your weight"+" "+toact+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(toact -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(toact -1000)+" "+"calorie"+"<br>");

          }
         if(active == "Very active active 6-7 intense"){
              var tovact=parseInt(bmrM*vactive);
              show.innerHTML=("to maintain your weight"+" "+tovact+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(tovact -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(tovact -1000)+" "+"calorie"+"<br>");

          }
          if(active == "BMR"){
            show.innerHTML=parseInt(bmrM);
          }
        
         //console.log("Male"+bmrM)
        
         }
        if (gender == "Female"){
           var bmrF=10*w + 6.25*h - 5*a - 161;
          if(active == "Light Exercise 1-3"){
              var totlight=parseInt(bmrF*light);
              show.innerHTML=("to maintain your weight"+" "+totlight+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(totlight -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(totlight -1000)+" "+"calorie"+"<br>");

          }
         else if(active == "Moderate Exercise 4-5"){
              var tomode=parseInt(bmrF*mode);
              show.innerHTML=("to maintain your weight"+" "+tomode+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(tomode -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(tomode -1000)+" "+"calorie"+"<br>");
          }
          if(active == "Active 3-4 intense"){
              var toact=parseInt(bmrF*aactive);
              show.innerHTML=("to maintain your weight"+" "+toact+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(toact -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(toact -1000)+" "+"calorie"+"<br>");
          }
         if(active == "Very active active 6-7 intense"){
              var tovact=parseInt(bmrF*vactive);
              show.innerHTML=("to maintain your weight"+" "+tovact+" "+"calorie"+"<br>"+"to lose 0.5 kg"+" "+(tovact -500)+" "+"calorie"+"<br>"+"to lose your 1kg"+" "+(tovact -1000)+" "+"calorie"+"<br>");
              
          }
          if(active == "BMR"){
            show.innerHTML=parseInt(bmrF)
          }
         }
         if(isNaN(w) || isNaN(h) || isNaN(a)){
          show.innerHTML="you have to enter just numbers"
         }
         if(h <=100 || a<=2){
          show.innerHTML="please enter inputs right"
         }
         if(a.length == 0 || w.lenght == 0 ||h.length == 0){
          show.innerHTML="make sure that all inputs are filled"

         }
        
      }
