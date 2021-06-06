import React from 'react'

//TODO: Considerar poner algún efecto en las fotos
//TODO: Cambiar orden de fotos según el ancho de página

export const AboutScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 about__header">
                    <h1>¿Quienes somos?</h1>
                        <p>Si no nos conoces déjanos que te contemos nuestra historia.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 about__cols align-self-center order-lg-last">                       
                        <p>El club nace a mediados de la década de los 90 como Club Deportivo Básico, creado por un grupo de personas que compartían su afición por el buceo encabezados por Jose Manuel Boto Fernández, quién sería el primer Presidente de la entidad. El Club se afincó desde el principio en la Villa de Gijón, en cuyo puerto deportivo contaba con una embarcación, el "Orca Uno". Con este motovelero, convertido en lancha, se realizaban salidas a diferentes puntos de la costa gijonesa. Además, de servir como sede del club durante muchos años.</p>
                        <p> En el año 2007, toma el relevo del club "El Playu". Durante su etapa, se consiguen mejorar los medios. En 2009 se traslada la sede del club a la zona de varada de poniente. Esto supone un cambio cualitativo para los socios, al poder contar con unas instalaciones renovadas y totalmente equipadas, haciendo las salidas de buceo mucho más confortables para nuestros socios.</p>
                </div>
                <div className="col-lg-4 about__cols-image order-lg-first">
                    <img className="about__image" src={ './assets/images/orca_uno.jpg' } alt="Imagen del Orca Uno" title="Imagen del Orca Uno"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 about__cols align-self-center order-lg-first">
                    <p> En 2010 se adquirió una nueva lancha semirrígida de 8 metros, para incorporar a la flota del club, la "14 de Marzo". Gracias a esta embarcación las salidas fueron mucho más cómodas al reducir el tiempo de navegación, llegando a realizar hasta 3 salidas en una misma mañana. Otra de las actividades más importantes del club, son los bautismos de buceo, con los que se da a conocer nuestra pasión a los gijoneses, y a los visitantes de nuestra villa en la época estival. Algunos de los cuales dieron el paso y se formaron con nosotros como buceadores. Gracias a disponer de ambas embarcaciones, había días en que se daban hasta 20 bautismos, lo que suponía al cabo del año toda una cifra récord, en los que se podía disfrutar de los fondos del espigón de la Playa de Poniente. Fondos con mucha vida que deleitaban a nuestros "bautizados". Además, se impartían cursos de buceador, y las diferentes especialidades con que cuenta la Federación Española De Actividades Subacuáticas, reconocidas por la CMAS y válidas en cualquier parte del mundo.</p>
                </div>
                <div className="col-lg-4 about__cols-image order-lg-last">
                    <img className="about__image" src="/web-club-orca/assets/images/14_marzo.png" alt="Imagen de la 14 de Marzo" title="Imagen de la 14 de Marzo"></img>
                </div>
            </div>
            <div className="row"> 
                <div className="col-lg about__cols align-self-center">
                    <p> José Dos Anjos sería el siguiente Presidente del club, quien accedió al cargo en el año 2011. Como no podía ser de otra forma, se continuó con la mejora de las instalaciones. Se conseguía un segundo pañol en la zona de varada de Poniente, lo que permitió poder tener más material, una estación de carga de botellas nueva, zona de formación más amplia, en definitiva, todo lo que nuestros socios necesitan.</p>
                    <p>A finales de 2018 se da un paso más, se llega a un acuerdo con el Centro de Formarción Marítima del Principado de Asturias (FORMAR) para trasladarnos a su sede de El Musel. Cuentan con unas instalaciones preparadas para el buceo profesional y su docencia. Gracias a la colaboración entre ambas entidades, seguimos desarrollando tanto bautismos de buceo como cursos de formación. Así como salidas ya no solo a la costa gijonesa, sino también a puntos de otros concejos, abarcando desde el Cabo Peñas hasta la zona de las Piedras Gemelas.</p>
                </div>
            </div>
            <div className="row">
                <dif className="col-lg about__cols-image">
                    <a href="https://www.formarbuceo.com/" target="_blank" rel="noreferrer">
                        <img className="about__image-adjust" src="./assets/images/logo_formar.jpg" alt="Logo de Formar" title="Logo de Formar"></img>
                    </a>
                </dif>
            </div>
            <div className="row">
                <div className="col-lg about__cols">
                    <p>El actual Presidente, Roberto Vázquez Hevia, es elegido en el año 2019. Se continúa con la actividad, buscando cada día cómo mejorar y ofrecer mejores servicios a nuestros socios.</p>
                    <p>Toda nuestra historia no habría sido posible sin los equipos de trabajo con los que contó cada Presidente en sus mandatos. Y como no, sin la imprescindible colaboración de todos nuestros socios. Muchas gracias a todos.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg about__cols">
                    <p>En la actualidad, contamos con más de 90 socios entre nuestras filas, estando la Junta Directiva formada por:</p>
                    <ul>
                        <li><span style={{ fontWeight: 700 }}>Presidente:</span> Roberto Vázquez Hevia</li>
                        <li><span style={{ fontWeight: 700 }}>Vicepresidente:</span> Luis Manuel Bañuelos Vigil</li>
                        <li><span style={{ fontWeight: 700 }}>Secretaria:</span> Amparo Quidiello Fernández</li>
                        <li><span style={{ fontWeight: 700 }}>Tesorero:</span> Iván Chao Ballesteros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}