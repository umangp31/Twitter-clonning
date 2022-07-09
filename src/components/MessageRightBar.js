import { Link } from "react-router-dom"
import "./MessageRightbar.css"

export default function MessageRightBar() {
    return (
        <div className='MessageRightBar'>
            <Link to="/messages/Sahil">
                SahilCODER
            </Link>
            <br/>
            <Link to="/messages/Umang">
                UmangJSMASTER
            </Link>
            <br/>
            <Link to="/messages/harsh">
                HarshSER
            </Link>
        </div>
    )
}
