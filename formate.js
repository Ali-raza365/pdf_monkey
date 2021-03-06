<script src="https://bernii.github.io/gauge.js/dist/gauge.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
     <!--Step 2 - Include the fusion theme-- >
     <script type="text/javascript"
          src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
     <script>
       
          const DopamineSource = {
               chart: {
                    caption: "Dopamine deficiency",
                    subcaption: "",
                    theme: "fusion",
                    showvalue: "0",
                    baseFontSize: "22",
                    animation: "0",
                    showtickmarks: "0",
                    numbersuffix: "%"
               },
               colorrange: {
                    color: [
                         {
                              minvalue: "1",
                              maxvalue: "5",
                              label: "Minor",
                              code: "#6baa01"
                         },
                         {
                              minvalue: "5",
                              maxvalue: "8",
                              label: "Moderate",
                              code: "#f8bd19"
                         },
                         {
                              minvalue: "8",
                              maxvalue: "15",
                              label: "Major",
                              code: "#EE7D13"
                         },
                         {

                              minvalue: "15",
                              maxvalue: "25",
                              label: "Severe",
                              code: "#e44a00"
                         }
                    ]
               },
               pointers: {
                    pointer: [
                         {
                              value:  $docPayload.DopamineDeficiency,
                              tooltext: `Higher degree of satisfaction score of $datavalue  `
                         }
                    ]
               }
          };
          
          
          const AcetylcholineSource = {
  chart: {
    caption: "Acetylcholine deficiency",
    subcaption: "",
    theme: "fusion",
    showvalue: "0",
    baseFontSize: "22",
    animation: "0",
    showtickmarks: "0",
    numbersuffix: "%"
  },
  colorrange: {
    color: [
      {
        minvalue: "1",
        maxvalue: "5",
        label: "Minor",
        code: "#6baa01"
      },
      {
        minvalue: "5",
        maxvalue: "8",
        label: "Moderate",
        code: "#f8bd19"
      },
      {
        minvalue: "8",
        maxvalue: "15",
        label: "Major",
        code: "#EE7D13"
      },
            {
        minvalue: "15",
        maxvalue: "24",
        label: "Severe",
        code: "#e44a00"
      }
    ]
  },
  pointers: {
    pointer: [
      {
        value: $docPayload.AcetylcholineDeficiency,
        tooltext: "Higher degree of satisfaction score of $datavalue  "
      }
    ]
  }
};

const GABASource = {
  chart: {
    caption: "GABA deficiency",
    subcaption: "",
    theme: "fusion",
    showvalue: "0",
    baseFontSize: "22",
    animation: "0",
    showtickmarks: "0",
    numbersuffix: "%"
  },
  colorrange: {
    color: [
      {
        minvalue: "1",
        maxvalue: "5",
        label: "Minor",
        code: "#6baa01"
      },
      {
        minvalue: "5",
        maxvalue: "8",
        label: "Moderate",
        code: "#f8bd19"
      },
      {
        minvalue: "8",
        maxvalue: "15",
        label: "Major",
        code: "#EE7D13"
      },
            {
        minvalue: "15",
        maxvalue: "40",
        label: "Severe",
        code: "#e44a00"
      }
    ]
  },
  pointers: {
    pointer: [
      {
        value: $docPayload.GABaDeficiency,
        tooltext: "Higher degree of satisfaction score of $datavalue  "
      }
    ]
  }
};


const SerotoninSource = {
  chart: {
    caption: "Serotonin deficiency",
  subcaption: "",
    theme: "fusion",
    showvalue: "0",
    baseFontSize: "22",
    animation: "0",
    showtickmarks: "0",
    numbersuffix: "%"
  },
  colorrange: {
    color: [
      {
        minvalue: "1",
        maxvalue: "5",
        label: "Minor",
        code: "#6baa01",
         showLabel: "1"
      },
      {
        minvalue: "5",
        maxvalue: "8",
        label: "Moderate",
        code: "#f8bd19"
      },
      {
        minvalue: "8",
        maxvalue: "15",
        label: "Major",
        code: "#EE7D13"
      },
            {
        minvalue: "15",
        maxvalue: "25",
        label: "Severe",
        code: "#e44a00"
      }
    ]
  },
  pointers: {
    pointer: [
      {
        value: $docPayload.SerotoninDeficiency,
        tooltext: "Higher degree of satisfaction score of $datavalue  "
      }
    ]
  }
};

          FusionCharts.ready(function () {
               var myChart = new FusionCharts({
                    type: "hlineargauge",
                    renderAt: "Dopamine-deficiency-chart",
                    width: "100%",
                    dataFormat: "json",
                 dataSource:DopamineSource
               }).render();
          });
          FusionCharts.ready(function () {
               var myChart = new FusionCharts({
                    type: "hlineargauge",
                    renderAt: "Acetylcholine-deficiency-chart",
                    width: "100%",
                    dataFormat: "json",
                      dataSource:AcetylcholineSource
               }).render();
          });
          
           FusionCharts.ready(function () {
               var myChart = new FusionCharts({
                    type: "hlineargauge",
                    renderAt: "GABA-deficiency-chart",
                    width: "100%",
                    dataFormat: "json",
                      dataSource:GABASource
               }).render();
          });
          
           FusionCharts.ready(function () {
               var myChart = new FusionCharts({
                    type: "hlineargauge",
                    renderAt: "Serotonin-deficiency-chart",
                    width: "100%",
                    dataFormat: "json",
                      dataSource:SerotoninSource
               }).render();
          });
     </script>
<script>
  let semesterRevenues = document.querySelector("#semesterRevenues");
  let semesterRevenuesLines = document.querySelector("#semesterRevenuesLines");
  let expenses = document.querySelector("#expenses");

  
  new ApexCharts(sources, {
    chart: {
      animations: { enabled: false },
      toolbar: { show: false },
      type: 'donut',
      width: 400
    },
    dataLabels: { enabled: false },
    colors:["#FF0000", "#FFFF00", "#A020F0", "#00FF00"],
    labels: $docPayload.dopamineChart.labels,
    series: $docPayload.dopamineChart.values,
    legend: { position: 'top' }
  })
  .render();
  
   
        let options = {
          
          series: [{
                    label: "Deficiencies",
                    data:$docPayload.barChart.values,
               }],
               chart: {
                    animations: { enabled: false },
                    toolbar: { show: false },
                    type: 'bar',
                    height: 400,
                    width: 400,
               },
               plotOptions: {
                    bar: {
                         borderRadius: 4,
                    }
               },
               title: {
                    text: "Deficiencies",
                    align: "center",
                    style: {
                         fontSize: "12px"
                    }
               },
               legend: {
                    show: false,
                    position: 'top',
                    name: "dasdasd",

               },
               dataLabels: {
                    enabled: true
               },
        xaxis: {
          categories: $docPayload.dopamineChart.labels,
        }
        };

        let chart = new ApexCharts(document.querySelector("#barchart"), options);
        chart.render();
</script>