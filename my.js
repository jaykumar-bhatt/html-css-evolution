var xValues = [1,2,3,4,5,6,7,8,9,10];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#f1517a",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "#1f40a0",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});