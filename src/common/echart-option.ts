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
