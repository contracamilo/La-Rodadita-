import React, { Component } from "react";
import { connect } from "react-redux";
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
		console.log(change.dateField);
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
		const { dateField } = this.state;
		const { actualDate, dateFieldChange } = this.props;
		const todayDate = actualDate();

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
									<button
										id="btn-search"
										className="btn yellow"
									>
										Buscar
									</button>
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
	{ actualDate, dateFieldChange, selectedDates }
)(SearchLayout);
