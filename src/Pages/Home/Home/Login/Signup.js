import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser, providerLogin, updateUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(() => { 
                        navigate('/login')
                    })
                    .catch(err => console.error(err))
                    
                
            })
            .catch(err => console.error(err))
    };

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    };

    // const handleProfileUpdate = (data) => {
    //     const profile = {
    //         displayName: data.name
    //     }
    //     updateUser(profile)
    //         .then(() => { })
    //         .catch(err => console.error(err))
    // }

    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-96 p-8 rounded-2xl shadow-2xl'>
                <h2 className='text-xl text-center font-semibold'>Sign Up</h2>

                <form
                    className='grid grid-cols-1 gap-4'
                    onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Your Name is required" })}
                            className="input input-bordered w-full "
                        />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
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
                    </div>

                    <input className="btn btn-neutral w-full" value='Sign Up' type="submit" />
                </form>
                <p className='text-sm mt-2'>Have any account? <Link className='text-secondary ' to='/login'>Please Login</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;