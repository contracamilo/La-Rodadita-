import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { selectedDates } from "../../store/actions/filterActions";
import { Link, Redirect } from "react-router-dom";
import TripList from "../trips/TripList";
import SearchResults from "./SearchResults";
import Spinner from "../layout/Spinner";
import ReactPaginate from "react-paginate";

class SearchList extends Component {
	state = {
		search: "",
		searchValue: "",
		tripType: "",
		destiny: "",
		offset: 0,
		firstDate: "",
		lastDate: "",
		all: true
	};

	componentDidMount() {
		this.setState({
			firstDate: window.localStorage.getItem("first date"),
			lastDate: window.localStorage.getItem("last date")
		});
	}

	handlePageClick = data => {
		let selected = data.selected;
		let offset = Math.ceil(selected * this.props.perPage);

		this.setState({ offset: offset }, () => {
			this.props.trips;
		});
	};

	renderTrip = trip => {
		return (
			<div key={trip.id} className="main-quad__trips">
				<SearchResults trip={trip} />
			</div>
		);
	};

	handleChange = e => {
		this.setState({
			searchValue: e.target.value,
			all: false
		});
	};

	handleChangeType = e => {
		this.setState({
			tripType: e.target.value,
			all: false
		});
	};

	handleChangeDestiny = e => {
		this.setState({
			destiny: e.target.value,
			all: false
		});
	};

	componentWillUnmount() {
		window.localStorage.removeItem("first date", `${firstDate}`);
		window.localStorage.removeItem("last date", `${lastDate}`);
	}

	render() {
		const { trips = [], auth } = this.props;
		const {
			searchValue,
			tripType,
			destiny,
			all,
			firstDate,
			lastDate
		} = this.state;

		const pushedTrips = [];

		const filteredTrip = trips.filter(trip => {
			if (searchValue || firstDate)
				return trip.arriveDate.indexOf(searchValue || firstDate) !== -1;
			if (tripType) return trip.tripType.indexOf(tripType) !== -1;
			if (tripType) return trip.destiny.indexOf(destiny) !== -1;
		});

		const concatTrips = pushedTrips.concat(filteredTrip);

		if (!auth.uid) return <Redirect to="/signin" />;

		console.log("damm", this.state);
		return (
			<div>
				<div id="trip-main" className="container">
					<div className="main-quad trip-details-top">
						<div className="row">
							<h2>VIAJES</h2>
							<div className="project-list section">
								<div className="row">
									<div className="col s12 l3">
										<div className="adviser">
											<h4>¿Qué puedes hacer aquí?</h4>
											<p>
												Encuentra el viaje que se ajuste
												a tu agenda.
											</p>
										</div>
									</div>

									<div className="col s12 m3 l3">
										<div className="select-field">
											<label htmlFor="search">
												Fecha
											</label>
											<input
												type="date"
												id="search"
												onChange={this.handleChange}
												value={searchValue || firstDate}
											/>
										</div>
									</div>

									<div className="col s12 m3 l3">
										<div className="select-field">
											<label>Ida y/o Vuelta</label>
											<select
												id="tripType"
												className="browser-default"
												onChange={this.handleChangeType}
											>
												<option value="" defaultValue>
													Selecciona una opción
												</option>
												<option value="ida-vuelta">
													Ida y Vuelta
												</option>
												<option value="solo">
													Solo ida
												</option>
											</select>
										</div>
									</div>

									<div className="col s12 m3 l3">
										<div className="select-field">
											<label>Destino</label>
											<select
												id="tripDestiny"
												className="browser-default"
												onChange={
													this.handleChangeDestiny
												}
											>
												<option value="" defaultValue>
													Selecciona una opción
												</option>
												<option value="bogota">
													Bogotá
												</option>
												<option value="neiva">
													Neiva
												</option>
											</select>
										</div>
									</div>

									<div className="col s12 l9">
										<p>
											Selecciona los campos para filtrar
											tu búsqueda.
										</p>
										<div>
											{concatTrips ? (
												concatTrips.map(trip => {
													return this.renderTrip(
														trip
													);
												})
											) : (
												<Spinner />
											)}
											{trips ? (
												trips &&
												all &&
												trips.map(trip => {
													return this.renderTrip(
														trip
													);
												})
											) : (
												<Spinner />
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		trips: state.firestore.ordered.trips,
		auth: state.firebase.auth,
		dates: selectedDates
	};
};

export default compose(
	connect(
		mapStateToProps,
		{ selectedDates }
	),
	firestoreConnect([{ collection: "trips", orderBy: ["createdAt", "desc"] }])
)(SearchList);
