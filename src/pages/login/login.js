import React from "react";
import { Link } from "react-router-dom"

import './index.css'

function Login(props) {

    return (
        <div className="container login-container">
            <div className="form-container">
                <h2 className="row form-title">Ingresar</h2>
                <div className="row">
                    <div className="form-group">
                        <label for="name" className="form-label">Nombre</label>
                        <input className="form-control" id="name" type="text" placeholder="Ingresa tu nombre"></input>
                    </div>
                </div>

                <div className="submit-container">
                    <button className="btn btn-success" type="submit">Enviar</button>
                    <div className="signup-link-container">
                        <Link to="/signup">¿Áun no tienes una cuenta?</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login