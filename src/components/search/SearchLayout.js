import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SearchLayout extends Component {

  state = {
    search:''
  }

  handleChange = (e) => {
    console.log('search')
  }

  render() {
    return (
      <div className="main-search">
        <div className="container">
          <div className="row">
                  <div className="col s12 m5 l5">
                      <div className="select-field">
                        <label htmlFor="search-arrive">Fecha de salida</label>
                        <input className="spc" type="date" id='search-arrive' onChange={this.handleChange} />
                      </div>
                    </div> 
                    <div className="col s12 m5 l5">
                      <div className="select-field">
                        <label htmlFor="search-return">Fecha de regreso</label>
                        <input className="spc" type="date" id='search-return' onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col s12 m2 l2">
                      <div className="btn-field">
                        <label htmlFor="search"></label>
                          {/*<button id="btn-search" className="btn" disabled={this.state.disableButton}>Buscar</button>*/}
                          <NavLink to='/viajes' className="btn yellow">Buscar</NavLink>
                      </div>
                    </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchLayout
