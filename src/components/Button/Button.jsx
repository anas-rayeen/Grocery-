import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button 
        type={props.type}
        onClick={props.onClick}
        className='text-white bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105
         hover:to-orange-600 transition-all duration-300 cursor-pointer'>
            {props.content}
        </button>
      
    </div>
  )
}

export default Button;
