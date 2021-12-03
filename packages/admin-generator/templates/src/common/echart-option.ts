import echarts from '@src/common/echarts'

export const workbeachOption = {
	color: ['#67e0e3', '#ffc0cb', '#b6a2de'],
	legend: {
		bottom: 0,
		data: ['个人', '团队', '部门']
	},
	tooltip: {},
	radar: {
		shape: 'circle',
		splitNumber: 8,
		indicator: [
			{ text: '热度', max: 6500 },
			{ text: '口碑', max: 16000 },
			{ text: '产量', max: 30000 },
			{ text: '贡献', max: 38000 }
		]
	},
	series: [
		{
			type: 'radar',
			symbolSize: 0,
			areaStyle: {
				shadowBlur: 0,
				shadowColor: 'rgba(0,0,0,.2)',
				shadowOffsetX: 0,
				shadowOffsetY: 10,
				opacity: 1
			},
			data: [
				{
					value: [4200, 3000, 20000, 35000, 50000, 18000],
					name: '个人'
				},
				{
					value: [5000, 14000, 28000, 26000, 42000, 21000],
					name: '团队'
				},
				{
					value: [4000, 15000, 22000, 17000, 36000, 29000],
					name: '部门'
				}
			]
		}
	]
}

export const anlyanisAccessOption = {
	color: ['rgba(166,127,221)'],
	tooltip: {
		trigger: 'axis'
	},
	xAxis: [
		{
			type: 'category',
			boundaryGap: false,
			show: false
		}
	],
	yAxis: [
		{
			type: 'value',
			show: false
		}
	],
	series: [
		{
			type: 'line',
			smooth: true,
			showSymbol: false,
			areaStyle: {
				opacity: 0.8,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgba(166,127,221)'
					},
					{
						offset: 1,
						color: 'rgba(226, 209, 224)'
					}
				])
			},
			emphasis: {
				focus: 'series'
			},
			data: [2, 4, 6, 8, 4, 9, 5, 10, 7, 4, 6, 8, 12]
		}
	]
}

export const anlyanisPayOption = {
	color: ['rgba(101,178,252,1)'],
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		show: false
	},
	yAxis: {
		type: 'value',
		show: false
	},
	series: [
		{
			data: [2, 3, 5, 7, 8, 9, 5, 6, 3, 7, 9, 3, 4, 8, 4, 6],
			type: 'bar'
		}
	]
}

export const anlyanisSalesOption = {
	color: ['rgba(101,178,252,1)'],
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: 50,
		left: 50,
		right: 50,
		bottom: 50
	},
	xAxis: {
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			data: [368, 462, 562, 500, 640, 328, 732, 863, 635, 514, 780, 921],
			type: 'bar'
		}
	]
}
