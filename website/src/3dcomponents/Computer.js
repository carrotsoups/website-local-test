import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import computerModel from '../models/computer.glb'
import Protoypes from 'prop-types'


function Computer({x,y,z}) {
    const loader = new GLTFLoader();
    loader.load(
        computerModel, (d)=>{
            const entity = document.getElementById('computer')
            entity.object3D.add(d.scene)
        }
    )
  return (
    <div>
      <a-entity id='computer' position={`${x} ${y} ${z}`} scale="15 15 15"></a-entity>
    </div>
  )
}

Computer.Protoypes = {
    x: Protoypes.number,
    y: Protoypes.number,
    z: Protoypes.number
}
export default Computer
