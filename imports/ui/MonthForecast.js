import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import WeekForecast from "./WeekForecast.js";
import {Forecast} from "../api/forecast";

class MonthForecast extends Component {

    renderWeeks() {
        return this.props.forecast.map((w) => (
            <WeekForecast key={w._id} report={w} />
        ));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center bg-primary">
                    <div className="col-sm">
                        Month Forecast
                    </div>
                </div>
                <div className="row">
                    {this.renderWeeks()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({nombre: "semana"}).fetch(),
    };
})(MonthForecast);
