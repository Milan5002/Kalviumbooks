// imports
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitSuccessful, isSubmitted } } = useForm();
    const {showBook , setshowBook} = useContext(AppContext);
    const nav = useNavigate();

    const formHandler = (data) => {
        setshowBook(true);
        console.log(data);
        console.log(showBook);
        localStorage.setItem("data", JSON.stringify(data)) 
        toast("Form submitted", {
            theme: 'dark'
        })
        
   
        if (data.password !== data.repeatPassword) {
            setError('repeatPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
        }   
      nav("/"); 
    }
 
    return (
        <div className='form-container flex'>
            <ToastContainer />
            <form onSubmit={handleSubmit(formHandler)}>
                <div className='form flex'>
                    <h1>Sign-up </h1>
                    <input type="text" placeholder='Your Name' name='name' className='int'{...register("name", {
                        required: "Fill The Name",
                        minLength: {
                            value: 5,
                            message: "Minimum 5 chars required."
                        },
                        maxLength: {
                            value: 15,
                            message: "Minimum 15 chars required."
                        }
                    })} />
                    <p className='err'>{errors.name?.message}</p>
                    <input type="email" placeholder='Your Email' name='email' className='int' {...register("email", {
                        required: "Fill The Email",
                    })} />
                    <p className='err'>{errors.email?.message}</p>
                    <input type="password" placeholder='Password' name='password' {...register("password", {
                        required: "Enter Password",
                        minLength: {
                            value: 7,
                            message: "Password must be more than 7 characters."
                        },
                        maxLength: {
                            value: 20,
                            message: "Password cannot be more than 20 characters."
                        },
                     
                    })} />
                    <p className='err'>{errors.password?.message}</p>
                    <input type="password" placeholder='Confirm your Password' name="repeatPassword" className='int'
                        {...register("repeatPassword", {
                            required: "Repeat your password",
                            validate: (value) => value === watch('password') || 'Passwords do not match',
                        })}
                    /> <p className='err'>{errors.repeatPassword?.message}</p>

                   <button className='signup' > Sign Up </button>
                </div>
            </form>
        </div>
    )
}

export default Form;