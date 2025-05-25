import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import sdcardModel from '../models/sdcard.glb'
import Prototypes from 'prop-types'


function SDCard({x,y,z,rotation}) {
    const loader = new GLTFLoader();
    loader.load(
        sdcardModel, (d)=>{
            const entity = document.getElementById('sdcard')
            entity.object3D.add(d.scene)
        }
    )
  return (
      <a-entity
        id='sdcard'
        position={`${x} ${y} ${z}`}
        scale="0.5 0.5 0.5"
        rotation={rotation}
      >
      </a-entity>
  )
}

SDCard.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}
export default SDCard
