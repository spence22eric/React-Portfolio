import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (isValid) {
                setErrorMessage('Please enter a valid email address!')
            } else {
                setErrorMessage('');
            }
        } else {
            if (e.target.name === 'name' && !e.target.value.length) {
                setErrorMessage('Please enter your name!');
            } else if (e.target.name === 'message' && !e.target.value.length) {
                setErrorMessage('Please enter a message!');
            } else {
                setErrorMessage('');
            }
        }

        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <div className='col-sm-12 hero-image pt-5'>
                <h1>Contact Me</h1>
            </div>
            <form className='text-light contact-form' id='contact-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input className='form-control' type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email address:</label>
                    <input className='form-control' type='email' defaultValue={email} name='email' onBlur={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea className='form-control' name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-success mt-2' type='submit'>Submit</button>
            </form>
        </section>
    )
}