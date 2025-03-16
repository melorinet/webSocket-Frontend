import camera from './../assets/camera.png'

import TitleLine from './TitleLine'
import MachineControls from './MachineControls'

const LeftSide = () => {
  return (
    <div>
        <TitleLine
            title="cameras" />
        <select
            className="mt-4 w-[100%]">
            <option 
            value="1">
                Camera: Top(head:h1)
            </option>
            <option 
            value="2">
                Camera: Top(head:h2)
            </option>
            <option 
            value="3">
                Camera: Top(head:h3)
            </option>
            <option 
            value="4">
                Camera: Top(head:h4)
            </option>
        </select>
        <img
            className='w-[100%] mt-1'
            src={camera} />
        <TitleLine
            className="mt-2"
            title="machine controls" />
        <MachineControls
            />
        
    </div>
  )
}

export default LeftSide
