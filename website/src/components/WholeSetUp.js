import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import Computer from '../3dcomponents/Computer'
import Table from '../3dcomponents/Table'
import Chair from '../3dcomponents/Chair'
import SDCard from '../3dcomponents/SDCard'
import bkg from '../assets/turtle.png'

function WholeSetUp() {
    const loader = new GLTFLoader()
  return (
        <a-scene embedded style={{ width: '100%', height: '100%' }} xr-mode-ui="enabled: false">
            <a-assets>
                <img id="bkg" src={bkg} alt='background'/>
            </a-assets>
            <a-camera position="0 0 0">
                <a-cursor color="#FF0000"></a-cursor>
            </a-camera>

            <Chair x={0} y={-0.5} z={0.3} rotation="0 180 0"/>
            <Table x={0} y={-18} z={-11} rotation="0 90 0"/>
            <Computer x={0} y={-0.1} z={-0.4} rotation="0 90 0"/>
            <SDCard x={0.5} y={-0.08} z={-0.1} rotation="0 0 0"/>
            
        </a-scene>

  )
}

export default WholeSetUp
//<a-plane src="#bkg" position="0 1 -3" width="4" height="2.5"></a-plane>
//<a-sky src="#bkg"></a-sky>
/*<Computer x={0} y={2} z={0}/>
            <Table x={0} y={-1} z={0}/> */