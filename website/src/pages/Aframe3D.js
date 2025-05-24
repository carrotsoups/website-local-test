import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import Computer from '../3dcomponents/Computer'

function Aframe3D() {
    const loader = new GLTFLoader()
  return (
    <div>
        <a-scene>
            <a-assets>
                <img id="bkg" src='/assets/turtle.png' alt='background'/>
            </a-assets>
            <Computer x={0} y={0} z={0}/>

            

        </a-scene>

    </div>
  )
}

export default Aframe3D
//<a-plane src="#bkg" position="0 1 -3" width="4" height="2.5"></a-plane>
