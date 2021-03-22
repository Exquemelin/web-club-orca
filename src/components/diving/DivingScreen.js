import React from 'react'
import { DivingModal } from './DivingModal'
import { SiteGrid } from './SiteGrid'

export const DivingScreen = () => {
    
    return (
        <div className="container">

            <div className="diving__header">
                <h1>Inmersiones</h1>
            </div>

            <SiteGrid />

            <DivingModal />
            
        </div>
    )
}
