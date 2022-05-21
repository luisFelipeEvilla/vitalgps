import React from 'react';
// import { Link } from 'react-router-dom';
import products from '../centers.json'

import './home.css'

function HomeScreen(props) {
    return (
        <div className="container">
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    products.map(product =>
                        <div key={product.nits_nit} className="col">
                            <div className="card shadow-sm">
                                <img src="https://lirp.cdn-website.com/a979b4f7/dms3rep/multi/opt/gente-caminando-sentada-edificio-hospital-exterior-cristal-clinica-ciudad-ilustracion-vector-plano-ayuda-medica-emergencia-arquitectura-concepto-salud_74855-10130-640w.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.razon_social}</h5>
                                    <p className="card-subtitle mb-2 text-muted">Dirección: {product.direccion}</p>
                                    <p className="card-subtitle mb-2 text-muted">Municipio: {product.muni_nombre}</p>
                                    <p className="card-subtitle mb-2 text-muted">Contacto: {product.telefono}</p>
                                    <p className="card-subtitle mb-2 text-muted">Correo: {product.email}</p>
                                    <a className="btn btn-primary ">Ver más</a>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
export default HomeScreen;