import React from 'react'

export default function Alert(props) {
  return (
    <div className="container my-1" style={{height:'70px'}}>
      {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}:</strong>{props.alert.msg}
        </div>
      }
    </div>
  )
}