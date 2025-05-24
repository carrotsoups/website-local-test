import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import Computer from '../3dcomponents/Computer'
import Table from '../3dcomponents/Table'
import Chair from '../3dcomponents/Chair'
import bkg from '../assets/turtle.png'

function Aframe3D() {
    const loader = new GLTFLoader()
  return (
    <div>
        <a-scene>
            <a-assets>
                <img id="bkg" src={bkg} alt='background'/>
            </a-assets>
            
            <Chair x={0} y={1} z={0.2} rotation="0 180 0"/>
            <Table x={0} y={-18} z={-11} rotation="0 90 0"/>
            
            
        </a-scene>

    </div>
  )
}

export default Aframe3D
//<a-plane src="#bkg" position="0 1 -3" width="4" height="2.5"></a-plane>
//<a-sky src="#bkg"></a-sky>
/*<Computer x={0} y={2} z={0}/>
            <Table x={0} y={-1} z={0}/> */