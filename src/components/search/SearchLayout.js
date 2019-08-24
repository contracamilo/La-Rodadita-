import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendDate, handleChange } from '../../store/actions/searchActions'

class SearchLayout extends Component {

  state = {
    searchArrive: '',
    searchReturn: '',
    disableButton: false
  }

  handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const { searchArrive, searchReturn } = this.state;
    const url = `#/viajes?${searchArrive}&${searchReturn}`;
    e.preventDefault();
    e.stopPropagation();
    this.props.sendDate(searchArrive, searchReturn);
    window.location.href = `${url}`;
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main-search">
          <div className="container">
            <div className="row">
              <div className="col s12 m5 l5">
                <div className="select-field">
                  <label htmlFor="searchArrive">Fecha de salida</label>
                  <input className="spc" type="date" id='searchArrive' onChange={this.handleChange} />
                </div>
              </div>
              <div className="col s12 m5 l5">
                <div className="select-field">
                  <label htmlFor="searchReturn">Fecha de regreso</label>
                  <input className="spc" type="date" id='searchReturn' onChange={this.handleChange} />
                </div>
              </div>
              <div className="col s12 m2 l2">
                <div className="select-field">
                  <label htmlFor="btn-search">Buscar</label>
                  <button id="btn-search" className="btn yellow" disabled={this.state.disableButton}>Buscar</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendDate: (a, r) => dispatch(sendDate(a, r))
  }

}
export default connect(null, mapDispatchToProps)(SearchLayout) 
