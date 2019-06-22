import React, * as react from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TripList from '../trips/TripList'
import carIcon from '../../../images/car_icon.png'

class Profile extends react.Component {
	render() {
		const { auth, profile, trips } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;

		console.table(trips);

		return (
			<div className="container profile">
				<div className="trip-details-top">
					<div className="row">
						<h2>Tu perfil</h2>
						<div className="col s12 l3 main">
							<div className="profile__picture">
								{auth.photoURL
									? (<img src={auth.photoURL} width={200} />)
									: (<span>{profile.initials}</span>)
								}
							</div>
							<div className="profile__buttons">
								{!profile.profileCompleted && <Link to={'/actualiza-perfil'}>Completa Tu Perfil</Link>}
								{profile.profileCompleted && <Link to={'/actualiza-perfil'}>Edita Tu Perfil</Link>}
							</div>
						</div>
						<div className="col s12 l3 info">
							<div className="profile__item">
								<span>Nombre</span>
								{profile.profileCompleted ? (
									<h4>
										{profile.firstName} {profile.lastName}
									</h4>
								) : (
										<h4>
											{auth.firstName} {auth.lastName}
										</h4>
									)}
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
						<div className="col s12 l3">
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
										<span>Telefono de Persona de contacto:</span>
										<p>{profile.emergencyNum}</p>
									</div>


								</div>
							)}
						</div>
						<div className="col s12 l3" />
						<div>
							<img src={carIcon} alt="Car Icon" />
						</div>
						<div className="profile__item">
							<span>Placa:</span>
							<p>{profile.cardPlate}</p>
						</div>
						<div className="profile__item">
							<span>Model:</span>
							<p>{profile.carModel}</p>
						</div>
						<div className="profile__item">
							<span>Marca:</span>
							<p>{profile.carMark}</p>
						</div>
						<div className="profile__item">
							<span>Color:</span>
							<p>{profile.carColor}</p>
						</div>
					</div>
				</div>

				<div className="profile__my-trips">
					<h2>Mis viajes</h2>
				</div>
				<div className="profile_grid main-quad__trips">
					<TripList trips={trips} />
				</div>
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
		{ collection: 'trips', limit: 4, orderBy: ['createdAt', 'desc'] }
	])
)(Profile);
