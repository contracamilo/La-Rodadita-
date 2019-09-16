import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../store/actions/profileActions";
import { Redirect, NavLink } from "react-router-dom";

class CreateProfile extends Component {
	state = {
		firstName: "",
		lastName: "",
		disableButton: true,
		docNumber: "",
		docType: "",
		cellPhone: "",
		activeUser: true,
		blockedUser: false,
		profileCompleted: true,
		howOld: "",
		address: "",
		emergencyNum: "",
		emergencyContact: "",
		cardPlate: "",
		carModel: "",
		carMark: "",
		carColor: "",
		userStars: 5,
		city: "",
		driver: "",
		termsC: "",
		petFriendly: "",
		price: "",
		commonArrive: ""
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.updateProfile(this.state);
		this.props.history.push("/profile");
	};

	handleDriver = e => {
		e.preventDefault();
		this.setState({
			driver: true
		});
	};

	handleTerms = e => {
		this.setState({
			termsC: true,
			disableButton: false
		});
	};

	render() {
		const { auth, profile } = this.props;
		//console.log(this.props.profile.firstName);
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="container">
				<div className="trip-details-top">
					<h2>Actualiza tu perfil.</h2>
					<div className="row">
						<div className="col s12 l3">
							<div className="adviser">
								<h4>¿Qué puedes hacer aquí?</h4>
								<p>
									Es necesario que completes tu perfil para
									que otros viajeros esten confiados para
									viajar contigo.
								</p>
							</div>
						</div>
						<div className="col s12 l9">
							<form
								className="white flex-row"
								onSubmit={this.handleSubmit}
							>
								<input
									type="hidden"
									id="activeUser"
									value="true"
									onSubmit={this.handleChange}
								/>
								<input
									type="hidden"
									id="blockedUser"
									value="false"
									onSubmit={this.handleChange}
								/>
								<input
									type="hidden"
									id="profileCompleted"
									value="true"
									onSubmit={this.handleChange}
								/>
								<input
									type="hidden"
									id="userStars"
									value="5"
									onSubmit={this.handleChange}
								/>

								<div className="first-half">
									{/*<h4><span>Usuario:</span> {profile.firstName} {profile.lastName}</h4>*/}
								</div>
								<div className="second-half"></div>

								<div className="first-half">
									<div className="input-field item number">
										<label htmlFor="firstName">
											Nombre
										</label>
										<input
											id="firstName"
											type="text"
											required
											onChange={this.handleChange}
										/>
									</div>

									<div className="select-field item doc">
										<label htmlFor="docType">
											Tipo de doc.
										</label>
										<select
											id="docType"
											className="browser-default"
											required
											onChange={this.handleChange}
										>
											<option value="" defaultValue>
												Escoge tipo de documento
											</option>
											<option value="CC">CC</option>
											<option value="CE">CE</option>
											<option value="TI">DNI</option>
										</select>
									</div>

									<div className="input-field item number">
										<label htmlFor="docNumber">
											Numero de Documento. *
										</label>
										<input
											id="docNumber"
											type="text"
											required
											onChange={this.handleChange}
										/>
									</div>

									<div className="input-field">
										<input
											id="cellPhone"
											type="text"
											required
											onChange={this.handleChange}
										/>
										<label htmlFor="cellPhone">
											{" "}
											Numero de Celular. *
										</label>
									</div>

									<div className="input-field">
										<input
											id="emergencyContact"
											required
											type="text"
											required
											onChange={this.handleChange}
										/>
										<label htmlFor="emergencyContact">
											Nombre del Contacto para Emergencias
										</label>
									</div>

									<div className="input-field">
										<input
											id="city"
											required
											type="text"
											required
											onChange={this.handleChange}
										/>
										<label htmlFor="city">Ciudad</label>
									</div>
								</div>

								<div className="second-half">
									<div className="input-field item number">
										<label htmlFor="lastName">
											Apellido
										</label>
										<input
											id="lastName"
											type="text"
											required
											onChange={this.handleChange}
										/>
									</div>

									<div className="select-field">
										<label>Eres conductor?</label>
										<select
											id="driver"
											className="browser-default"
											onChange={this.handleDriver}
										>
											<option value="" defaultValue>
												Selecciona Una opción
											</option>
											<option value="driver">
												Soy Conductor
											</option>
											<option value="traveler">
												Soy Viajero
											</option>
										</select>
									</div>

									<div className="input-field">
										<input
											id="howOld"
											type="text"
											onChange={this.handleChange}
										/>
										<label htmlFor="howOld">Edad</label>
									</div>

									<div className="input-field">
										<input
											id="address"
											required
											type="text"
											required
											onChange={this.handleChange}
										/>
										<label htmlFor="address">
											Dirección de residencia
										</label>
									</div>

									<div className="input-field">
										<input
											id="emergencyNum"
											type="text"
											required
											onChange={this.handleChange}
										/>
										<label htmlFor="emergencyNum">
											Numero Telefónico del Contacto
										</label>
									</div>
								</div>
								{this.state.driver && (
									<div className="first-half">
										<h4>Datos de conductor</h4>
									</div>
								)}
								<div className="second-half"></div>

								{this.state.driver && (
									<div className="first-half">
										<div className="input-field">
											<input
												id="cardPlate"
												required
												type="text"
												onChange={this.handleChange}
											/>
											<label htmlFor="cardPlate">
												Placa
											</label>
										</div>

										<div className="input-field">
											<input
												id="carMark"
												type="text"
												required
												onChange={this.handleChange}
											/>
											<label htmlFor="carMark">
												Marca
											</label>
										</div>

										<div className="select-field item doc">
											<label htmlFor="petFriendly">
												Pet Friendly
											</label>
											<select
												id="petFriendly"
												className="browser-default"
												required
												onChange={this.handleChange}
											>
												<option value="" defaultValue>
													Viajas con mascotas
												</option>
												<option value="si">Si</option>
												<option value="no">No</option>
											</select>
										</div>

										<div className="">
											<br />
											<label htmlFor="commonArrive">
												Puntos de Salida Comunes
											</label>
											<textarea
												id="commonArrive"
												placeholder="Salgo siempre de la plaza central..."
												onChange={this.handleChange}
											></textarea>
										</div>
									</div>
								)}

								{this.state.driver && (
									<div className="second-half">
										<div className="input-field">
											<input
												id="carModel"
												type="text"
												required
												onChange={this.handleChange}
											/>
											<label htmlFor="carModel">
												Modelo
											</label>
										</div>

										<div className="input-field">
											<input
												id="carColor"
												type="text"
												required
												onChange={this.handleChange}
											/>
											<label htmlFor="carColor">
												Color
											</label>
										</div>

										<div className="select-field item ">
											<label htmlFor="price">
												Valor cupo entre $25.000 COP y
												$45.000 COP
											</label>
											<input
												id="price"
												placeholder="$25.000...$45.000"
												type="number"
												min="25000"
												max="45000"
												required
												onChange={this.handleChange}
											/>
										</div>
									</div>
								)}

								<div className="first-half">
									<div className="check-field">
										<label htmlFor="termsC">
											<input
												id="termsC"
												type="checkbox"
												onChange={this.handleTerms}
											/>
											<span>
												He leido y acepto{" "}
												<NavLink to="/terminos">
													términos y condiciones
												</NavLink>
											</span>
										</label>
									</div>

									<br />
									<div className="btn-field">
										<button
											className="btn"
											disabled={this.state.disableButton}
										>
											Actualizar Perfil
										</button>
									</div>
								</div>
								<div className="second-half"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateProfile: profile => dispatch(updateProfile(profile))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateProfile);
