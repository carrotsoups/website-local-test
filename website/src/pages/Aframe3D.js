import React from 'react'
import 'aframe'
import WholeSetUp from '../components/WholeSetUp'

function Aframe3D() {
  return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WholeSetUp/>
        </div>
  )
}

export default Aframe3D
//<a-plane src="#bkg" position="0 1 -3" width="4" height="2.5"></a-plane>
//<a-sky src="#bkg"></a-sky>
/*<Computer x={0} y={2} z={0}/>
            <Table x={0} y={-1} z={0}/> */