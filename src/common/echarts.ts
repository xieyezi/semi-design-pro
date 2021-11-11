import * as echarts from 'echarts/core'
import {
	LineChart,
	BarChart,
	// PieChart,
	// ScatterChart,
	RadarChart
	// MapChart,
	// TreeChart,
	// TreemapChart,
	// GraphChart,
	// GaugeChart,
	// FunnelChart,
	// ParallelChart,
	// SankeyChart,
	// BoxplotChart,
	// CandlestickChart,
	// EffectScatterChart,
	// LinesChart,
	// HeatmapChart,
	// PictorialBarChart,
	// ThemeRiverChart,
	// SunburstChart,
	// CustomChart,
} from 'echarts/charts'
// import components, all suffixed with Component
import {
	// GridSimpleComponent,
	GridComponent,
	// PolarComponent,
	RadarComponent,
	// GeoComponent,
	// SingleAxisComponent,
	// ParallelComponent,
	// CalendarComponent,
	// GraphicComponent,
	ToolboxComponent,
	TooltipComponent,
	// AxisPointerComponent,
	// BrushComponent,
	TitleComponent,
	// TimelineComponent,
	// MarkPointComponent,
	// MarkLineComponent,
	// MarkAreaComponent,
	LegendComponent,
	// LegendScrollComponent,
	// LegendPlainComponent,
	// DataZoomComponent,
	// DataZoomInsideComponent,
	// DataZoomSliderComponent,
	// VisualMapComponent,
	// VisualMapContinuousComponent,
	// VisualMapPiecewiseComponent,
	// AriaComponent,
	// TransformComponent,
	DatasetComponent
} from 'echarts/components'
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
	CanvasRenderer
	// SVGRenderer,
} from 'echarts/renderers'

// Register the required components
echarts.use([
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	RadarComponent,
	GridComponent,
	ToolboxComponent,
	BarChart,
	LineChart,
	RadarChart,
	CanvasRenderer
])

export default echarts
