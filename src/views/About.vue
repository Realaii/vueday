<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div ref="chart" style="width: 300px; height: 300px"></div>
  </div>
</template>
<script>
let Echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");

export default {
  data() {
    return {
      chart: null,
      option: {},
      start: 0,
      end: 120,
    };
  },
  mounted() {
    this.chartInt();
  },
  methods: {
    chartInt() {
      let chart = Echarts.init(this.$refs.chart);
      let timer = setInterval(() => {
        this.option = {
          tooltip: {
            trigger: "item",
            showContent: false,
          },
          legend: {
            top: "5%",
            left: "center",
          },
          title: {
            text: this.end,
            left: "center",
            top: "50%",
            textStyle: {
              color: "#27D9C8",
              fontSize: 20,
              align: "center",
            },
          },
          graphic: {
            type: "text",
            left: "center",
            top: "40%",
            style: {
              text: "剩余秒数",
              textAlign: "center",
              fill: "#333",
              fontSize: 16,
              fontWeight: 600,
            },
          },
          color: ["#eeeeee", "#27D9C8"],
          series: [
            {
              name: "剩余秒数",
              type: "pie",
              radius: ["55%", "60%"],
              labelLine: {
                show: false,
              },
              hoverAnimation: false,
              data: [
                { value: this.start++, name: "" },
                { value: this.end--, name: "" },
              ],
            },
          ],
        };
        chart.setOption(this.option);
        if (this.end === -1) {
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>
