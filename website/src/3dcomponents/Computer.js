import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import computerModel from '../models/computer.glb'
import Prototypes from 'prop-types'


function Computer({x,y,z}) {
    const loader = new GLTFLoader();
    loader.load(
        computerModel, (d)=>{
            const entity = document.getElementById('computer')
            entity.object3D.add(d.scene)
        }
    )
  return (
      <a-entity id='computer' position={`${x} ${y} ${z}`} scale="1 1 1"></a-entity>
  )
}

Computer.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}
export default Computer
