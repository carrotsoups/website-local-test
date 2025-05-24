import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import chairModel from '../models/chair.glb'
import Prototypes from 'prop-types'


function Chair({x,y,z,rotation}) {
    const loader = new GLTFLoader();
    loader.load(
        chairModel, (d)=>{
            const entity = document.getElementById('chair')
            entity.object3D.add(d.scene)
        }
    )
  return (
      <a-entity id='chair' position={`${x} ${y} ${z}`} scale="0.005 0.005 0.005" rotation={rotation}></a-entity>
  )
}

Chair.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}
export default Chair
