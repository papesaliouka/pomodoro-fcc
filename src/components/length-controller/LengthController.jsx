import LengthControl from '../length-control/LengthControl.component';
import './LengthController.styles.css';

const LengthController = ({type})=>{
    return (
        <div className='length-controller' >
            <h2 id={`${type.toLowerCase()}-label`} >{type} Length</h2>
            <LengthControl type={type}/>
        </div>
    );
}

export default LengthController;