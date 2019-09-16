import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteTrip, getComments } from "../../store/actions/TripActions";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import Comment from "../comments/Comment";
import moment from "moment";
import SubmitComments from "../comments/SubmitComments";
import Spinner from "../layout/Spinner";

class TripDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tripKey: this.props.match.params.id
		};
	}

	handleDelete = e => {
		e.preventDefault();
		this.props.deleteTrip(this.props.match.params.id);
		this.props.history.push("/");
	};

	handleScroll = () => {
		window.scrollBy(0, 700);
	};

	render() {
		const { trip, auth, comments } = this.props;
		const key = this.props.match.params.id;

		if (!auth.uid) return <Redirect to="/signin" />;

		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0
		});

		if (trip) {
			return (
				<div className="container section">
					<div className="trip-details-top">
						<h2>Detalles del Viaje</h2>
						<div className="row">
							<div className="col s12 l12">
								<div className="breadcrum">
									<Link to={`/viajes`}>
										{" "}
										<button className="return-btn">
											&lt;
										</button>{" "}
										<span>Volver</span>
									</Link>
									<button
										className="scroll-btn"
										onClick={this.handleScroll}
									>
										{" "}
										<span>Dejar Mensaje</span>
									</button>
								</div>
							</div>
							<div className="col s12 l3">
								<div className="adviser">
									<h4>¿Qué puedes hacer aquí?</h4>
									<p>&#8226; Ver detalles del viaje.</p>
									<p>&#8226; Eliminar o editar viaje.</p>
									<p>&#8226; Ver detalles del viaje.</p>
									<p>
										&#8226; Dejarle un mensaje al creador
										para pactar el viaje.
									</p>
								</div>
							</div>
							<div className="card col s12 l9">
								<div className="card-content row">
									<div className="col s12 l12">
										<h4>{trip.title}</h4>
										<div
											className={`trip-state ${
												trip.activeTrip == "abierto"
													? "green"
													: ""
											} ${
												trip.activeTrip == "cerrado"
													? "red"
													: ""
											}`}
										>
											{trip.activeTrip == true ||
											trip.activeTrip == "abierto" ? (
												<div>
													<b>🚗 Estado del viaje:</b>{" "}
													Activo{" "}
													<span className="green"></span>
												</div>
											) : (
												<div>
													{" "}
													<b>
														🚗 Estado del viaje:
													</b>{" "}
													Cerrado
													<span className="red"></span>
												</div>
											)}
										</div>
									</div>
									<div className="col s12 l6">
										<p>
											<b>Destino:</b> {trip.destiny}
										</p>
										<p>
											<b>Fecha del viaje:</b>{" "}
											{trip.arriveDate}
										</p>
										<p>
											<b>Fecha del viaje:</b>{" "}
											{trip.arriveDate} <b>Hora:</b>{" "}
											{trip.arriveHour}
										</p>
										<p>
											<b>Fecha del regreso:</b>{" "}
											{trip.returnDate} <b>Hora:</b>{" "}
											{trip.returnHour}
										</p>
										<p>
											<b>Punto para la salida:</b>{" "}
											{trip.arrivePoint}
										</p>
										<p>
											<b>Punto para la llegada:</b>{" "}
											{trip.finishPoint}
										</p>
										<p>
											<b>Punto para el retorno:</b>{" "}
											{trip.returnPoint}
										</p>
										<p>
											<b>Tiempo estimado:</b>{" "}
											{trip.travelTime}
										</p>
										<p>
											<b>Asientos Disponibles:</b>{" "}
											{trip.carSits}
										</p>
									</div>
									<div className="col s12 l6">
										<b>Pet Friendly:</b>
										<p>🐶 {trip.petFriendly}</p>
										<b>Detalles:</b>
										<p>{trip.content}</p>
										<b>Breve descripción:</b>
										<p>{trip.description}</p>
										<h4>
											{formatter.format(trip.price)} COP
										</h4>
									</div>
									<div className="col s12 l12">
										<div className="padding-top-24 advice-text">
											<p>
												<b>
													Punto de salida frecuente:
												</b>{" "}
												{trip.commonArrive}
											</p>
										</div>
									</div>
									<div className="col s12 l12">
										{auth.uid === trip.authorId && (
											<div className="card-buttons">
												<button
													className="btn"
													onClick={this.handleDelete}
												>
													Eliminar
												</button>
												<Link
													className="btn"
													to={`/${key}/edit`}
												>
													Editar
												</Link>
											</div>
										)}
									</div>
								</div>
								<div className="card-action grey lighten-4 grey-text">
									<div>
										Publicado {trip.authorFirstName}{" "}
										{trip.authorLastName}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div id="messages" className="comments">
							<h2>Déjale un mensaje al creador del viaje.</h2>
							<div className="col s12 l3">
								<h4>Escribe aquí:</h4>
								<SubmitComments
									tripId={this.props.match.params.id}
									authMail={trip.tripUserMail}
								/>
							</div>
							<div className="col s12 l9">
								<h4>Mensajes:</h4>
								<Comment tripKey={this.state.tripKey} />
							</div>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className="container">
				<Spinner />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const trips = state.firestore.data.trips;
	const trip = trips ? trips[id] : null;
	return {
		trip: trip,
		auth: state.firebase.auth,
		comments: state.firestore.data.comments
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteTrip: uid => dispatch(deleteTrip(uid))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	firestoreConnect([{ collection: "trips" }, { collection: "comments" }])
)(TripDetails);
