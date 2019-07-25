import React, * as react from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TripList from '../trips/TripList'
import carIcon from '../../../images/car_icon.png'
import ImageUpload from './ImageUpload';
import ImageCarUpload from './ImageCarUpload';
import Spinner from '../layout/Spinner';

class Profile extends react.Component {

	state = {
		userId: ''
	}

	componentDidMount() {
		this.setState({
			userId: this.props.auth.uid
		})
	}

	render() {
		const { auth, profile, trips } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;

		let personalTrip = (trips) ? trips : [''];

		const filteredUserTrips = personalTrip.filter(trip => (trip.authorId) && trip.authorId.indexOf(this.state.userId) !== -1);

		const qTrips = Array.from(filteredUserTrips, ({ activeTrip }) => activeTrip);

		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0
		})


		if (!auth.uid) return <Redirect to='/signin' />

		return (
			<div className="container profile">
				<div className="trip-details-top">
					<div className="row">
						<h2>Tu perfil</h2>
						{!profile.profileCompleted && (
							<h5 className="center">Te invitamos a completar <Link to={'/actualiza-perfil'}>aquí</Link>  tu perfil para disfrutar La Rodadita al 100%.</h5>
						)}

						<div className="col s12 l3 main">
							<div className="profile__picture">

								{
									(!profile.picture)
										? <div className="mn">
											{auth.photoURL
												? (<img src={auth.photoURL} width={200} />)
												: (<span>{profile.initials}</span>)
											}
										</div>

										: <img src={profile.picture} width={200} />
								}



							</div>
							<div className="profile__buttons">
								{!profile.profileCompleted && <Link to={'/actualiza-perfil'}>Completa Tu Perfil</Link>}
								{profile.profileCompleted && <Link to={'/actualiza-perfil'}>Edita Tu Perfil</Link>}
							</div>
							<div className="profile__buttons">
								<ImageUpload />
								{' '}
								{(profile.picture) && <div className="profile__item center"><span> Puedes Cambiarla</span></div>}
							</div>
						</div>
						<div className="col s12 l5 info">
							<div className="profile__item">
								<span>Nombre</span>
								<h4>
									{profile.firstName} {profile.lastName}
								</h4>
							</div>

							<div className="profile__item">
								<span>Correo Electrónico:</span>
								<p>{auth.email}</p>
							</div>

							{profile.profileCompleted && (
								<div>

									<div className="profile__item">
										<span>Edad:</span>
										<p>{profile.howOld}</p>
									</div>

									<div className="profile__item double">
										<div>
											<span>Estado:</span>
											<p>
												{profile.activeUser && (<strong className="green">Activo</strong>)}
												Activ@
											</p>
										</div>
										<div className="stars">
											<span>Calificación:</span>
											<p>{profile.userStars}</p>
										</div>
									</div>
								</div>
							)}
						</div>

						<div className="col s12 l4">
							{profile.profileCompleted && (
								<div>
									<div className="profile__item">
										<span>Celular:</span>
										<p>{profile.cellPhone}</p>
									</div>

									<div className="profile__item">
										<span>Dirección:</span>
										<p>{profile.address}</p>
									</div>

									<div className="profile__item">
										<span>Ciudad:</span>
										<p>{profile.city}</p>
									</div>

									<div className="profile__item">
										<span>Contacto en caso de emergencia:</span>
										<p>{profile.emergencyContact}</p>
									</div>

									<div className="profile__item">
										<span>Teléfono de Persona de contacto:</span>
										<p>{profile.emergencyNum}</p>
									</div>


								</div>
							)}
						</div>
					</div>
					<div className="clearfix"></div>


					<div className="row car-section">
						<div className="col s12 l12" />
						{(profile.driver && profile.driver !== '') && (
							<div>
								<div className="col s12 l3">

									<div className="profile__picture">

										{
											(!profile.carPicture)
												? <div className="mn">
													{auth.photoURL
														? (<img src={auth.photoURL} width={200} />)
														: (<img className="crc" src={carIcon} alt="Car Icon" />)
													}
												</div>

												: <img src={profile.carPicture} width={200} />
										}



									</div>
									<div className="profile__buttons">
										<ImageCarUpload />
										{(profile.carPicture) && <div className="profile__item center"><span> Puedes Cambiarla</span></div>}
									</div>

								</div>
								<div className="col s12 l9">
									<p className="adv"> <span>Información del carro:</span></p>
									<div className="flex-row car-items">
										<div className="profile__item">
											<span>Placa:</span>
											<h4>{profile.cardPlate}</h4>
										</div>
										<div className="profile__item">
											<span>Model:</span>
											<h4>{profile.carModel}</h4>
										</div>
										<div className="profile__item">
											<span>Marca:</span>
											<h4>{profile.carMark}</h4>
										</div>
										<div className="profile__item">
											<span>Color:</span>
											<h4>{profile.carColor}</h4>
										</div>
									</div>

									<div>
										<div className="profile__item">
											<span>Pet Friendly:</span>
											<p>{profile.petFriendly}</p>
										</div>
										<div className="profile__item">
											<span>Tarifa General:</span>
											<p>{formatter.format(profile.price)} COP</p>
										</div>
										<div className="profile__item">
											<span>Puntos de Salida Comunes</span>
											<p>{profile.commonArrive}</p>
										</div>
									</div>

								</div>
							</div>
						)}
					</div>
				</div>

				{ (profile.driver && profile.driver !== '') && (
					<react.Fragment>
						<div className="profile__my-trips">
							<h2>Mis viajes</h2>
						</div>
						<div className="row">
							<div className="col l2 s12">
								<h4>Info:</h4>
								<div className="profile__item">
									<span>Viajes:</span>
									<p>{qTrips.length}</p>
								</div>
							</div>
							<div className="col l10 s12">
								<div className="profile__grid main-quad__trips">
									{(trips)
										? <TripList trips={filteredUserTrips} />
										: <Spinner />
									}
								</div>
							</div>
						</div>
					</react.Fragment>
				)}


			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
		trips: state.firestore.ordered.trips
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'users' },
		{ collection: 'trips', orderBy: ['createdAt', 'desc'] }
	])
)(Profile);
