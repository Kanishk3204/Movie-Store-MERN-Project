import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>
                    <h3 className="font-bold text-2xl">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter Your Email ID'
                            className=' w-80 py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="text" placeholder='Enter Your Password'
                            className=' w-80 py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className=' flex justify-around mt-4 text-xl'>
                        <button className=' bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>Login</button>
                        <p>Not registered? <Link to="/signup" className=' underline text-blue-500 cursor-pointer'>Signup</Link></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
