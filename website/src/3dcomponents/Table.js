import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import tableModel from '../models/table.glb'
import Prototypes from 'prop-types'


function Table({x,y,z}) {
    const loader = new GLTFLoader();
    loader.load(
        tableModel, (d)=>{
            const entity = document.getElementById('table')
            entity.object3D.add(d.scene)
        }
    )
  return (
      <a-entity id='table' position={`${x} ${y} ${z}`} scale="1 1 1"></a-entity>
  )
}

Table.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}
export default Table
