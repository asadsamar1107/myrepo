import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
Chart.register(Tooltip, Title, ArcElement, Legend);
export default function PieChart()
{
     
  const Nocdata = {
    datasets: [
      {
        data: [10, 20, 30, 15, 33],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        backgroundColor: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        borderColor: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        borderWidth: 0,
        hoverBorderWidth: 4,
        spacing: 0,
        cutout: 38,
      },
    ],
  };
  const Socdata = {
    datasets: [
      {
        data: [10, 20, 30, 15, 33],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        backgroundColor: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        borderColor: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        borderWidth: 0,
        hoverBorderWidth: 4,
        spacing: 0,
        cutout: 38,
      },
    ],
  };
    return(
        <Doughnut
        data={Socdata}
        className="w-[110px] h-[110px]  "
      ></Doughnut>
    )
}