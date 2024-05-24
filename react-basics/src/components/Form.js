import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
            <label htmlFor='search-input' >Search: </label>
            <input id='search-inout' ></input>
            <button aria-label='submit' className='submit-b'>
                <img alt='' src='https://sandpack-bundler.vercel.app/img/arrow-right.svg'></img>
            </button>
        </form>
    </div>
  )
}

export default Form