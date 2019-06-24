import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { saveComment } from '../../store/actions/TripActions'


class SubmitComments extends Component {
    
    state = {
        uid: '',
        commentBody: ''
    }


    handleChange = (e) => {
        this.setState({
            commentBody: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
            commentBody: this.state.commentBody,
            uid: this.props.tripId
        }
        this.props.saveComment(this.props.tripId, comment)
    }

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
                            >
                            </textarea>
                            <label htmlFor="commentbody"></label>
                        </div>
                        <div className="form-entrie">
                            <button className="btn">Ok!</button>
                        </div>
                </div>
                </form>
            </div> 
        )
    }
}


const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.firebase.auth,
	};
};


export default compose(
	connect(mapStateToProps, {saveComment})
)(SubmitComments);