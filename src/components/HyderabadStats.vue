<template>
  <div class="container" >
    <div class="chart-content">
      <p>Top Run Scorer</p>
      <apexchart width="500" type="bar" :options="barOption" :series="barSeries"></apexchart>
    </div>
    
    <div class="chart-content">
      <p>Top Bowling figure</p>
      <apexchart width="400" type="donut" :options="donutOptions" :series="donutseries"></apexchart>
    </div>

    <div class="chart-content">
      <p>Hyderabad vs All Team Analysis</p>
      <apexchart width="420" type="bar" :options="chartOptions" :series="Hseries"></apexchart>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      barOption: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["Kane Williamson", "David Warner", "Manish Pandey", "jonny Baristow","Vijay Shankar"],
        },
      },
      barSeries: [
        {
          name: "series-1",
          data: [4527, 3858, 1768, 1675, 1648],
        },
      ],

      donutOptions: { labels: ["Bhuneshawar Kumar","Rashid Khan","Sandeep SHarma","Basil Thampi","Shabaz Nadeem"] },
      donutseries: [ 55, 44, 41, 17, 15],

      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],

          Hseries: [{
            data: [300, 325, 338, 340,345, 350, 380]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 390
            },
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Mumbai Indians', 'Kolkata Knight Riders', 'Rajasthan Royals', 'Royal Chalengers Banglore', 'Kings XI Punjab', 'Chennai Super Kings', 'Delhi Capitals'
              ],
            }
          },



    };
  },
};
</script>

<style scoped>
.chart-content{
  display: flex;
  border: 1px solid yellow;
  padding: 5px;
  margin: 1%;
}
</style>