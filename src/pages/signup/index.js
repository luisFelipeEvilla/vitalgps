import React from "react";

import './index.css'

function SignupScreen(props) {
    return (
        <div className="container login-container">
            <div className="form-container">
                <h2 className="row form-title">Ingresar</h2>
                <div className="row">
                    <div className="form-group">
                        <label for="name" className="form-label">Nombre Completo</label>
                        <input className="form-control" id="name" type="text" placeholder="Ingresa tu nombre"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label for="email" className="form-label">Email</label>
                        <input className="form-control" id="email" type="email" placeholder="Ingresa tu email"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label for="email" className="form-label">Contraseña</label>
                        <input className="form-control" id="email" type="password"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label for="email" className="form-label">Fecha de nacimiento</label>
                        <input className="form-control" id="email" type="date" placeholder="Ingresa tu email"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="submit-container">
                        <button className="btn btn-success" type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupScreen;