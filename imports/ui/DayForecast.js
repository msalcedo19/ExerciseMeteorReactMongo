import React, { Component } from 'react';
import './DayForecast.css';

export default class DayForecast extends Component {
    render() {
        return (
            <div className="col-sm">
                <img src={this.props.report.img} alt="Icon Weather"></img>
                <p>{this.props.report.dayName}</p>
                <p>{this.props.report.minTemp}</p>
                <p>{this.props.report.maxTemp}</p>
                <p>{this.props.report.status}</p>
            </div>
        );
    }
}
