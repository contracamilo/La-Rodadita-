import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadCarPic } from '../../store/actions/profileActions'

class ImageCarUpload extends Component {
    
    state = {
        carfile:null,
        image: null,
        url: ''
    }
    
    handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value
        let val =  value.substring(12, value.length).split('.').shift();
       
        if(e.target.files[0]) {
            let image = e.target.files[0];
            this.setState(() => ({image})) 
        }

        this.setState({
            [e.target.id]: val
        })
    }


    handleUploadCar = (e) => {
        e.preventDefault();
        const {carfile, image} = this.state
        this.props.uploadCarPic(carfile.trim(), image)
    }
    
    
    render() {
        return (
            <div className="profile__input-file"> 
                <p className="adv">Agrega una foto del auto: <span>Debe ser reciente y solo del auto.</span></p>
                <form className="cnt">
                    <div>
                        <label htmlFor="file">Buscar</label>
                        <input id="carfile" name="carfile"  type="file" onChange={this.handleChange}/>
                    </div>    
                    <div>
                        <button className="btn" onClick={this.handleUploadCar}>Subir Foto</button>
                    </div>
                 </form>
                 <div className="name">
                    
                        {
                            (this.state.carfile) && <p> <strong> Archivo:</strong> {this.state.file}</p>
                        }
                       
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        uploadCarPic : (name, pic) => dispatch(uploadCarPic(name, pic))
   }
}


export default connect(mapStateToProps ,mapDispatchToProps)(ImageCarUpload)


