import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../../centers.json'
import ReactPaginate from 'react-paginate';

import './home.css'

function HomeScreen(props) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const navigate = useNavigate();

    const handleClick = (nit) => {
        navigate(`/center/${nit}`)
    }

    const index = 0;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-container">
                {
                    currentItems.map(product =>
                        <div key={product.nits_nit} className="col">
                            <div className="card shadow-sm">
                                <img onClick={(e) => handleClick(product.nits_nit)}
                                    src="https://lirp.cdn-website.com/a979b4f7/dms3rep/multi/opt/gente-caminando-sentada-edificio-hospital-exterior-cristal-clinica-ciudad-ilustracion-vector-plano-ayuda-medica-emergencia-arquitectura-concepto-salud_74855-10130-640w.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.razon_social}</h5>
                                    <p className="card-subtitle mb-2 text-muted">Dirección: {product.direccion}</p>
                                    <p className="card-subtitle mb-2 text-muted">Municipio: {product.muni_nombre}</p>
                                    <p className="card-subtitle mb-2 text-muted">Contacto: {product.telefono}</p>
                                    <p className="card-subtitle mb-2 text-muted">Correo: {product.email}</p>
                                    <Link className="btn btn-primary" to={'/center/' + product.nits_nit}>Ver más</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>

            <div className='pagination-container'>
                <ReactPaginate
                    className='pagination'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    activeClassName='page-item active'
                    nextClassName='page-item'
                    previousClassName='page-item'
                    nextLinkClassName='page-link'
                    previousLinkClassName='page-link'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    breakLabel="..."
                    nextLabel="Siguiente"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Anterior"
                    renderOnZeroPageCount={null}
                />
            </div>

        </div>
    )
}
export default HomeScreen;