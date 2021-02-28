import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
} from 'react-router-dom'


import { PublicRouter } from './PublicRouter'


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>                   

                    <PublicRouter />
                    
                </Switch>
            </div>
        </Router>
    )
}
