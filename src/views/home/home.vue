<template>
    <div>
      <v-chart class="myChart1" :options="echartOptions"/>
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'

let data = {
  "messageCode":"200",
  "message":"查询成功！",
  "resultMessage":
    [
      {
        "code":null,
        "name":"财产险",
        "e":null,
        "level":"16",
        "money": "15"
      },{
        "code":null,
        "name":"车险",
        "e":null,
        "level":"7",
        "money": "10"
      },{
        "code":null,
        "name":"意外险",
        "e":null,
        "level":"18",
        "money": "16"
      },{
        "code":null,
        "name":"健康险",
        "e":null,
        "level":"11",
        "money": "6"
      },{
        "code":null,
        "name":"信保",
        "e":null,
        "level":"2",
        "money": "19"
      }
    ]
  }

export default {
  name: 'home',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      echartOptions: {
        title: {
          text: '柱状图实现',
          textStyle:{
            color: '#333',
            fontSize: '22'
          },
          left: 50,
          top: 15
        },
        tooltip: {
          //trigger: 'item'   //选中提示默认样式
          trigger: 'axis',    //选中项提示
          triggerOn: 'click', //默认为'mouseover'
          //formatter: '{b}的等级是{c}'   //修改提示框内的文字，{b}表示类目名称，{c}为类目值
          // formatter: function(arg){
          //   console.log(arg);   
          //   return arg[0].name + '的等级是' + arg[0].data;
          // }
        },
        toolbox:{
          feature:{
            saveAsImage:{},    //不设置任何参数时，即可具有导出图片的功能
            dataView: {},      //数据视图，可以直接修改页面中的参数
            restore: {},       //重置视图数据，和dataView配套使用
            dataZoom: {},       //区域缩放
            magicType: {       //切换显示类型
              type:['bar', 'line']
            }
          }
        },
        xAxis:{
          type: 'category',
          data: data.resultMessage.map(item => item.name)
        },
        yAxis:{
          type: 'value'
        },
        legend:{
          data:['保险种类','价格']
        },
        series:[
          {
            name:'保险种类',
            type:'bar',
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值'
                },{
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
            markLine:{
              data: [
                {
                  type: 'average',
                  name: '平均值'
                }
              ]
            },
            data: data.resultMessage.map(item => item.level)
          },
          {
            name:'价格',
            type:'bar',
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值'
                },{
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
            markLine:{
              data: [
                {
                  type: 'average',
                  name: '平均值'
                }
              ]
            },
            data: data.resultMessage.map(item => item.money)
          },
        ],
        label: {
          show: true,
          rotate: 0,
          position: 'insideBottom'
        },
        //barWidth: '60%',
      }
    }
  }
}
</script>

<style>
    .myChart1{
      width: 800px;
      height: 500px;
    }
</style>