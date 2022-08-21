import React from 'react'
import { useHistory } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'


export const HomeScreen = () => {

    // Declaramos una variable para usar la navegación
    const history = useHistory();

    // Función para cambiar de página
    const handleClick = () => {

        // Reemplazamos la ruta que nos entra como parámetro de la función
        window.scrollTo(0, 0);
        history.replace( '/learning' );

    }

    return (
        <div className="container">

            <div className="col-lg-12">
                <img className="home__image-orca" src={ './assets/images/orca_uno_home.png' } alt="Imagen del Orca Uno" title="Imagen del Orca Uno"></img>
            </div>
        
            <div className='col-lg-12'>
                <div className='row home__info'>
                    <div className='col-md-1 home__info-icon'>
                        <FontAwesomeIcon icon={faInfo} size="4x"/>
                    </div>
                    <div className="col-md-11 home__cols">                       
                            <p>El club nace como Club Deportivo Básico a mediados de la década de los 90, estableciéndose en la Villa de Gijón. Su seña de identidad fue el motovelero Orca Uno, que hacía las veces de sede del club, y lancha para las actividades. El cometido es acercar el mundo de buceo a todas las personas, a través de bautismos, o formando nuevos buceadores. También se realizan excursiones a diversos puntos de la costa cercana a la bahía de Gijón.</p>
                    </div>
                </div>
            </div>
            <div className='home__formacion'>
                <h1>Fórmate con nosotros</h1>
            </div>
            <div className='row home__row-formacion'>
                <div className='col-md-6 col-lg-3 home__cols-formacion'>
                    <img className="home__image-formacion" onClick={ handleClick } src={ './assets/images/home_formacion_bje.png' } alt="Bautismos" title="Bautismos"></img>
                    <p className='home__row-text'>BAUTISMOS</p>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-formacion'>
                    <img className="home__image-formacion" onClick={ handleClick } src={ './assets/images/home_formacion_guia.png' } alt="Formación Guía" title="Formación Guía"></img>
                    <p className='home__row-text'>CURSOS DE BUCEO</p>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-formacion'>
                    <img className="home__image-formacion" onClick={ handleClick } src={ './assets/images/home_formacion_b1e.png' } alt="Formación Buceador" title="Formación Buceador"></img>
                    <p className='home__row-text'>ESPECIALIDADES</p>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-formacion'>
                    <img className="home__image-formacion" onClick={ handleClick } src={ './assets/images/home_formacion_especialidad.png' } alt="Formación Especialidades" title="Formación Especialidades"></img>
                    <p className='home__row-text'>CURSO DE GUÍA</p>
                </div>
            </div>
            <div className='home__actividades'>
                <h1>Salidas de Buceo</h1>
            </div>
            <div className="col-12 home__cols-actividades">                       
                <p>En colaboración con la empresa <a href="https://www.formarbuceo.com/" target="_blank" rel="noreferrer">Fomar</a> realizamos salidas de buceo por las costas cercanas a la bahía de Gijón. Llegando hasta el Cabo Peñas al oeste, y hasta la Playa España al Este. Se programan salidas de buceo todos los fines de semana que la mar lo permite.</p>
                <p>Conoce los fondos marinos de nuestra mano. Disfruta de la flora y fauna que nos brinda el Mar Cantábrico.</p>
            </div>
            <div className='row home__row-actividades'>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/01_red.jpg' } alt="01_red" title="01_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/02_red.jpg' } alt="02_red" title="02_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/03_red.jpg' } alt="03_red" title="03_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/04_red.jpg' } alt="04_red" title="04_red"></img>
                </div>
                
            </div>
            <div className='row home__row-actividades'>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/05_red.jpg' } alt="05_red" title="05_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/06_red.jpg' } alt="06_red" title="06_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/07_red.jpg' } alt="07_red" title="07_red"></img>
                </div>
                <div className='col-md-6 col-lg-3 home__cols-actividades-images'>
                    <img className="home__image-formacion" src={ './assets/galery/galeria_home/08_red.jpg' } alt="08_red" title="08_red"></img>
                </div>
                
            </div>
        </div>
    )

}
