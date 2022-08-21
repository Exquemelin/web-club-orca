import React from 'react'

//TODO: Cambiar imágenes por las buenas
//TODO: Considerar hacer un mapeo de los cursos

export const LearningScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg learning__header">
                    <h1>Cursos y Especialidades</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg learning__cols align-self-centert">                       
                    <p>Los cursos que organiza el Club Orca bajo el amparo de la Federación de Actividades Subacuáticas del Principado de Asturias <a href="http://faspa.org" target="_blank"  rel="noreferrer">(FASPA)</a>, cuentan con la acreditación de la Federación Española de Actividades Subacuáticas <a href="http://www.fedas.es" target="_blank"  rel="noreferrer">(FEDAS)</a>, organismo oficial creado en 1967, y la Confederación Mundial de Actividades Subacuáticas <a href="http://www.cmas.org/" target="_blank"  rel="noreferrer">(CMAS)</a>, organismo internacional creado en 1959. Todas las titulaciones tienen reconocimiento internacional, y son válidas para bucear en cualquier parte del mundo.</p>
                    <p>Los cursos se organizan regularmente durante todo el año, aunque es en verano cuando más frecuencia hay. Estos son impartidos por el Centro de Formación Marítima del Principado de Asturias <a href="http://www.formarbuceo.com/" target="_blank"  rel="noreferrer">(FORMAR)</a>, y se pueden realizar por semana o intensivos de fin de semana. Va en función de la disponibilidad del alumnado.</p>
                    <p>Normalmente los cursos se realizan con un mínimo de 5 personas y son anunciados a través de nuestra <a href="/app">APP</a> para móviles Android e IOS. Si sois un grupo de al menos 5 personas, y no os coincide bien alguna de las fechas propuestas, podéis poneros en contacto con nostros y podemos acordar una fecha que os venga bien.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg learning__cols align-self-center">
                    <h2>Bautismo de Buceo</h2>
                    <p>La mejor forma de tener un primer contacto con el medio subacuático es realizar un bautismo de buceo. Consiste en una pequeña actividad de una duración aproximada de 2 horas, formada por una parte teórica y una práctica. En la teoría, realizada en el aula, se explica el equipo que se va a utilizar y su correcta colocación, así como las principales técnicas de buceo más imprescindibles. La práctica se realiza con una inmersión en el mar, en la lámina de agua que hay junto a las instalaciones de FORMAR, acompañados por nuestro equipo de instructores quienes enseñarán el fondo y la vida marina que en ellos se encuentran.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg learning__cols align-self-center">
                    <h2>Cursos de Buceador</h2>
                </div>
            </div>
            <div className="row learning__rows"> 
                <div className="card mb-3 learning__card">
                    <div className="row g-0">
                        {/* <div className="col-md-4 learning__cols-image">
                            <img className="learning__image" src="./assets/images/formar_uno.jpg" alt="" />
                        </div> */}
                        <div className="col-md learning__card-cols">
                            <div className="card-header learning__card-header">
                                <h5 className="card-title">FEDAS Buceador Junior</h5>
                            </div>
                            <div className="card-body learning__card-body">
                                <img className="learning__image learning__image-test" src="./assets/images/formacion_bje.jpg" alt="" />
                                <p className="card-text">Formación destinada para los menores de edad. La edad mínima para realizar este curso es de 12 años. Además, se deberá estar en posesión de la licencia federativa y pasar un reconocimiento médico.</p>
                                <p>En función de la edad, y según el Real Decreto 550/2020, de 2 de Junio de 2020, se podrá bucear entre profundidades máximas de 6 a 40 metros.</p>
                                <p className="card-text"><small className="text-muted">NOTA: La edad mínima, y la profundidad máxima, se ajustarán a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row learning__rows"> 
                <div className="card mb-3 learning__card">
                    <div className="row g-0">
                        {/* <div className="col-md-4 learning__cols-image">
                            <img className="learning__image" src="./assets/images/formar_uno.jpg" alt="" />
                        </div> */}
                        <div className="col-md learning__card-cols">
                            <div className="card-header learning__card-header">
                                <h5 className="card-title">FEDAS Buceador 1 Estrella - CMAS 1 Star Diver</h5>
                            </div>
                            <div className="card-body learning__card-body">
                                <img className="learning__image learning__image-test" src="./assets/images/formacion_b1e.jpg" alt="" />
                                <p className="card-text">Este es el primer paso para convertirse en buceador recreativo o deportivo. La edad mínima para realizar este curso es de 14 años. Además, se deberá estar en posesión de la licencia federativa y pasar un reconocimiento médico.</p>
                                <p>Con esta titulación se puede realizar inmersiones hasta 20 metros de profundidad, y tras 20 inmersiones registradas hasta los 25 metros.</p>
                                <p className="card-text"><small className="text-muted">NOTA: La edad mínima, y la profundidad máxima, se ajustarán a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row learning__rows"> 
                <div className="card mb-3 learning__card">
                    <div className="row g-0">
                        {/* <div className="col-md-4 learning__cols-image">
                            <img className="learning__image" src="./assets/images/formar_uno.jpg" alt="" />
                        </div> */}
                        <div className="col-md learning__card-cols">
                            <div className="card-header learning__card-header">
                                <h5 className="card-title">FEDAS Buceador 2 Estrellas - CMAS 2 Star Diver</h5>
                            </div>
                            <div className="card-body learning__card-body">
                                <img className="learning__image learning__image-test" src="./assets/images/formacion_b2e.jpg" alt="" />
                                <p className="card-text">Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella, o equivalente, tener registradas 20 inmersiones con esta titulación, y tener la especialidad de Soporte Vital Básico. La edad mínima para realizar este curso es de 15 años. Además, se deberá estar en posesión de la licencia federativa y tener el reconocimiento médico en vigor.</p>
                                <p>Con esta titulación se puede realizar inmersiones hasta 40 metros de profundidad pudiendo entrar en descompresión</p>
                                <p className="card-text"><small className="text-muted">NOTA: La edad mínima, y la profundidad máxima, se ajustarán a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row learning__rows"> 
                <div className="card mb-3 learning__card">
                    <div className="row g-0">
                        <div className="col-md learning__card-cols">
                        {/* <div className="col-md-4 learning__cols-image">
                            <img className="learning__image" src="./assets/images/formar_uno.jpg" alt="" />
                        </div> */}
                            <div className="card-header learning__card-header">
                                <h5 className="card-title">FEDAS Buceador 3 Estrellas - CMAS 3 Star Diver</h5>
                            </div>
                            <div className="card-body learning__card-body">
                                {/* <img className="learning__image learning__image-test" src="./assets/images/formar_uno.jpg" alt="" /> */}
                                <img className="learning__image learning__image-test" src="./assets/images/formacion_b3e.jpg" alt="" />
                                <p className="card-text">Para acceder a este curso hay que estar en posesión del título de Buceador de 2 Estrellas, o equivalente, tener registradas 50 inmersiones con esta titulación, y tener la especialidad de Administración de Oxígeno. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa y tener el reconocimiento médico en vigor.</p>
                                <p>Con esta titulación se puede realizar inmersiones hasta la profundidad que la mezcla de gases le permita, puendiendo entrar en descompresión. A pesar de esto, se recomienda no superar la profundidad de 40 metros.</p>
                                <p>Se podrán organizar, dirigir, planificar y organizar inmersiones con descompresión, así como colaborar como buceador de seguridad en los cursos de buceo FEDAS.</p>
                                <p className="card-text"><small className="text-muted">NOTA: La edad mínima, y la profundidad máxima, se ajustarán a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg learning__cols align-self-center">
                    <h2>Especialidades de Buceo</h2>
                </div>
            </div>
            <div className="row learning__rows-spec"> 
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Soporte Vital Básico</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar maniobras de Soporte Vital Básico y Reanimación Cardiopulmonar en accidentes específicos de buceo deportivo. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella. La edad mínima para realizar este curso es de 14 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Administración de Oxígeno</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar maniobras de Soporte Vital Básico y Reanimación Cardiopulmonar en accidentes específicos de buceo deportivo mediante la administración de Oxígeno Normobárico. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Navegación Subacuática</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar la técnicas de navegación subacuática, búsqueda y localizadión mediante el uso de los elementos necesarios para este fin en función de las características de la inmersión. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella, y tener registradas 10 inmersiones. La edad mínima para realizar este curso es de 14 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Buceo Nocturno</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas de buceo de noche o en zonas de muy poca visibilidad con los medios necesarios para tal fin. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella, y tener registradas 10 inmersiones. La edad mínima para realizar este curso es de 14 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Buceo con Traje Seco</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas de buceo mediante el sudo de un traje seco y los protocolos de actuación en caso de posibles incidentes. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella. La edad mínima para realizar este curso es de 14 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Buceo con Nitrox - CMAS Nitrox Diver</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas de buceo y protocolos de seguridad en inmersiones realizadas con mezclas de aire enriquecido en oxígeno, con un porcentage no superior al 40% de oxígeno. Para acceder a este curso hay que estar en posesión del título de Buceador de 1 Estrella, y tener registradas 10 inmersiones. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Buceo en Pecios</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas de buceo y protocolos de seguridad en inmersiones realizadas en pecios y restos sumergidos sin penetrar en su interior. Para acceder a este curso hay que estar en posesión del título de Buceador de 2 Estrellas. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Salvamento y Rescate</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas de salvamento y rescate de un accidentado durante una inmersión realizando su ascenso a superficie, traslado e izado a la embarcación, poniendo en marcha los protocolos de emergencia y, si fuera necesario, el plan de evacuación. Para acceder a este curso hay que estar en posesión del título de Buceador de 2 Estrellas. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 learning__cols-spec">
                    <div className="card mb-3 learning__card-spec">
                        <div className="card-header learning__card-header-spec">
                            <h5 className="card-title">Buceo en Cuevas - CMAS Cave Diver I</h5>
                        </div>
                        <div className="card-body learning__card-body">
                            <p className="card-text">Permite aplicar las técnicas y protocolos de seguridad en inmersiones realizadas en grutas sin dificultad en las que nunca perdemos de vista la entrada de las mismas. Para acceder a este curso hay que estar en posesión del título de Buceador de 2 Estrellas. La edad mínima para realizar este curso es de 16 años. Además, se deberá estar en posesión de la licencia federativa.</p>
                            <p className="card-text"><small className="text-muted">NOTA: La edad mínima se ajustará a la legislación vigente del Estado o de la Comunidad Autónoma.</small></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
