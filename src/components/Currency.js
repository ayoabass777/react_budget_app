import React, {useContext}  from 'react'
import {AppContext} from '../context/AppContext'

const Currency =() =>{
    const{dispatch} =useContext(AppContext);

    const onChange=(val)=> {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }
  return(
  <div className='alert alert-success'> Location {
    <select name="Location" id="Location" onChange={event=>onChange(event.target.value)}
    style={{backgroundColor:'lightgreen'}}>
      <option value="$">$ Dollar</option>
      <option value="£">£ Pound</option>
      <option value="€">€ Euro</option>
      <option value="₹">₹ Ruppee</option>
      
    </select>	
    }	
  </div>)

}

export default Currency