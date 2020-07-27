# Highcharts Stock Template

As part of a bigger side-project I am working on, I implemented a clean, visually appealing, and ready-to-use [Highcharts Stock](https://www.highcharts.com/blog/products/stock/) visualization template for charting financial stock data. The template provides an optimized Highcharts Stock configuration with additional keyboard-shortcut-features allowing quick verification of Technical Analysis ideas and can be easily embedded in web applications.

[![](/assets/highcharts-stock-template-800.gif)](/assets/highcharts-stock-template.gif)

The layout consists of a main price-chart-area and two additional indicator-chart-areas below that. A navigator for the entire provided data is located in the bottom, and actually lots of data can be visualized thanks to Highchart's [data grouping](https://www.highcharts.com/docs/stock/data-grouping) functionality. The number and date formatting was optimized for Forex price data. The full template will adapt its size to the surrounding container element's size. The additional keyboard-shortcut-features implemented in JavaScript enhance the navigation experience, are described on pressing "ESC" or "?", and include zoom and exact pan depending on the data grouping.

## JSON Relationship Diagram

🚧👷 work in progress 👷🚧

[![](/assets/JSON.png)](/assets/JSON.png)

## JSON Sample

🚧👷 work in progress 👷🚧

```
{
  "timeseries": {
    "ohlc": {
      "name": "EURUSD_1 Min_Ask_2015.01.01_2016.01.01",
      "data": [
        [
          1433116800000,
          1.09577,
          1.09577,
          1.09561,
          1.09567
        ],
        [
          1433116860000,
          1.09567,
          1.09586,
          1.09567,
          1.09586
        ],
        ...
    },
    "lines": [
      {
        "name": "MA 2",
        "data": [
          [
            1433116800000,
            null
          ],
          [
            1433116860000,
            null
          ],
          ...
      },
      ...
    ]
  },
  "indicator1": {
    "extremes": {
      "upper": 100,
      "lower": 0
    },
    "lines": [
      {
        "name": "Indicator 1",
        "data": [
          [
            1433116800000,
            50
          ],
          [
            1433116860000,
            100
          ],
          ...
        ]
      },
      ...
    ]
    "range": {
      "name": "",
      "data": [
        [
          1433116800000,
          50,
          50
        ],
        [
          1433116860000,
          100,
          100
        ],
        ...
      ],
      "color": "#2196f33F"
    }
  },
  "indicator2": {
    "extremes": {
      "upper": 100,
      "lower": 0
    },
    "lines": [
      {
        "name": "Indicator 2",
        "data": [
          [
            1433116800000,
            null
          ],
          [
            1433116860000,
            null
          ],
          ...
        ]
      },
      ...
    ]
    "range": {
      "name": "",
      "data": [
        [
          1433116800000,
          50,
          50
        ],
        [
          1433116860000,
          100,
          100
        ],
        ...
      ],
      "color": "#2196f33F"
    }
  },
  "markers": {
    "lines": [
      {
        "value": 1433116860000,
        "color": "#ffc10718",
        "width": "4.0"
      },
      {
        "value": 1433116920000,
        "color": "#ffc10718",
        "width": "4.0"
      },
      ...
    ],
    "bands": [
      {
        "valueFrom": 1433117580000,
        "valueTo": 1433118000000,
        "color": "#2196f318"
      },
      {
        "valueFrom": 1433124360000,
        "valueTo": 1433125200000,
        "color": "#2196f318"
      },
      ...
    ]
  }
}
```
