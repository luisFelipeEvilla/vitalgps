import React from 'react';
import { useParams } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'
import products from '../../centers.json'

import './details.css'

function DetailsScreen(props) {
    const { nit } = useParams()

    const product = products.find(product => product.nits_nit == nit)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="project-info-box mt-0">
                        <h5>{product.razon_social}</h5>
                        <p className="mb-0"></p>
                    </div>

                    <div className="project-info-box">
                        <p><b>Departamento:</b>{product.depa_nombre}</p>
                        <p><b>Municipio:</b>{product.muni_nombre}</p>
                        <p><b>Dirección:</b>{product.direccion}</p>
                        <p><b>Nivel:</b>{product.nivel}</p>
                        <p><b>Número de contacto:</b>{product.telefono}</p>
                        <p><b>email:</b>{product.email}</p>
                    </div>

                    <div className="project-info-box mt-0 mb-0">
                        <p className="mb-0">
                            La información contenida puede no ser la más actualizada
                        </p>
                    </div>
                </div>

                <div className="col-md-7">
                    <img src="https://lirp.cdn-website.com/a979b4f7/dms3rep/multi/opt/gente-caminando-sentada-edificio-hospital-exterior-cristal-clinica-ciudad-ilustracion-vector-plano-ayuda-medica-emergencia-arquitectura-concepto-salud_74855-10130-640w.jpg" alt="center" className="rounded" />
                    <div className="project-info-box">
                        <p><b>Tipo de Institución:</b> {product.naju_nombre}</p>
                        <p><b>Caracter</b> {product.caracter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsScreen;