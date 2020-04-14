import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCharts, getCurrentChart } from "../actions/chartData";

class ChartsTable extends Component {
  state = {
    charts: this.props.charts,
  };

  componentDidMount() {
    this.props.getCharts(this.props.charts);
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Concept Name</th>
                <th>Type</th>
                <th>Unique Values</th>
                <th>Missing Value</th>
              </tr>
            </thead>
            <tbody>
              {this.state.charts.map((chart) => (
                <tr key={chart.cid}>
                  <td>
                    <Link
                      to={{ pathname: `/chart/${chart.cid}`, id: chart.cid }}
                      style={{ color: "black" }}
                    >
                      {chart.conceptName}
                    </Link>
                  </td>
                  <td>{chart.statType}</td>
                  <td>{chart.uniqueCount}</td>
                  <td>{chart.nullCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  charts: state.charts,
});

ChartsTable.propTypes = {
  getCharts: PropTypes.func.isRequired,
  getCurrentChart: PropTypes.func.isRequired,
  charts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getCharts, getCurrentChart })(
  ChartsTable
);
