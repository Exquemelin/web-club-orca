import React from 'react'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

//TODO: Hacer que se cierre el toggler cuando se seleccione algo
//TODO: Revisar posibles problemas al anidar dos anclas NavDropdown.Item y NavLink

export const NavbarSite = () => {

    return (
    
        // TODO: Cambiar el Brand por el logo del club
        <Navbar className="navbar__navbar" expand="md" sticky="top">
                {/* <div className='col-1'> */}
                <Navbar.Brand href="/">
                    <img className="navbar__logo" src="./assets/icons/club_orca.png" alt="Logo Club Orca" name="Logo Club Orca"></img>
                </Navbar.Brand>
                {/* </div>
                <div className='col-11 navbar__landing'> */}
                <div className='navbar__navbar__links'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar__navbar__links">
                {/* <div className='container navbar__navbar__links'> */}
                        <NavDropdown title="CLUB" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink
                                    activeClassName="navbar__active"
                                    className="navbar__link"
                                    exact
                                    to="/about"
                                >
                                    SOBRE NOSOTROS
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink
                                    activeClassName="navbar__active"
                                    className="navbar__link"
                                    exact
                                    to="/inst"
                                >
                                    INSTALACIONES
                                </NavLink>
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item>
                                <NavLink
                                    activeClassName="navbar__active"
                                    className="navbar__link"
                                    exact
                                    to="/staff"
                                >
                                    EL EQUIPO
                                </NavLink>
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <NavLink
                            activeClassName="navbar__active"
                            className="navbar__link"
                            exact
                            to="/learning"
                        >
                            CURSOS
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__active"
                            className="navbar__link"
                            exact
                            to="/diving"
                        >
                            INMERSIONES
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__active"
                            className="navbar__link"
                            exact
                            to="/gallery"
                        >
                            GALERIA
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__active"
                            className="navbar__link"
                            exact
                            to="/app"
                        >
                            APP
                        </NavLink>
                {/* </div>                               */}

                    </Nav>  
                </Navbar.Collapse>  
                {/* </div> */}
            </div>
        </Navbar>

    )

}
