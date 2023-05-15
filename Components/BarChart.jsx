
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: '#6941C6',
                    data: [80, 105, 92, 78, 90, 76, 42,92,55,33,110,90],
                    borderRadius: 8
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: "#9E77ED",
                    data: [101, 94, 24, 75, 87, 65, 84, 72,72,24,83,98],
                    borderRadius: 8
                    
                },
                {
                    type: 'bar',
                    label: 'Dataset 3', 
                    backgroundColor: '#D6BBFB',
                    data: [41, 72, 24, 74, 23, 101, 92 , 65, 34, 42,60,101],
                    borderRadius: 8
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.5,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    },
                    display:false
                }
            },
       
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        color: "white"
                    },
                    ticks: {
                        // color: "#475467",
                        font:{
                            size:14,
                            weight: 'normal',
                        },
                        color: "#475467",
                        
                        
                    },
                },
                y: {
                    stacked: true,
                    grid: {
                        color: "#F2F4F7"
                    },
                    ticks: {
                        stepSize: 50, // Set the spacing between grid lines to 10 units
                        display:false
                      },
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="">
            <Chart type="bar" data={chartData} options={chartOptions} className="w-[630px] h-[200px] " />
        </div>
    )
}
        