# Highcharts Stock Template

As part of a bigger side-project I am working on, I implemented a clean, visually appealing, and ready-to-use [Highcharts Stock](https://www.highcharts.com/blog/products/stock/) visualization template for charting financial stock data.

🚧👷 work in progress 👷🚧


[![](/assets/highcharts-stock-template-800.gif)](/assets/highcharts-stock-template.gif)

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
