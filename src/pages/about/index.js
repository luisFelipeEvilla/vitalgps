import React from 'react'

import './index.css'

function About(props) {
    return (
        <div className='container about-container'>
            <h2 className='row'>Hola, somos Vital GPS</h2>

            <div className='row'>
                <div className='description-container col-md-5'>
                    <p>Nacimos en el 2022 como un proyecto en la Universidad del Norte y nuestro principal objetivo es ayudarte a mejorar tu salud, es por eso que tenemos un directorio con mas de mil
                        centros de salud disponibles con toda su información, de esta manera puedes acudir a tu medico más cercano y
                        estar siempre sano.

                        <br/>
                        <br/>
                        Toda nuestra información es obtenida de la página oficial del gobierno <a href="https://datos.gov.co" target="about_blank">datos.gov.co</a> por ende puedes estar tranquilo ya que todos nuestros datos
                        son confiables
                    </p>

                    <img></img>
                </div>
                <div className="about-image-container col-md-6">
                    <img src="http://papuanews.org/wp-content/uploads/2016/12/Badan-Peduli-Kesehatan-dan-Unit-Pertolongan-Cepat-02-800x445.png" />
                </div>
            </div>

            <div className="links-container row">
                <div className="github-link">
                    <a href="https://github.com/luisFelipeEvilla/vitalgps" target="about_blank">
                        Visita nuestro repositorio en Github <i className="bi bi-github"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default About