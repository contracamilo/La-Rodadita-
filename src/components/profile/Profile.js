import React, * as react from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TripList from '../trips/TripList'
import carIcon from '../../../images/car_icon.png'

class Profile extends react.Component {
	
	state = {
		userId:''
	}

	componentDidMount(){
		this.setState({
			userId: this.props.auth.uid
		})
	}
	
	render() {
		const { auth, profile, trips } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;

		const personalTrip = trips;
		
		
		const filteredUserTrips = personalTrip.filter(trip => {
			let result = trip.authorId.indexOf(this.state.userId) !== -1;
			return result
		})

		const qTrips = Array.from(filteredUserTrips, ({activeTrip}) => activeTrip);

		
		if(!auth.uid) return <Redirect to='/signin'/>

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
							{profile.profileCompleted && (
								<div>
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
							)}
					</div>
				</div>

				<div className="profile__my-trips">
					<h2>Mis viajes</h2>
				</div>
				<div className="row">
					<div className="col l2 s12">
						<h4>Info:</h4>
						<div className="profile__item">
							<span>Viajes Activos:</span>
							<p>{ qTrips.length }</p>
						</div>	
					</div>
					<div className="col l10 s12">
						<div className="profile__grid main-quad__trips">
							{(trips)
								? <TripList trips={filteredUserTrips} />
								: <p>..loading</p>
							}
						</div>
					</div>
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
		{ collection: 'trips',  orderBy: ['createdAt', 'desc'] }
	])
)(Profile);
