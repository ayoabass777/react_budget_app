import React, {useContext} from 'react';
import { AppContext} from '../context/AppContext'



const Budget = () => {
    const {budget, currency, dispatch} = useContext(AppContext);
    
    const onChangeBudget =(val)=>{
        dispatch({
        type:'SET_BUDGET',
        payload: val
       })
       
       
       

       
    }

    return(
        <div className='alert alert-secondary'>
            Budget:{currency}<label>
                <input
                type='number'
                step='10'
                value ={budget}
                onChange={event=>onChangeBudget(event.target.value)}
                >
                </input>
            </label>
        </div>
    );
};

export default Budget;