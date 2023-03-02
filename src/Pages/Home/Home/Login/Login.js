import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [data, setData] = useState("");
    const handleLogin = data => {
        // console.log(data);
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-96 p-8 rounded-2xl shadow-2xl'>
                <h2 className='text-xl text-center font-semibold'>Login</h2>

                <form
                    className='grid grid-cols-1 gap-4'
                    onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full "
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be minimum 6 characters' }
                                },
                            )}
                            className="input input-bordered w-full "
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <span className="label-text"> <Link>Forget password</Link> </span>
                    </div>

                    <input className="btn btn-neutral w-full" value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'> Your email or password is invalid </p>}
                    </div>
                </form>
                <p className='text-sm mt-2'>New to Doctors Portal? <Link className='text-secondary ' to='/signup'>Create a new account</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;