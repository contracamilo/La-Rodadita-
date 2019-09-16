import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { saveComment } from "../../store/actions/TripActions";

class SubmitComments extends Component {
	state = {
		uid: "",
		commentBody: "",
		disabledButton: true
	};

	handleChange = e => {
		this.setState({
			commentBody: e.target.value,
			disabledButton: false
		});
	};

	handleSubmit = e => {
		const { tripId, authMail } = this.props;
		e.preventDefault();
		e.stopPropagation();
		const comment = {
			commentBody: this.state.commentBody,
			uid: this.props.tripId
		};
		this.props.saveComment(
			tripId,
			comment,
			authMail,
			this.props.auth.email,
			this.props.auth.displayName
		);
		this.setState({
			uid: "",
			commentBody: "",
			disabledButton: true
		});
	};

	render() {
		return (
			<div className="message-submit">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<div className="form-entrie">
							<textarea
								onChange={this.handleChange}
								value={this.state.commentBody}
								type="text"
								name="commentbody"
								id="commentBody"
								placeholder="Tu mensaje:"
								required
							></textarea>
							<label htmlFor="commentbody"></label>
						</div>
						<div className="form-entrie">
							<button
								className="btn"
								disabled={this.state.disabledButton}
							>
								Ok!
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.firebase.auth
	};
};

export default compose(
	connect(
		mapStateToProps,
		{ saveComment }
	)
)(SubmitComments);
