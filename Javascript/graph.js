var weights = [];
var dates= [];

var appz =()=>{
 var ctx = document.getElementById('myChart').getContext('2d');
 var a = document.querySelector("#weight").value;
 var x = document.querySelector("#day").value;
 var y = document.querySelector("#month").value;
 var b = document.querySelector("#year").value;
 var change = document.getElementById("lala");
 var date = x+"-"+y+"-"+b;
 weights.push(a);
 dates.push(date);
 console.log(weights ,'<br>',dates)
    if(a >=20 && x<=31 &&y<=12&&b<=2020){
        return chartmake();
    }
    if(a.length == 3 && x.length == 2 && y.length == 2 && b.length == 4 && x <= 31&& y<=12){
        
    }
    else {
        change.innerHTML="Please make sure that all inputs are right"
    }
       
  
 function chartmake(){
  var myChart = new Chart(ctx, {
   type: 'bar',
    data: {
        labels: dates,
        datasets: [{
            label: 'list of weights',
            data: weights,
           
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
 });
 }
 if (x <= 31 && y<=12 && year >=2020){
    chartmake()
}
}