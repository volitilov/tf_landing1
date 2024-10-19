import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexAxisChartSeries;
  chart?: ApexChart;
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  title?: ApexTitleSubtitle;
  xaxis?: ApexXAxis | ApexXAxis[];
  yaxis?: ApexYAxis | ApexYAxis[];
  responsive?: ApexResponsive[];
};

export const totalAgents: any = {
  type: 'Bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
      [400, 900, 800, 1000, 700, 1200, 300],
      [1000, 500, 600, 400, 700, 200, 1100],
    ],
  },
  options: {
    stackBars: true,
    chartPadding: {
      top: -30,
      right: 0,
      left: 0,
      bottom: 0,
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value: number) {
          return (value / 1000) + 'k';
      }
    },
  },
  title: 'Total Agents',
  number: '2145',
  widgetClass: 'widgets',
  chartClass: 'small-chart',
};

export const totalSales: any = {
  type: 'Bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
      [400, 900, 800, 1000, 700, 1200, 300],
      [1000, 500, 600, 400, 700, 200, 1100],
    ],
  },
  options: {
    stackBars: true,
    chartPadding: {
      top: -30,
      right: 0,
      left: 0,
      bottom: 0,
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value: number) {
        return value / 1000 + 'k';
      },
    },
  },
  title: 'Total Sales',
  number: '$54871.12',
  widgetClass: 'widgets widget-1',
  chartClass: 'small-chart1',
};

export const totalProperty: any = {
  type: 'Bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
      [400, 900, 800, 1000, 700, 1200, 300],
      [1000, 500, 600, 400, 700, 200, 1100],
    ],
  },
  options: {
    stackBars: true,
    chartPadding: {
      top: -30,
      right: 0,
      left: 0,
      bottom: 0,
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value: number) {
        return value / 1000 + 'k';
      },
    },
  },
  title: 'Total Properties',
  number: '25',
  widgetClass: 'widgets widget-2',
  chartClass: 'small-chart2',
};

export const salesOverviewChart: ChartOptions | any = {
  series: [
    {
      name: '$2530.00',
      data: [20, 25, 20, 30, 20, 50, 30, 35, 25, 60, 0],
    },
  ],
  chart: {
    height: 280,
    type: 'area',
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 3,
      color: '#720f1e',
      opacity: 0.15,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  markers: {
    strokeWidth: 4,
    strokeColors: '#ffffff',
    hover: {
      size: 9,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 4,
  },
  legend: {
    show: false,
  },
  colors: ['#ff5c41'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.4,
      stops: [0, 90, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        borderColor: 'transparent',
        show: false,
      },
    },
    yaxis: {
      lines: {
        borderColor: 'transparent',
        show: false,
      },
    },
    padding: {
      right: -112,
      bottom: 0,
      left: 15,
    },
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        grid: {
          padding: {
            right: -95,
          },
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        grid: {
          padding: {
            right: -69,
          },
        },
      },
    },
  ],
  yaxis: {
    labels: {
      formatter: function (value: string) {
        return value + 'K';
      },
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    range: undefined,
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#ff5c41',
        width: 1,
        dashArray: 0,
      },
    },
  },
  tooltip: {
    formatter: undefined,
  },
};

export const salesByAgent: ChartOptions | any = {
  chart: {
    height: 375,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '40%',
    },
  },
  grid: {
    xaxis: {
      lines: {
        borderColor: 'transparent',
        show: false,
      },
    },
    yaxis: {
      lines: {
        borderColor: 'transparent',
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1199,
      options: {
        chart: {
          height: 270,
        },
      },
    },
  ],
  colors: ['#ff8c41'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 1,
      type: 'horizontal',
      gradientToColors: ['#ffffff'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  series: [
    {
      data: [1380, 1200, 1100, 900, 700, 500, 400],
    },
  ],
  xaxis: {
    categories: [
      'Zack Lee',
      'Greta Life',
      'Bob Frapples',
      'Paige Turner',
      'Brock Lee',
      'Mary Goround',
      'Zack Lee',
    ],
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const availablePropertyData: ChartOptions | any = {
  chart: {
    height: 330,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      track: {
        show: true,
        background: '#f2f2f2',
        strokeWidth: '20%',
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        name: {
          fontSize: '40px',
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: '80',
        },
      },
    },
  },
  series: [80],
  labels: ['property'],
  colors: ['#ff5c41'],
  stroke: {
    lineCap: 'round',
  },
};
