import React, { Component } from 'react'

export default class FooterForm extends Component {
  
  
  
  
    render() {
    return (
      <div>
            <form id="sing-up-form"  onSubmit={this.handleTerms}>
                <div className="flex-row">
                    <div className="input-field">
                        <input  id="emailFoot" type="email" required/>
                        <label  htmlFor="emailFoot"><span>Email</span> </label>
                    </div>
                    
                   
                    <div className="input-field">
                        <button className="btn lighten-1">Enviar</button>
                    </div>
                </div>
            </form>
      </div>
    )
  }
}
