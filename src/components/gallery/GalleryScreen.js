import React from 'react'
import { GalleryGrid } from './GalleryGrid'
import { GalleryModal } from './GalleryModal'

export const GalleryScreen = () => {
    return (
        <div className="container">
            <div className="galery__header">
                <h1>Galerías de Imágenes</h1>
                
                <GalleryGrid />
                <GalleryModal />
            </div>
        </div>
    )
}
