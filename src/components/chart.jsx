import React, { Component } from "react";
import ZingChart from "zingchart-react";
import PropTypes from "prop-types";
import { getCurrentChart } from "../actions/chartData";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";

class Histogram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: this.props.chart,
      config: {
        type: "bar",
        plot: {
          aspect: "histogram",
        },
        "scale-x": {
          label: {
            text: "Histogram",
          },
          labels: [] /* Scale Labels */,
        },
        series: [
          {
            values: [],
          },
        ],
      },
    };
    this.chart = React.createRef();
  }

  componentDidMount() {
    this.props.getCurrentChart(this.props.location.id);
    const chart = this.props.charts.find(
      (chart) => chart.cid === this.props.location.id
    );
    const label =
      chart.statType === "categorical"
        ? Object.keys(chart.freqCount)
        : Object.keys(chart.graph);
    const val =
      chart.statType === "categorical"
        ? Object.values(chart.freqCount)
        : Object.values(chart.graph);
    this.setState({
      config: {
        type: "bar",
        plot: {
          aspect: "histogram",
        },
        "scale-x": {
          label: {
            text: "Histogram",
          },
          labels: label /* Scale Labels */,
        },
        series: [
          {
            values: val,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="container">
        <ZingChart ref={this.chart} data={this.state.config} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  charts: state.charts,
  loading: state.loading,
});

Histogram.propTypes = {
  getCurrentChart: PropTypes.func.isRequired,
  charts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getCurrentChart })(Histogram);
