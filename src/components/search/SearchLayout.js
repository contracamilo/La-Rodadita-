import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	actualDate,
	dateFieldChange,
	selectedDates
} from "../../store/actions/filterActions";

class SearchLayout extends Component {
	state = {
		firstDate: "",
		lastDate: "",
		dateField: false
	};

	handleFirtsDate = e => {
		const firstDate = e.target.value;
		this.setState({
			firstDate
		});
	};

	handleSecondDate = e => {
		const lastDate = e.target.value;
		this.setState({
			lastDate
		});
	};

	changeType = e => {
		const change = this.props.dateFieldChange();
		this.setState({
			dateField: change.dateField
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { selectedDates } = this.props;
		const { firstDate, lastDate } = this.state;
		return selectedDates(firstDate, lastDate);
	};

	render() {
		const { dateField, firstDate, lastDate } = this.state;
		const { actualDate, dateFieldChange, selectedDates } = this.props;
		const todayDate = actualDate();
		console.log(this.props);
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="main-search">
					<div className="container">
						<div className="row">
							<div className="col s12 m5 l5">
								<div className="select-field">
									<label htmlFor="searchArrive">
										Fecha de salida
									</label>
									<input
										defaultValue={todayDate.actualDate}
										className="spc"
										onFocus={() => this.changeType()}
										type={
											!dateField && todayDate
												? "text"
												: "date"
										}
										id="searchArrive"
										onChange={this.handleFirtsDate}
									/>
								</div>
							</div>
							<div className="col s12 m5 l5">
								<div className="select-field">
									<label htmlFor="searchReturn">
										Fecha de regreso
									</label>
									<input
										className="spc"
										type="date"
										id="searchReturn"
										onChange={this.handleSecondDate}
									/>
								</div>
							</div>
							<div className="col s12 m2 l2">
								<div className="select-field">
									<label htmlFor="btn-search">Buscar</label>
									<NavLink to="/viajes">
										<button
											id="btn-search"
											className="btn yellow"
											onClick={() =>
												selectedDates(
													todayDate.actualDate ||
														firstDate,
													lastDate
												)
											}
										>
											Buscar
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default connect(
	null,
	{ actualDate, dateFieldChange }
)(SearchLayout);
