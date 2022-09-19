import React from 'react'
import { useDispatch } from 'react-redux';


import { siteActiveSite, siteShowModal } from '../../actions/site';


export const SiteGridItem = ( site ) => {

    // Declaramos el dispatch para hacer el dispatch de las actions de la store
    const dispatch = useDispatch()

    // Función que lanzamos al hacer click e ver los datos de la inmersión
    const handleClick = () => {

        // Hacemos el dispatch del site seleccionado
        dispatch( siteActiveSite( site ) );

        // Hacemos el dispath para mostrar el modal
        dispatch( siteShowModal() );

    };

    return (
        <div className="col diving__col">
            <div className="card h-100 diving__card">
                <div className="card-header">
                    <h5 className="card-title">{ site.name }</h5>
                </div>
                {/* <img src="https://res.cloudinary.com/drnoemuze/image/upload/v1613511176/cx2brbnwutmx7rvoar0o.png" className="card-img" alt="Imagen de la inmersión"></img> */}
                <img src={ site.photo } className="card-img" alt="Imagen de la inmersión"></img>
                <div className="card-body">
                    <p className="card-text">{ site.description }</p>
                    <ul>
                        <li>Profundidad: { site.depth } metros</li>
                        <li>Dificultad: { site.dificulty }</li>
                        <li>Nivel: {site.level }</li>
                    </ul>
                </div>
                <div className="card-footer diving__card-footer" onClick={ handleClick }>
                    <p className="card-text text-center"><small className="text-muted">VER DATOS</small></p>
                </div>
            </div>
        </div>
    )
}
