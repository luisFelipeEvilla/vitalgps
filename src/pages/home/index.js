import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import centers from '../../centers.json' // dataset completo

import logo1 from '../../assets/iconos/centros/1.png'
import logo2 from '../../assets/iconos/centros/2.png'
import logo3 from '../../assets/iconos/centros/3.png'
import logo4 from '../../assets/iconos/centros/4.png'
import logo5 from '../../assets/iconos/centros/5.png'

import './home.css'

function HomeScreen(props) {
    const [filtreredCenters, setFiltreredCenters] = useState(centers)
    const [currentcenters, setCurrentcenters] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [search, setSearch] = useState('');

    const iconos = [ logo1, logo2, logo3, logo4, logo5]

    const [centerOffset, setcenterOffset] = useState(0);
    const centersPerPage = 9;

    const navigate = useNavigate();

    useEffect(() => {
        const endOffset = centerOffset + centersPerPage;
        setCurrentcenters(filtreredCenters.slice(centerOffset, endOffset));
        setPageCount(Math.ceil(filtreredCenters.length / centersPerPage));
    }, [centerOffset, centersPerPage, filtreredCenters])

    useEffect(() => {
        const patron = search.toLowerCase()
        setFiltreredCenters(centers.filter(center => center.razon_social.toLowerCase().includes(patron)))
    }, [search])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * centersPerPage) % centers.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setcenterOffset(newOffset);
    };

    const handleClick = (nit) => {
        navigate(`/center/${nit}`)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="container detail-container">

            <div class="row height d-flex justify-content-center align-centers-center">
                <div class="col-md-6">
                    <div class="form">
                        <i class="bi bi-search"></i>
                        <input onChange={handleSearch} type="text" class="form-control form-input" placeholder="Busca un centro medico por nombre" />
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-container">
                {
                    currentcenters.map(center =>
                        <div key={center.nits_nit} className="col">
                            <div className="card shadow-sm">
                                <img onClick={(e) => handleClick(center.nits_nit)}
                                    src={iconos[center.icono]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{center.razon_social}</h5>
                                    <p className="card-subtitle mb-2 text-muted">Dirección: {center.direccion}</p>
                                    <p className="card-subtitle mb-2 text-muted">Municipio: {center.muni_nombre}</p>
                                    <p className="card-subtitle mb-2 text-muted">Contacto: {center.telefono}</p>
                                    <p className="card-subtitle mb-2 text-muted">Correo: {center.email}</p>
                                    <div className='btn-center'>
                                        <Link className="btn btn-primary" to={'/center/' + center.nits_nit}>Ver más</Link>
                                    </div>
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