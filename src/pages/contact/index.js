import React from "react";

import './index.css'

function Contact(props) {

    return (
        <div className="container contact-container">
            <div className="form-container">
                <h2 className="row form-title">Contactanos</h2>
                <div className="row message-form-container">
                    Nos interesa saber tu opinión y que nos ayudes a mejorar, asi que no dudes en contactarte con
                    nosotros en cualquier momento.
                </div>
                <div className="row row-cols-2">
                    <div className="form-group">
                        <label for="name" className="form-label">Nombre</label>
                        <input className="form-control" id="name" type="text" placeholder="Ingresa tu nombre"></input>
                    </div>

                    <div className="form-group">
                        <label for="email" className="form-label">Email</label>
                        <input className="form-control" id="email" type="email" placeholder="Ingresa tu email"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label for="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" placeholder="Ingresa tu mensaje"></textarea>
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

export default Contact