# React Chart.js 

<br>

1. [Documentation](https://react-chartjs-2.js.org/)

<br>


# React Chart.js Notes

## Index



1. [Introduction & Setup](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-1-introduction--setup)
2. [Line Chart & Customization](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-2-line-chart--customization)
3. [Pie & Doughnut Charts](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-3-pie--doughnut-charts)
4. [Chart Interactions & Tooltips](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-4-chart-interactions--tooltips)
5. [Responsive Charts & Styling with CSS](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-5-responsive-charts--styling-with-css)
6. [Chart.js Plugins & Extensions](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-6-chartjs-plugins--extensions)
7. [Using Multiple Datasets](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-7-using-multiple-datasets)
8. [Dynamic Data (e.g., from API or props)](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-8-dynamic-data-eg-from-api-or-props)
9. [Chart Updates with useEffect & useState](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-9-chart-updates-with-useeffect--usestate)
10. [Exporting Chart as Image / Download Feature (Optional)](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Modules/01_ChartJS.md#part-10-exporting-chart-as-image--download-feature-optional)


<br>

## Part 1: Introduction & Setup

### 1.1 What is Chart.js?

* A popular open-source JavaScript library for creating beautiful, responsive, and interactive charts.
* Works with HTML5 `<canvas>` element.

### 1.2 What is React Chart.js 2?

* A React wrapper for Chart.js library.
* Makes it easier to integrate Chart.js with React components.
* Package name: `react-chartjs-2`

### 1.3 Supported Chart Types

* Line
* Bar
* Pie
* Doughnut
* Radar
* Polar Area
* Bubble
* Scatter

### 1.4 Installation

```bash
npm install chart.js react-chartjs-2
```

### 1.5 Basic Usage Example

```jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales',
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
```

<br>

---

<br>



## Part 2: Line Chart & Customization

### 2.1 Line Chart Example

```jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Visitors',
      data: [100, 200, 150, 220, 300],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4, // smooth curve
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Website Traffic',
    },
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
```

### 2.2 Customization Options

* `tension`: controls the curve (0 = straight lines, 1 = smooth curve)
* `borderColor`, `backgroundColor`: style the line and fill
* `legend.position`: `'top'`, `'bottom'`, `'left'`, `'right'`
* `title.text`: set chart title

### 2.3 Tip: Responsive Charts

* Chart.js is responsive by default (`responsive: true`)
* You can also control aspect ratio:

```js
maintainAspectRatio: false
```

Set CSS height/width for the chart container.



Next: Pie & Doughnut Charts



<br>

---

<br>

## Part 3: Pie & Doughnut Charts

### 3.1 Pie Chart Example

```jsx
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return <Pie data={data} />;
}
```

### 3.2 Doughnut Chart Example

```jsx
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {
  return <Doughnut data={data} />;
}
```

* Uses same data and config as Pie chart.
* Only visual difference: a hole in the center.

### 3.3 Customization Options

* `backgroundColor`: controls slice colors
* `cutout`: for Doughnut chart (default is 50%)

```js
options = {
  cutout: '70%', // larger hole
}
```

* `plugins.legend.position`: controls label placement




<br>

---

<br>



## Part 4: Chart Interactions & Tooltips

### 4.1 Interactivity in Chart.js

Chart.js includes built-in interactivity:

* Hover effects
* Tooltips on hover
* Click events

### 4.2 Customizing Tooltips

Tooltips can be customized via the `options.plugins.tooltip` object.

```js
const options = {
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.7)',
      titleColor: '#fff',
      bodyColor: '#ccc',
      callbacks: {
        label: function(context) {
          return `Value: ${context.raw}`;
        },
      },
    },
  },
};
```

### 4.3 Adding Click Events

You can access elements that were clicked using `getElementsAtEventForMode`:

```jsx
import { Bar } from 'react-chartjs-2';
import { useRef } from 'react';

function ClickableBarChart() {
  const chartRef = useRef();

  const handleClick = (event) => {
    const chart = chartRef.current;
    if (!chart) return;
    const points = chart.getElementsAtEventForMode(
      event,
      'nearest',
      { intersect: true },
      true
    );
    if (points.length > 0) {
      const firstPoint = points[0];
      const label = chart.data.labels[firstPoint.index];
      const value = chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
      alert(`Clicked on ${label}: ${value}`);
    }
  };

  return <Bar ref={chartRef} data={data} options={options} onClick={handleClick} />;
}
```

### 4.4 Events You Can Use

* `onClick`
* `onHover`
* `onResize`

These can be added as props to the chart component.





<br>

---

<br>



## Part 5: Responsive Charts & Styling with CSS

### 5.1 Responsiveness in Chart.js

* Chart.js charts are responsive by default using `responsive: true`
* Aspect ratio is maintained unless disabled

```js
options = {
  responsive: true,
  maintainAspectRatio: false,
};
```

### 5.2 Controlling Chart Size with CSS

You can wrap the chart in a `div` and control its height/width using CSS:

```jsx
<div style={{ width: '100%', height: '400px' }}>
  <Bar data={data} options={options} />
</div>
```

### 5.3 Custom Styling Examples

Use Tailwind CSS or plain CSS to apply styles to the chart container.

**Tailwind Example:**

```jsx
<div className="w-full h-[400px] bg-gray-100 p-4 rounded-lg">
  <Line data={data} options={options} />
</div>
```

**CSS Example:**

```css
.chart-wrapper {
  width: 100%;
  height: 400px;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
}
```

```jsx
<div className="chart-wrapper">
  <Pie data={data} />
</div>
```

### 5.4 Setting Canvas Background Color

To apply a background color to the chart canvas itself:

```js
options = {
  layout: {
    backgroundColor: '#fff'
  }
};
```

**Note:** Setting canvas background color might require plugin or external CSS overlay.




<br>

---

<br>



## Part 6: Chart.js Plugins & Extensions

### 6.1 What Are Plugins?

* Plugins allow you to extend Chart.js behavior (e.g., add custom labels, watermarks, tooltips, backgrounds)
* Can be custom-made or community-provided

### 6.2 Using Built-in Plugins

Chart.js comes with several built-in plugins:

* `legend`
* `title`
* `tooltip`
* `filler`
* `colors`

You can configure these under `options.plugins`

```js
options = {
  plugins: {
    title: {
      display: true,
      text: 'Custom Chart Title',
    },
    legend: {
      display: true,
      position: 'top',
    },
  },
};
```

### 6.3 Creating a Custom Plugin

```js
const customPlugin = {
  id: 'customBackgroundColor',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const options = {
  plugins: [customPlugin],
};
```

### 6.4 Registering External Plugins

Install a community plugin, e.g. `chartjs-plugin-datalabels`

```bash
npm install chartjs-plugin-datalabels
```

Then import and register it:

```js
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);
```

Enable it in your options:

```js
options = {
  plugins: {
    datalabels: {
      color: '#333',
      anchor: 'end',
      align: 'top',
      formatter: (value) => value + '%',
    },
  },
};
```



<br>

---

<br>



## Part 7: Using Multiple Datasets

### 7.1 What Are Multiple Datasets?

* Multiple datasets allow you to compare different data trends on the same chart.
* Each dataset appears as a separate line/bar/etc., depending on the chart type.

### 7.2 Line Chart with Multiple Datasets

```jsx
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Product A',
      data: [30, 50, 70, 60],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4,
    },
    {
      label: 'Product B',
      data: [40, 60, 80, 100],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
    },
  ],
};
```

### 7.3 Bar Chart with Multiple Datasets

```jsx
const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: '2023',
      data: [100, 200, 150, 170],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
    {
      label: '2024',
      data: [120, 180, 130, 190],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    },
  ],
};
```

### 7.4 Displaying Multiple Datasets

* Each dataset will be drawn separately.
* Colors and labels differentiate them.
* The legend automatically reflects multiple entries.

### 7.5 Tip

* Use `stacked: true` for stacked bar charts:

```js
options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
```



<br>

---

<br>

## Part 8: Dynamic Data (e.g., from API or props)

### 8.1 Why Use Dynamic Data?

* Makes charts responsive to changes in app state or data fetched from APIs.
* Common in dashboards, analytics, and reporting UIs.

### 8.2 Using Props for Dynamic Charts

```jsx
function DynamicLineChart({ chartData, chartOptions }) {
  return <Line data={chartData} options={chartOptions} />;
}
```

* Pass `data` and `options` from a parent component.

### 8.3 Fetching Data from an API

```jsx
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function APILineChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.example.com/stats');
      const json = await res.json();
      setChartData({
        labels: json.labels,
        datasets: [
          {
            label: 'API Data',
            data: json.values,
            borderColor: 'blue',
            backgroundColor: 'lightblue',
          },
        ],
      });
    }
    fetchData();
  }, []);

  return <Line data={chartData} />;
}
```

### 8.4 Using useMemo for Performance

If your data is derived from heavy computation or filtering:

```jsx
const processedData = useMemo(() => transform(rawData), [rawData]);
```





<br>

---

<br>

## Part 9: Chart Updates with useEffect & useState

### 9.1 Why Handle Updates?

* Sometimes, charts need to update when user input changes (e.g., filter, button click).
* Using `useState` and `useEffect`, we can update the chart data dynamically.

### 9.2 Example: Update Chart on Button Click

```jsx
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function InteractiveBarChart() {
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Views',
        data: [100, 200, 300],
        backgroundColor: 'orange',
      },
    ],
  });

  const updateData = () => {
    setData({
      labels: ['Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Views',
          data: [400, 500, 600],
          backgroundColor: 'purple',
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={updateData}>Update Chart</button>
      <Bar data={data} />
    </div>
  );
}
```

### 9.3 Chart Ref and Update Method (Advanced)

If you need to call `update()` on the chart instance:

```jsx
import { useRef } from 'react';

const chartRef = useRef();
chartRef.current.update();
```

But generally not required unless using low-level Chart.js methods.

### 9.4 When to Use useEffect

Use `useEffect` when chart data depends on external triggers like props or API:

```jsx
useEffect(() => {
  setChartData(...);
}, [dependency]);
```




<br>

---

<br>


## Part 10: Exporting Chart as Image / Download Feature (Optional)

### 10.1 Why Export Charts?

* Exporting charts as images is useful for reports, sharing, or saving snapshots.

### 10.2 Using chartRef and toBase64Image()

Chart.js allows converting the canvas to an image using `toBase64Image()`.

```jsx
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';

export default function ExportableChart() {
  const chartRef = useRef();

  const handleDownload = () => {
    const chart = chartRef.current;
    if (!chart) return;
    const url = chart.toBase64Image();
    const link = document.createElement('a');
    link.href = url;
    link.download = 'chart.png';
    link.click();
  };

  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Sample',
        data: [10, 20, 30],
        borderColor: 'green',
      },
    ],
  };

  return (
    <div>
      <Line ref={chartRef} data={data} />
      <button onClick={handleDownload}>Download Chart</button>
    </div>
  );
}
```

### 10.3 Important Notes

* The chart must be fully rendered before calling `toBase64Image()`.
* This works on `<canvas>` element only (default in Chart.js).

### 10.4 Alternative: External Libraries

* You can use libraries like `html2canvas` or `dom-to-image` for exporting entire DOM containers.



<br>

---

<br>
