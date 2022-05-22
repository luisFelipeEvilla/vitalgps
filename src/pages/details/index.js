import React from 'react';
import { useParams } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'
import products from '../../centers.json'

import './details.css'

import logo1 from '../../assets/iconos/centros/1.png'
import logo2 from '../../assets/iconos/centros/2.png'
import logo3 from '../../assets/iconos/centros/3.png'
import logo4 from '../../assets/iconos/centros/4.png'
import logo5 from '../../assets/iconos/centros/5.png'

function DetailsScreen(props) {
    const { nit } = useParams()

    const iconos = [logo1, logo2, logo3, logo4, logo5]

    const product = products.find(product => product.nits_nit == nit)
    return (
        <div className="container details-container">
            <div className="row">
                <div className="col-md-5">
                    <div className="project-info-box ">
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
                    <img src={iconos[product.icono]} alt="center" className="rounded details-image" />
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