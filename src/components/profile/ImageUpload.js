import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadPic } from '../../store/actions/profileActions'

class ImageUpload extends Component {
    
    state = {
        file:null,
        image: null,
        url: ''
    }
    
    handleChange = (e) => {

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


    handleUpload = (e) => {
        e.preventDefault();
        const {file, image} = this.state
        this.props.uploadPic(file.trim(), image)
    }
    
    
    render() {
        return (
            <div className="profile__input-file"> 
                <p className="adv">Agrega tu foto: <span>Debe ser una foto de tu cara.</span></p>
                <form className="cnt">
                    <div>
                        <label htmlFor="file">Buscar</label>
                        <input id="file" name="file"  type="file" onChange={this.handleChange}/>
                    </div>    
                    <div>
                        <button className="btn" onClick={this.handleUpload}>Subir Foto</button>
                    </div>
                 </form>
                 <div className="name">
                    
                        {
                            (this.state.file) && <p> <strong> Archivo:</strong> {this.state.file}</p>
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
        uploadPic : (name, pic) => dispatch(uploadPic(name, pic))
   }
}


export default connect(mapStateToProps ,mapDispatchToProps)(ImageUpload)


