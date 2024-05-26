import React from 'react'

const ContactCard = ({name,job,email}) => {
  return (
    <div className='contactCardDiv'>
        <h1>{name} </h1>
        <p className='pContact'>job</p>
        <p>{job} </p>
        <p className='pContact'>email</p>
        <p>{email} </p>
    </div>
  )
}

export default ContactCard