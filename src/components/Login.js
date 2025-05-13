import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='relative'>
      <Header />
      <img
        className='absolute'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_medium.jpg'
        alt='Netflix background'
      />
      <form className='absolute w-[450px] h-[709px] p-16 my-24 mx-auto right-0 left-0 bg-black opacity-85 text-white'>
        <div className='mb-4'>
          <h2 className='text-3xl font-bold'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
        </div>
        {!isSignInForm && (
          <div class='relative my-6'>
            <input
              type='text'
              id='full name'
              placeholder=' '
              class='peer w-full border border-gray-300 px-2 pt-5 pb-2 bg-gray-800 focus:outline-none focus:border-white rounded'
            />
            <label
              for='fullName'
              class='absolute left-2 top-1 text-white text-xs transition-all 
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-white 
           peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-white'>
              Enter your full name
            </label>
          </div>
        )}
        <div class='relative my-4'>
          <input
            type='text'
            id='email'
            placeholder=' '
            class='peer w-full border border-gray-300 px-2 pt-5 pb-2 bg-gray-800 focus:outline-none focus:border-white rounded'
          />
          <label
            for='Email or Phone Number'
            class='absolute left-2 top-1 text-white text-xs transition-all 
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-white 
           peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-white'>
            Email or Phone Number
          </label>
        </div>
        <div class='relative'>
          <input
            type='password'
            id='password'
            placeholder=' '
            class='peer w-full border border-gray-300 px-2 pt-5 pb-2 bg-gray-800 focus:outline-none focus:border-white rounded'
          />
          <label
            for='password'
            class='absolute left-2 top-1 text-white text-xs transition-all 
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-white 
           peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-white'>
            Password
          </label>
        </div>
        {!isSignInForm && (
          <div class='relative my-6'>
            <input
              type='password'
              id='confirm-password'
              placeholder=' '
              class='peer w-full border border-gray-300 px-2 pt-5 pb-2 bg-gray-800 focus:outline-none focus:border-white rounded'
            />
            <label
              for='confirm-password'
              class='absolute left-2 top-1 text-white text-xs transition-all 
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-white 
           peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-white'>
              Confirm Password
            </label>
          </div>
        )}
        <button type='submit' className='my-6 bg-red-600 p-2 rounded-md w-full'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <div>
            <h2 className='text-center text-gray-400'>OR</h2>
            <button
              type='submit'
              className='my-6 bg-[#5f5e5e] p-2 rounded-md w-full'>
              Use a Sign-in code
            </button>
            <div class='flex items-center justify-center'>
              <Link className='flex items-center underline'>
                Forgot Password?
              </Link>
            </div>
            <input
              type='checkbox'
              id='remember-me'
              className='w-6 h-3.5 mt-5'
            />
            {"  "}
            Remember me
            <div className='mt-3'>
              New to Netflix?
              <Link className='px-2 underline' onClick={toggleIsForm}>
                Sign Up Now
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default Login;
