// Material Design colors //////////////////////////////////////////////////////////////////////////
// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
// https://material.io/resources/color/

// Material A 700 (very intense, too purple)
// const colorRed = '#d50000';
// const colorPink = '#c51162';
// const colorPurple = '#aa00ff';
// const colorDeepPurple = '#6200ea';
// const colorIndigo = '#304ffe';
// const colorBlue = '#2962ff';
// const colorLightBlue = '#0091ea';
// const colorCyan = '#00b8d4';
// const colorTeal = '#00bfa5';
// const colorGreen = '#00c853';
// const colorLightGreen = '#64dd17';
// const colorLime = '#aeea00';
// const colorYellow = '#ffd600';
// const colorAmber = '#ffab00';
// const colorOrange = '#ff6d00';
// const colorDeepOrange = '#dd2c00';

// Material A 400 (good)
// const colorRed = '#ff1744';
// const colorPink = '#f50057';
// const colorPurple = '#d500f9';
// const colorDeepPurple = '#651fff';
// const colorIndigo = '#3d5afe';
// const colorBlue = '#2979ff';
// const colorLightBlue = '#00b0ff';
// const colorCyan = '#00e5ff';
// const colorTeal = '#1de9b6';
// const colorGreen = '#00e676';
// const colorLightGreen = '#76ff03';
// const colorLime = '#c6ff00';
// const colorYellow = '#ffea00';
// const colorAmber = '#ffc400';
// const colorOrange = '#ff9100';
// const colorDeepOrange = '#ff3d00';

// Material 700 (depressive)
// const colorRed = '#d32f2f';
// const colorPink = '#c2185b';
// const colorPurple = '#7b1fa2';
// const colorDeepPurple = '#512da8';
// const colorIndigo = '#303f9f';
// const colorBlue = '#1976d2';
// const colorLightBlue = '#0288d1';
// const colorCyan = '#0097a7';
// const colorTeal = '#00796b';
// const colorGreen = '#388e3c';
// const colorLightGreen = '#689f38';
// const colorLime = '#afb42b';
// const colorYellow = '#fbc02d';
// const colorAmber = '#ffa000';
// const colorOrange = '#f57c00';
// const colorDeepOrange = '#e64a19';
// const colorBrown = '#5d4037';
// const colorGrey = '#616161';
// const colorBlueGrey = '#455a64';

// Material 600 (ok'ish)
// const colorRed = '#e53935';
// const colorPink = '#d81b60';
// const colorPurple = '#8e24aa';
// const colorDeepPurple = '#5e35b1';
// const colorIndigo = '#3949ab';
// const colorBlue = '#1e88e5';
// const colorLightBlue = '#039be5';
// const colorCyan = '#00acc1';
// const colorTeal = '#00897b';
// const colorGreen = '#43a047';
// const colorLightGreen = '#7cb342';
// const colorLime = '#c0ca33';
// const colorYellow = '#fdd835';
// const colorAmber = '#ffb300';
// const colorOrange = '#fb8c00';
// const colorDeepOrange = '#f4511e';
// const colorBrown = '#6d4c41';
// const colorGrey = '#757575';
// const colorBlueGrey = '#546e7a';

// Material 500 (best)
const colorRed = '#f44336';
const colorPink = '#e91e63';
const colorPurple = '#9c27b0';
const colorDeepPurple = '#673ab7';
const colorIndigo = '#3f51b5';
const colorBlue = '#2196f3';
const colorLightBlue = '#03a9f4';
const colorCyan = '#00bcd4';
const colorTeal = '#009688';
const colorGreen = '#4caf50';
const colorLightGreen = '#8bc34a';
const colorLime = '#cddc39';
const colorYellow = '#ffeb3b';
const colorAmber = '#ffc107';
const colorOrange = '#ff9800';
const colorDeepOrange = '#ff5722';
const colorBrown = '#795548';
const colorGrey = '#9e9e9e';
const colorBlueGrey = '#607d8b';

// Material 400 (too light)
// const colorRed = '#ef5350';
// const colorPink = '#ec407a';
// const colorPurple = '#ab47bc';
// const colorDeepPurple = '#7e57c2';
// const colorIndigo = '#5c6bc0';
// const colorBlue = '#42a5f5';
// const colorLightBlue = '#29b6f6';
// const colorCyan = '#26c6da';
// const colorTeal = '#26a69a';
// const colorGreen = '#66bb6a';
// const colorLightGreen = '#9ccc65';
// const colorLime = '#d4e157';
// const colorYellow = '#ffee58';
// const colorAmber = '#ffca28';
// const colorOrange = '#ffa726';
// const colorDeepOrange = '#ff7043';
// const colorBrown = '#8d6e63';
// const colorGrey = '#bdbdbd';
// const colorBlueGrey = '#78909c';

// Material 100 (supplemental)
const colorGrey100 = '#f5f5f5';
const colorGrey100Dark = '#c2c2c2';

// alpha values

const colorAlpha00 = '00';
const colorAlpha10 = '10';
const colorAlpha20 = '20';
const colorAlpha40 = '40';

// browser history handling ////////////////////////////////////////////////////////////////////////

let isHistoryBack = false;
window.onpopstate = function (event) {
	if (event.state && event.state.min && event.state.max) {
		isHistoryBack = true;
		chart.xAxis[0].setExtremes(event.state.min, event.state.max);
	}
};

// Highcharts Stock initialization /////////////////////////////////////////////////////////////////

const chart = Highcharts.stockChart('container', {
	accessibility: {
		keyboardNavigation: {
			enabled: false,
		},
	},
	chart: {
		animation: false, // improves performance
		shadow: false, // improves performance
		events: {
			render: function () {
				// custom timeframe label
				if (this.series[0]) {
					if (!chart.labelTimeframe) {
						chart.labelTimeframe = this.renderer
							.label('', 0, 0)
							.css({
								fontWeight: 'bold',
							})
							.add();
					}
					const string =
						(this.series[0].currentDataGrouping ? this.series[0].currentDataGrouping.count : '1') +
						' ' +
						(this.series[0].currentDataGrouping ? this.series[0].currentDataGrouping.unitName : 'minute') +
						' time frame from ' +
						Highcharts.dateFormat('%A %Y-%m-%d %H:%M', this.series[0].processedXData[0]) +
						' to ' +
						Highcharts.dateFormat(
							'%A %Y-%m-%d %H:%M',
							this.series[0].processedXData[this.series[0].processedXData.length - 1] +
								(this.series[0].currentDataGrouping ? this.series[0].currentDataGrouping.unitRange : chart.series[0].basePointRange)
						);
					chart.labelTimeframe.attr({
						text: string,
					});
				}
			},
		},
		ignoreHiddenSeries: true,
		margin: [0, 0, 0, 0], // margin between the outer edge of the chart and the plot area
		spacing: [0, 0, 0, 0], // between outer edge of chart and content, like title or legend, or axis title and labels if present
		zoomType: 'x',
	},
	credits: {
		enabled: false,
	},
	legend: {
		enabled: false,
	},
	navigator: {
		height: 75,
		maskFill: colorBlue + colorAlpha20,
	},
	plotOptions: {
		series: {
			animation: false,
			dataGrouping: {
				units: [
					['minute', [1]],
					['hour', [1]],
					['day', [1]],
					['month', [1]],
					['year', [1]],
				],
				dateTimeLabelFormats: {
					millisecond: ['%A %Y-%m-%d %H:%M:%S.%L'],
					second: ['%A %Y-%m-%d, %H:%M:%S'],
					minute: ['%A %Y-%m-%d %H:%M'],
					hour: ['%A %Y-%m-%d %H:%M'],
					day: ['%A %Y-%m-%d'],
					week: ['%Y-%m-%d'],
					month: ['%Y-%m'],
					year: ['%Y'],
				},
			},
			marker: {
				enabled: false,
			},
			states: {
				hover: {
					enabled: false,
				},
			},
			showInNavigator: false,
			tooltip: {
				headerFormat: '{point.key}', // floating date above the navigator and following the mouse cursor
				pointFormat: '<span style="color:{point.color};">█ </span><span style="font-weight: bold;">{series.name}</span> {point.y}',
				valueDecimals: 6,
			},
		},
		candlestick: {
			zIndex: 666,
			showInNavigator: true,

			color: colorBlue,
			lineColor: colorBlue,
			upColor: 'white',
			upLineColor: colorBlue,

			navigatorOptions: {
				type: 'area',
				color: colorBlue,
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 0.95, // original: 1
					},
					stops: [
						[0, colorBlue + colorAlpha40],
						[1, colorBlue + colorAlpha00],
					],
				},
				lineWidth: 1,
			},
			tooltip: {
				pointFormat:
					'<span style="font-weight: bold;">{series.name}</span> ' + 'O {point.open} / ' + 'H {point.high} / ' + 'L {point.low} / ' + 'C {point.close}',
			},
		},
	},
	rangeSelector: {
		height: 27, // fixes padding of unknown origin between range selector and plot area
		inputEnabled: false,
		buttonPosition: {
			align: 'right',
			x: 0,
			y: 0,
		},
		buttonTheme: {
			r: 0,
			fill: colorGrey100,
			style: {
				color: colorBlue,
			},
			states: {
				hover: {
					fill: colorBlue,
					style: {
						color: 'white',
					},
				},
				select: {
					fontWeight: 'bold',
					fill: colorGrey100Dark,
					style: {
						color: 'black',
					},
				},
				disabled: {
					style: {
						color: colorGrey100Dark,
					},
				},
			},
		},
		buttons: [
			{ type: 'hour', count: 1, text: '1h' },
			{ type: 'hour', count: 2, text: '2h' },
			{ type: 'hour', count: 3, text: '3h' },
			{ type: 'hour', count: 4, text: '4h' },
			{ type: 'hour', count: 6, text: '6h' },
			{ type: 'hour', count: 12, text: '12h' },
			{ type: 'day', count: 1, text: '1d' },
			{ type: 'day', count: 2, text: '2d' },
			{ type: 'day', count: 3, text: '3d' },
			{ type: 'day', count: 4, text: '4d' },
			{ type: 'day', count: 5, text: '5d' },
			{ type: 'day', count: 6, text: '6d' },
			{ type: 'week', count: 1, text: '1w' },
			{ type: 'week', count: 2, text: '2w' },
			{ type: 'week', count: 3, text: '3w' },
			{ type: 'month', count: 1, text: '1m' },
			{ type: 'month', count: 2, text: '2m' },
			{ type: 'month', count: 3, text: '3m' },
			{ type: 'year', count: 1, text: '1y' },
			{ type: 'all', text: 'All' },
		],
		selected: 19,
	},
	scrollbar: {
		// enabled: false, // disables live redraw when scrolling, use height instead:
		height: 0,
	},
	tooltip: {
		// xDateFormat doesn't work, see https://stackoverflow.com/questions/15212475/xdateformat-string-doesnt-apply-to-large-amounts-of-data/15224477#15224477
		// must be set in: series > dataGrouping > dateTimeLabelFormats
		// xDateFormat: '%Y-%m-%d',
		hideDelay: 0,
		backgroundColor: colorGrey100Dark,
		borderWidth: 0,
		shape: 'square',
		headerShape: 'callout',
		shadow: false,
		positioner: function (width, height, point) {
			var chart = this.chart;
			if (point.isHeader) {
				return {
					x: Math.max(
						0, // left side limit
						Math.min(
							point.plotX + chart.plotLeft - width / 2,
							chart.chartWidth - width - chart.marginRight // right side limit
						)
					),
					y: chart.plotHeight,
				};
			} else {
				return {
					x: point.series.chart.plotLeft + (point.plotX > 400 ? 0 : 1000),
					y: point.series.yAxis.top - point.series.chart.plotTop,
				};
			}
		},
	},
	xAxis: {
		// type: 'datetime', // not necessary
		crosshair: {
			color: colorGrey100Dark,
			// this is being taken care of by the chart's tooltip header:
			// label: {
			// 	enabled: true,
			// 	backgroundColor: colorBlue,
			// },
		},
		events: {
			afterSetExtremes: function (event) {
				document.title = Highcharts.dateFormat('%A %Y-%m-%d %H:%M', event.min) + ' - ' + Highcharts.dateFormat('%A %Y-%m-%d %H:%M', event.max);
				if (isHistoryBack) {
					isHistoryBack = false;
				} else {
					history.pushState({ min: event.min, max: event.max }, '', '');
				}
			},
		},
	},
	yAxis: [
		{
			height: '70%',
			labels: {
				format: '{value:.4f}',
			},
			startOnTick: false,
			endOnTick: false,
			crosshair: {
				color: colorGrey100Dark,
				label: {
					enabled: true,
					format: '{value:.6f}',
					style: {
						color: 'black',
					},
					backgroundColor: colorGrey100Dark,
				},
			},
		},
		{
			top: '70%',
			height: '15%',
			gridLineWidth: 0,
			startOnTick: false,
			endOnTick: false,
			labels: {
				enabled: false,
				format: '{value:.1f}',
			},
			plotLines: [
				{
					value: 0, // requires "gridLineWidth: 0;" on this yAxis to work
					width: 1,
					dashStyle: 'ShortDot',
					color: colorBlue,
				},

				////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				// TODO
				// RSI: 0 / 30 / 70 / 100, Stoch: 0 / 20 / 80 / 100
				// Solid, ShortDash, ShortDot, ShortDashDot, ShortDashDotDot, Dot, Dash, LongDash, DashDot, LongDashDot, LongDashDotDot

				{ value: 100, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: 70, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: 50, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: 30, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: -71.43, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: -0, width: 1, dashStyle: 'ShortDot', color: colorBlue },
			],
			plotBands: [
				{ color: colorDeepOrange + colorAlpha10, from: 50, to: 1e4 },
				{ color: colorLightGreen + colorAlpha10, from: 50, to: -1e4 },
				{ color: colorBlue + colorAlpha40, from: 30, to: 70 },
			],
		},
		{
			top: '85%',
			height: '15%',
			gridLineWidth: 0,
			startOnTick: false,
			endOnTick: false,
			labels: {
				enabled: false,
				format: '{value:.1f}',
			},
			plotLines: [
				{
					value: 0, // requires "gridLineWidth: 0;" on this yAxis to work
					width: 1,
					dashStyle: 'ShortDot',
					color: colorBlue,
				},
				{ value: 100, width: 1, dashStyle: 'ShortDot', color: colorBlue },
				{ value: -100, width: 1, dashStyle: 'ShortDot', color: colorBlue },
			],
			plotBands: [
				{ color: colorDeepOrange + colorAlpha10, from: 0, to: 1e4 },
				{ color: colorLightGreen + colorAlpha10, from: 0, to: -1e4 },
			],
		},
	],
});

chart.showLoading();

// zoom functions //////////////////////////////////////////////////////////////////////////////////

const chartZoom = (...parameters) => {
	const [/*double*/ zoomFactor] = parameters;
	chart.showLoading(zoomFactor >= 1 ? '－' : '＋');

	const extremes = chart.xAxis[0].getExtremes();
	const zoomRange = extremes.max - extremes.min;
	const zoomDiff = (zoomRange * zoomFactor - zoomRange) / 2;

	const [min, max] = (() => {
		const isOutOfDataMin = extremes.min - zoomDiff < extremes.dataMin;
		const isOutOfDataMax = extremes.max + zoomDiff > extremes.dataMax;
		if (isOutOfDataMin & isOutOfDataMax) {
			return [extremes.dataMin, extremes.dataMax];
		} else if (isOutOfDataMin) {
			return [extremes.dataMin, extremes.dataMin + zoomRange * zoomFactor];
		} else if (isOutOfDataMax) {
			return [extremes.dataMax - zoomRange * zoomFactor, extremes.dataMax];
		} else {
			return [extremes.min - zoomDiff, extremes.max + zoomDiff];
		}
	})();

	setTimeout(() => {
		// only delayed setExtremes() works properly
		chart.xAxis[0].setExtremes(min, max);
		chart.hideLoading();
	}, 100);
};

const chartPan = (...parameters) => {
	const [/*boolean*/ isLeft] = parameters;
	chart.showLoading(isLeft ? '◄ ' : '►');

	const extremes = chart.xAxis[0].getExtremes();
	if ((isLeft && extremes.min == extremes.dataMin) || (!isLeft && extremes.max == extremes.dataMax)) {
		// the condition works also when "series.hasGroupedData" is true
		chart.hideLoading();
		return;
	}

	const series = chart.series[0];
	const seriesIndexLast = series.options.data.length - 1;
	const [rawBarIndexFirst, rawBarIndexLast] = (() => {
		if (series.hasGroupedData) {
			return [series.cropStart, series.dataGroupInfo.start + series.dataGroupInfo.length - 1];
		}
		return [series.points[0].index, series.points[series.points.length - 1].index];
	})();
	// const panRawBars = (rawBarIndexLast - rawBarIndexFirst + 1) * (isLeft ? -1 : 1); // pan by all visible bars
	const panFactor = 0.5; // pan by fraction of visible bars
	const panRawBars = Math.trunc((rawBarIndexLast - rawBarIndexFirst + 1) * (isLeft ? -1 : 1) * panFactor); // pan by fraction of visible bars

	const [min, max] = (() => {
		const isOutOfIndexMin = rawBarIndexFirst + panRawBars < 0;
		const isOutOfIndexMax = rawBarIndexLast + panRawBars > seriesIndexLast;
		if (isOutOfIndexMin && isOutOfIndexMax) {
			return [null, null];
		} else if (isOutOfIndexMin) {
			// return [series.xData[0], series.xData[Math.abs(panRawBars)]]; // pan by all visible bars
			return [series.xData[0], series.xData[Math.abs(panRawBars) / panFactor]]; // pan by fraction of visible bars
		} else if (isOutOfIndexMax) {
			// return [series.xData[seriesIndexLast - panRawBars], series.xData[seriesIndexLast]]; // pan by all visible bars
			return [series.xData[seriesIndexLast - panRawBars / panFactor], series.xData[seriesIndexLast]]; // pan by fraction of visible bars
		} else {
			return [series.xData[rawBarIndexFirst + panRawBars], series.xData[rawBarIndexLast + panRawBars]];
		}
	})();

	setTimeout(() => {
		chart.xAxis[0].setExtremes(min, max);
		chart.hideLoading();
	}, 100);
};

const chartShiftRight = () => {
	chart.showLoading('▲');
	setTimeout(() => {
		const length = 1000;
		chart.xAxis[0].setExtremes(chart.series[0].xData[chart.series[0].xData.length - length], chart.series[0].xData[chart.series[0].xData.length - 1]);
		chart.hideLoading();
	}, 100);
};

const chartZoomAll = () => {
	chart.showLoading('0');
	setTimeout(() => {
		chart.xAxis[0].setExtremes(null, null);
		chart.hideLoading();
	}, 100);
};

// key press functions /////////////////////////////////////////////////////////////////////////////

document.addEventListener('keydown', (event) => {
	switch (event.keyCode) {
		// see https://keycode.info/
		case 48: // 0
		case 96: // numpad 0
			event.preventDefault(); // disable Firefox's "Search for text when I start typing"
			chartZoomAll();
			break;
		case 38: // up arrow
			chartShiftRight();
			break;
		case 40: // down arrow
			break;
		case 37: // left arrow
			chartPan(true);
			break;
		case 39: // right arrow
			chartPan(false);
			break;
		case 171: // plus
		case 107: // numpad plus
			event.preventDefault(); // disable Firefox's "Search for text when I start typing"
			chartZoom(1 / 1.5);
			break;
		case 173: // minus
		case 109: // numpad minus
			event.preventDefault(); // disable Firefox's "Search for text when I start typing"
			chartZoom(1.5);
			break;
		case 27: // ESC
		case 63: // ?
			event.preventDefault(); // disable Firefox's "Search for text when I start typing"
			const element = document.querySelector('#containerHelp');
			if (element) {
				if (element.style.visibility === 'visible') {
					element.style.visibility = 'hidden';
				} else {
					element.style.visibility = 'visible';
				}
			}
			break;
	}
});

// series helper functions /////////////////////////////////////////////////////////////////////////

const colors = {
	range: [colorOrange, colorRed, colorPurple, colorIndigo, colorBlue, colorCyan, colorTeal, colorGreen, colorBrown, colorBlueGrey],
	index: 0,
	reset() {
		this.index = 0;
	},
	get() {
		if (this.index > this.range.length - 1) {
			this.index = 0;
		}
		return this.range[this.index++];
	},
};

const createSeriesLine = (line, yAxis, isTooltip) => {
	const series = {
		name: line.name ? line.name : 'undefined',
		data: line.data,
		type: 'line',
		color: line.color ? line.color : colors.get(),
		lineWidth: line.width > 0 ? line.width : 1,
		states: {
			hover: {
				lineWidth: line.width > 0 ? line.width : 1,
			},
		},
	};
	if (line.step) {
		series.step = true;
	}
	if (line.style) {
		series.dashStyle = line.style;
	}
	if (line.connectNulls) {
		series.connectNulls = true;
	}
	if (yAxis > 0) {
		series.yAxis = yAxis;
	}
	if (isTooltip === false) {
		// series.enableMouseTracking = false; // de-activates series generally and is problematic, instead use:
		series.tooltip = {
			pointFormatter: function () {
				// properly disables tooltip
				return false;
			},
		};
	}

	return series;
};

const createSeriesRange = (range, yAxis, isTooltip) => {
	const series = {
		name: range.name ? range.name : 'undefined',
		data: range.data,
		type: 'arearange',
		color: range.color ? range.color : colors.get() + colorAlpha40,
		lineWidth: 0,
	};
	if (range.step) {
		series.step = true;
	}
	if (yAxis > 0) {
		series.yAxis = yAxis;
	}
	if (isTooltip === false) {
		series.tooltip = {
			pointFormatter: function () {
				return false;
			},
		};
	}
	return series;
};

const createPlotLine = (config) => {
	const line = {
		value: config.value,
		color: config.color ? config.color : colorBlue,
		width: config.width > 0 ? config.width : 1,
	};
	if (config.style) {
		line.dashStyle = config.style;
	}
	if (config.label) {
		line.label = {
			rotation: 0,
			text: config.label,
			x: 5,
			y: 20,
			style: {
				'font-weight': 'bold',
			},
		};
	}
	return line;
};

const createPlotBand = (config) => {
	const band = {
		from: config.valueFrom,
		to: config.valueTo,
		color: config.color ? config.color : colorBlue,
	};
	if (config.label) {
		band.label = {
			text: config.label,
			textAlign: 'left',
			x: 0,
		};
	}
	return band;
};

// fetch JSON data from http://localhost:8888/data /////////////////////////////////////////////////

// expected JSON structure
// =======================
// timeseries: { ... }
//   ohlc: { name + data[] }
//   lines: [ { name + data[] ( + step + color + style + width + connectNulls ) } ]
//   range: { name + data[] ( + step + color ) }
// indicator1: { ... }
//   extremes: { upper + lower }
//   lines: see above
//   range: see above
// indicator2: { ... }
//   extremes: see above
//   lines: see above
//   range: see above
// markers: { ... }
//   lines:  [ { value ( + color + style + width + label ) } ]
//   bands:  [ { valueFrom + valueTo ( + color + label ) } ]

fetch('http://localhost:8888/json')
	.then((response) => {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	})
	.then((response) => response.json())
	.then((json) => {
		chart.options.loading.labelStyle = {
			'font-size': '500px',
			fontWeight: 'bold',
			color: colorBlue,
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			'justify-content': 'center',
			'align-items': 'center',
		};

		if (json.markers) {
			if (json.markers.bands) {
				json.markers.bands.forEach((band) => {
					chart.xAxis[0].addPlotBand(createPlotBand(band));
				});
			}
			if (json.markers.lines) {
				json.markers.lines.forEach((line) => {
					chart.xAxis[0].addPlotLine(createPlotLine(line));
				});
			}
		}

		if (json.timeseries) {
			if (json.timeseries.ohlc) {
				chart.addSeries({
					type: 'candlestick',
					name: json.timeseries.ohlc.name,
					data: json.timeseries.ohlc.data,
				});
			}
			if (json.timeseries.range) {
				colors.reset();
				chart.addSeries(createSeriesRange(json.timeseries.range));
			}
			if (json.timeseries.lines) {
				colors.reset();
				json.timeseries.lines.forEach((line) => chart.addSeries(createSeriesLine(line)));
			}
		}

		if (json.indicator1) {
			chart.yAxis[1].setExtremes(json.indicator1.extremes.lower * 1.025, json.indicator1.extremes.upper * 1.05); // ensures static min and max on zoom
			if (json.indicator1.range) {
				colors.reset();
				chart.addSeries(createSeriesRange(json.indicator1.range, 1, false));
			}
			if (json.indicator1.lines) {
				colors.reset();
				json.indicator1.lines.forEach((line) => chart.addSeries(createSeriesLine(line, 1, false)));
			}
		}

		if (json.indicator2) {
			chart.yAxis[2].setExtremes(json.indicator2.extremes.lower * 1.05, json.indicator2.extremes.upper * 1.025); // ensures static min and max on zoom
			if (json.indicator2.range) {
				colors.reset();
				chart.addSeries(createSeriesRange(json.indicator2.range, 2, false));
			}
			if (json.indicator2.lines) {
				colors.reset();
				json.indicator2.lines.forEach((line) => chart.addSeries(createSeriesLine(line, 2, false)));
			}
		}

		chart.hideLoading();
	})
	.catch((error) => {
		console.log(error);
		chart.hideLoading();
	});
