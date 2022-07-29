import './TypeMsg.css'
import { GIFUploadIcon, ImageUploadIcon } from '../Assests/Icons'
export default function TypeMsg() {
  return (
    <div className='Write'>
      <div className='size'>
      <ImageUploadIcon/>
      <GIFUploadIcon/>
      </div>
      <div>
        <input type="text" />
      </div>
      <input type="search" />
    </div>
  )
}
