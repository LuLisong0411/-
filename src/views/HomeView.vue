<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in list" :key="index">
        <div class="grid-content bg-purple" :style="{ background: item.color }">
          <p class="item-title">{{ item.title }}</p>
          <!--放到栅格布局的里面 startVal是开始的值 endVal是结束的值，duration是持续的时长毫秒为单位  -->
          <CountTo :startVal="0" :endVal="item.val" :duration="3000" />
        </div>
      </el-col>
    </el-row>
    <div class="echarts-box">
      <div class="chartOne"></div>
      <div class="chart2"></div>
      <div class="chart3"></div>
    </div>
  </div>
</template>
 
<script>
import * as echarts from "echarts";
import CountTo from "vue-count-to";
export default {
  components: { CountTo },
  data() {
    return {
      list: [
        { val: 13594, title: "最高可借金额", color: "#67ca3a" },
        { val: 9833, title: "回报率", color: "#ff6600" },
        { val: 8888, title: "业绩领跑", color: "#f56c6c" },
        { val: 6666, title: "安稳底薪战队", color: "#409eff" },
      ],
    };
  },
  methods: {
    initCharts() {
      //初始化图表实例
      this.chartOne = echarts.init(document.querySelector(".chartOne"));
      //图表配置
      let optionOne = {
        title: {},
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      //应用配置生成图表
      this.chartOne.setOption(optionOne);
      this.chart2 = echarts.init(document.querySelector(".chart2"));

      //下面都是图表的配置，顺序不能错
      let posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight",
      ];
      let app = {};

      (app.configParameters = {
        rotate: {
          min: -90,
          max: 90,
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right",
          },
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom",
          },
        },
        position: {
          options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
          }, {}),
        },
        distance: {
          min: 0,
          max: 100,
        },
      }),
        (app.config = {
          rotate: 90,
          align: "left",
          verticalAlign: "middle",
          position: "insideBottom",
          distance: 15,
          onChange: function () {
            const labelOption = {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance,
            };
            this.chart2.setOption({
              series: [
                {
                  label: labelOption,
                },
                {
                  label: labelOption,
                },
                {
                  label: labelOption,
                },
                {
                  label: labelOption,
                },
              ],
            });
          },
        });
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      };
      let option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Forest", "Steppe", "Desert", "Wetland"],
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["2012", "2013", "2014", "2015", "2016"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Forest",
            type: "bar",
            barGap: 0,
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390],
          },
          {
            name: "Steppe",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290],
          },
          {
            name: "Desert",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190],
          },
          {
            name: "Wetland",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [98, 77, 101, 99, 40],
          },
        ],
      };

      this.chart2.setOption(option2);
      this.chart3 = echarts.init(document.querySelector(".chart3"));
      let option3 = {
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu"],
          z: 10,
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"],
        },
      };
      this.chart3.setOption(option3);
    },
    resize() {
      //resize方法改变图表尺寸
      this.chartOne.resize();
      this.chart2.resize();
      this.chart3.resize();
    },
  },

  mounted() {
    this.initCharts();
    this.resizeCallback = this.resize.bind(this);
    window.addEventListener("resize", this.resizeCallback);
  },
};
</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 240px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.chart1 {
  height: 500px;
  width: 100%;
}
.chart2 {
  height: 400px;
  width: 50%;
  float: left;
}
.chart3 {
  height: 400px;
  width: 50%;
  float: right;
}
</style>