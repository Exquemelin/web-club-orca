import React from 'react'
import { 
    Switch,
    Route,
    Redirect 
} from 'react-router-dom'


import { AboutScreen } from '../components/club/AboutScreen'
import { InstallationScreen } from '../components/club/InstallationScreen'
import { StaffScreen } from '../components/club/StaffScreen'
import { DivingScreen } from '../components/diving/DivingScreen'
import { GalleryScreen } from '../components/gallery/GalleryScreen'
import { LearningScreen } from '../components/learning/LearningScreen'
import { MobileAppScreen } from '../components/mobile/MobileAppScreen'
import { NavbarSite } from '../components/ui/Navbar'

export const PublicRouter = () => {
    return (
        <>

            <NavbarSite />

            <div>
                <Switch>

                    <Route exact path="/learning" component={ LearningScreen }/>
                    <Route exact path="/diving" component={ DivingScreen } />
                    <Route exact path="/gallery" component={ GalleryScreen } />
                    <Route exact path="/app" component={ MobileAppScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/inst" component={ InstallationScreen } />
                    <Route exact path="/staff" component={ StaffScreen } />
                    <Route exact path="/" component={ AboutScreen } />
                    <Redirect to="/" />
                    
                </Switch>
            </div>

        </>
        
    )
}
