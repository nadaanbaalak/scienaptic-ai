import { GET_CHART, GET_CHARTS } from "../actions/types";
import charts from "../response.json";

const initialState = {
  chart: null,
  charts: charts,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARTS:
      return {
        ...state,
        charts: payload,
        loading: false,
      };
    case GET_CHART:
      return {
        ...state,
        chart: payload,
        loading: false,
      };
    default:
      return state;
  }
}
