import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { submitMail } from '../../../store/actions/TripActions'

class FooterForm extends Component {
    state = {
        mail: '',
        active:false
    }


    handleChange = (e) => {
        this.setState({
            mail: e.target.value,
            active:true
        })
    }

    handleSubscriptions = (e) => {
        e.preventDefault();
        const mail = {
            mail: this.state.mail,
        }
        this.props.submitMail(mail);

        this.setState({
            active:false
        })
    }

  
    render() {
    return (
      <div>
            <form id="sing-up-form"  onSubmit={this.handleSubscriptions}>
                <div className="flex-row">
                    <div className="input-field">
                        <input  id="emailFoot" onChange={this.handleChange} type="email" required/>
                        <label  htmlFor="emailFoot"><span>Email</span> </label>
                    </div>
                    
                   
                    <div className="input-field">
                    {(this.state.active) 
                        ? <button className="btn lighten-1">Enviar</button>
                        : <button disabled className="btn lighten-1">Enviar</button>
                    }
                    </div>
                </div>
            </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
	return {
        auth: state.firebase.auth,
    };
};


export default compose(
	connect(mapStateToProps, {submitMail})
)(FooterForm);
