import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Google from '../../assets/google.svg'
import BgLogin from '../../assets/loginbg.jpg'
import { toast } from 'sonner';
import { ThemeContext } from '../../context/ThemeContext';


const LogIn = () => {
    const { darkMode } = useContext(ThemeContext);


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({})


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {};

        if (!formData.emailAddress)
            newErrors.emailAddress = "Email is required";

        if (!formData.password)
            newErrors.password = "Password is required";

        if (!isLogin) {
            if (!formData.firstName)
                newErrors.firstName = "First name is required";

            if (!formData.lastName)
                newErrors.lastName = "Last name is required";

            if (!formData.confirmPassword)
                newErrors.confirmPassword = "Please confirm your password";
            if (
                formData.password &&
                formData.confirmPassword &&
                formData.password !== formData.confirmPassword
            ) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please fill all required fields");
            return;
        }
        toast.success(
            isLogin
                ? "Login successfully!"
                : "Account created successfully!"
        );
        setErrors({});
        console.log("Form submitted", formData);
        setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
        });
    }

    return (
        <div className={`flex items-center min-h-screen ${darkMode ? "bg-zinc-900" : "bg-zinc-300"
            }`}>
            <div className='container mx-auto px-6 py-6 mt-30'>
                <div className={`flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden p-10 ${darkMode
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-100 text-black"
                    }`}>
                    {/* left Side  */}
                    <div className='w-full lg:w-1/2 p-12'>
                        <div className='flex flex-col'>
                            <h3 className={`text-3xl mb-2 font-bold ${darkMode ? "text-white" : "text-zinc-800"
                                }`}>{isLogin ? 'Welcome Back' : "Create an Account"}</h3>
                            <p className={`${darkMode ? "text-zinc-300" : "text-gray-700"}`}>{isLogin ? 'Login your Account' : 'Join Us with create an account'}</p>
                            {/* social button  */}
                            <div className='grid grid-cols-2 gap-6 mt-6'>
                                <button className={`flex items-center justify-center gap-3 py-2 border rounded ${darkMode
                                    ? "border-zinc-600 bg-zinc-700 text-white"
                                    : "border-gray-300 bg-white text-black"
                                    }`}><img src={Google} alt=" Google" className='w-6 h-6' />Google</button>
                                <button className={`flex items-center justify-center gap-3 py-2 border rounded ${darkMode
                                    ? "border-zinc-600 bg-zinc-700 text-white"
                                    : "border-gray-300 bg-white text-black"
                                    }`}><FaFacebookSquare className=' text-blue-700 w-6 h-6' />Facebook</button>
                            </div>

                            {/* line  */}
                            <div className='flex items-center gap-4 mt-6'>
                                <div className={`flex-grow border-t ${darkMode ? "border-zinc-600" : "border-gray-300"
                                    }`}></div>
                                <span className={` px-4 ${darkMode ? "text-zinc-300" : "text-gray-700"}`}>or</span>
                                <div className={`flex-grow border-t ${darkMode ? "border-zinc-600" : "border-gray-300"
                                    }`}></div>


                            </div>




                            {/* authentication  */}

                            <form onSubmit={handleSubmit}>

                                {/* first and last name signup  */}
                                {!isLogin && (
                                    <div className='grid grid-cols-2 gap-4 mt-6'>
                                        <div>
                                            <label className=' block mb-2'>First Name</label>
                                            <input type="text"
                                                name='firstName' className={`w-full px-4 py-2 rounded-xl focus:outline-none ${darkMode
                                                    ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                                                    : "bg-white text-black"
                                                    }`}
                                                placeholder='Enter your first name'
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className='block mb-2'>Last Name</label>
                                            <input type="text"
                                                name='lastName'
                                                className={`w-full px-4 py-2 rounded-xl focus:outline-none ${darkMode
                                                    ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                                                    : "bg-white text-black"
                                                    }`}
                                                placeholder='Enter your last name'
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                                        </div>
                                    </div>
                                )

                                }

                                {/* email field  */}
                                <div className='mb-2 mt-6 flex flex-col'>
                                    <label htmlFor='email' className={` text-xl mb-2 ${darkMode ? "text-white" : "text-zinc-800"}`}>Email Address</label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-2 rounded-xl focus:outline-none ${darkMode
                                            ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                                            : "bg-white text-black"
                                            }`}
                                        placeholder='email'
                                        name='emailAddress'
                                        value={formData.emailAddress}
                                        onChange={handleInputChange}
                                    />
                                    {errors.emailAddress && <p style={{ color: "red" }}>{errors.emailAddress}</p>}
                                </div>
                                {/* password field  */}
                                <div className='mb-2 mt-6 flex flex-col'>
                                    <label htmlFor='password' className=' blocktext-zinc-800 text-xl mb-2'>Password</label>
                                    <div className='relative'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`w-full px-4 py-2 rounded-xl focus:outline-none ${darkMode
                                                ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                                                : "bg-white text-black"
                                                }`}
                                            placeholder='password'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}
                                            className={`absolute top-3 right-3 cursor-pointer outline-none transition-colors ${darkMode
                                                ? "text-zinc-300 hover:text-white"
                                                : "text-gray-600 hover:text-gray-700"
                                                }`}
                                        >
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </button>
                                    </div>
                                </div>

                                {/* confirm password  */}
                                {!isLogin && (
                                    <div className='mb-2 mt-6 flex flex-col'>
                                        <label htmlFor='password' className=' blocktext-zinc-800 text-xl mb-2'>Confirm Password</label>
                                        <div className='relative'>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className={`w-full px-4 py-2 rounded-xl focus:outline-none ${darkMode
                                                    ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                                                    : "bg-white text-black"
                                                    }`}
                                                placeholder=' confirm password'
                                                name='confirmPassword'
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                            />
                                            {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
                                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className={`absolute top-3 right-3 cursor-pointer outline-none transition-colors ${darkMode
                                                        ? "text-zinc-300 hover:text-white"
                                                        : "text-gray-600 hover:text-gray-700"
                                                    }`}
                                            >
                                                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                            </button>
                                        </div>
                                    </div>

                                )

                                }



                                {/* remember checkbox  */}
                                {isLogin && (
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-4 h-4 ' />
                                            <span className={`font-semibold ${darkMode ? "text-zinc-200" : "text-gray-900"
                                                }`}
                                            >Remember Me</span>
                                        </div>
                                        <div>
                                            <a href="#" className={`hover:underline ${darkMode
                                                ? "text-orange-400 hover:text-orange-300"
                                                : "text-blue-500 hover:text-blue-700"
                                                }`}>Forgot Password?</a>
                                        </div>
                                    </div>
                                )

                                }

                                {/* login button  */}
                                <div className='mt-6'>
                                    <button type='submit' className='w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition-colors duration-300'>{isLogin ? "LogIn" : "Sign Up"}</button>
                                </div>
                                <p className={`flex justify-center gap-3 mt-3 ${darkMode ? "text-zinc-300" : "text-black"
                                    }`}
                                >{isLogin ? "Don't have any account?" : "Already have an account?"}
                                    <span onClick={() => setIsLogin(!isLogin)} className={`cursor-pointer ${darkMode ? "text-orange-500 hover:text-orange-400 hover:underline" : "text-blue-500 hover:text-blue-700 hover:underline"}`}>{isLogin ? 'Sign Up' : 'Login'}</span>
                                </p>

                            </form>
                        </div>
                    </div>


                    {/* right side  */}

                    <div className=' relative w-full lg:w-1/2 bg-center bg-cover rounded-2xl min-h-[300px] lg:min-h-[500px] flex items-center justify-center' style={{ backgroundImage: `url(${BgLogin})` }}>
                        <div className='absolute inset-0 bg-black opacity-30 rounded-2xl'></div>
                        <div className='relative text-center'>
                            <h3 className='md:text-3xl text-white font-bold'>Login your account and explore it</h3>
                            <p className='text-xl text-zinc-300'>
                                login you account and save orders, cards items and enjoy offers
                            </p>
                            <button className=' text-white mt-6 px-6 py-2 border-2 border-white rounded cursor-pointer'>Create an Account</button>

                        </div>



                    </div>

                </div>

            </div>


        </div >
    )
}

export default LogIn
