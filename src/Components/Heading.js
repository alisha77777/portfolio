import React from 'react'

const Heading = ({heading , text , color}) => {
  return (
    <div id='heading'>
        <div style={{width:"fit-content" , margin:"auto"}}>
            <h1 className='text-center'>{heading}</h1>
            <div className='flex'>
                <span className={`line ${color ? color : ""}`}></span>
                <span className='text-center brand-c fw-bold fs-5' style={{minWidth:"fit-content"}}>{text}</span>
                <span className={`line ${color ? color : ""}`}></span>
            </div>
        </div>
    </div>
  )
}

export default Heading