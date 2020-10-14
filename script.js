 var config = {
   type: 'line',
   data: {
    labels: [],
    datasets: [
     {
      label: 'График',
      data: [], 
      borderColor: 'red',
      backgroundColor: 'red',
      borderWidth: 1,
      fill: false 
     }
    ]
   },
   options: {
    legend: {
            display: true,
            labels: {
                boxWidth: 10,
                fontSize: 14,
            }
        },
    responsive: false, 
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  };
window.onload = function() {
			var ctx = document.getElementById('myChart').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

document.getElementById("But_one").addEventListener('click', function () { 
	let x1 = document.getElementById("in_one");
	
	let x = x1.value;
	config.data.labels.push(x);
	config.data.datasets.forEach(function(dataset) {
		dataset.data.push(Math.sin(x));
		});
  	window.myLine.update();
  });
document.getElementById("But_two").addEventListener('click', function () {
	let i=0;
	for (var index = 0; index <= config.data.labels.length; ++index) {
		
	}
	
for (let a=0; a<=index; ++a){
config.data.labels.splice(0, 1);
		config.data.datasets.forEach(function(dataset) {
		dataset.data.pop();
		});
}
	window.myLine.update();
});