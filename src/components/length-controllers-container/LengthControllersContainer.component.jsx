import './LengthControllersContainer.styles.css';
import LengthController from '../length-controller/LengthController';

const LengthControllersContainer = ()=>{

    return(
        <div className='length-controllers-container'>
            <LengthController type={'Break'}/>
            <LengthController type= {'Session'}/>
        </div>
    );
}

export default LengthControllersContainer