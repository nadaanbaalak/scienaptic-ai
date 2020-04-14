import { GET_CHART, GET_CHARTS } from "./types";
import chartsArray from "../response.json";

export const getCharts = (charts) => {
  return {
    type: GET_CHARTS,
    payload: charts,
  };
};

export const getCurrentChart = (id) => {
  const data = chartsArray.find((chart) => chart.cid === id);
  return {
    type: GET_CHART,
    payload: data,
  };
};
