import React from 'react'
function InputBox({
  label
}) {
  return (
    <div className='px-2 py-7 bg-white rounded-xl flex flex-wrap justify-between'>
        <div className='flex flex-col flex-wrap items-baseline gap-3'>
        <label htmlFor={label}>{label}</label>
        <input type="number" name="" id={label} placeholder='0'/>
        </div>

        <div className='flex flex-col flex-wrap items-baseline gap-3'> 
            <label htmlFor="">Currency Type</label>
            <select name="" id="">
                <option value="">usd</option>
            </select>
        </div>
    </div>
  )
}

export default InputBox