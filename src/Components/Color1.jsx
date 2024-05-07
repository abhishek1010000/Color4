import "./Color1.css"
import Proptypes from "prop-types"
function Color1(props){
    return (
        <div style={{backgroundColor : `${props.text}`}} className="color" >
            <h1>{props.text}</h1>
            <p>{props.name}</p>
        </div>
    )
}
Color1.propTypes = {
    text : Proptypes.string,
    name : Proptypes.string
};

export default Color1;
