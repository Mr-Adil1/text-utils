
import React from 'react'

const Alert = (props) => {
   const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
   };
  return (
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-absolute w-100 top-0 start-0`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg};
</div>
  )
}

export default Alert
