import Header from "./Header";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { checkData } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErrMsg, setEmailErrMsg] = useState(null);
  const [passwordErrMsg, setPasswordErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleIsForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const validateForm = () => {
    const errorMsg = checkData(email.current.value, password.current.value);
    setEmailErrMsg(errorMsg.emailError);
    setPasswordErrMsg(errorMsg.passwordError);
  };
  return (
    <div className='relative'>
      <Header />
      <img
        className='absolute'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_medium.jpg'
        alt='Netflix background'
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-[400px] p-8 my-24 mx-auto right-0 left-0 bg-black opacity-85 text-white'>
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
            ref={email}
            placeholder=' '
            class='peer w-full border border-gray-300 px-2 pt-5 pb-2 bg-gray-800 focus:outline-none focus:border-white rounded autofill:bg-gray-800'
          />
          <label
            for='Email or Phone Number'
            class='absolute left-2 top-1 text-white text-xs transition-all 
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-white 
           peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-white'>
            Email or Phone Number
          </label>
          {emailErrMsg && <p className='text-red-500 text-sm'>{emailErrMsg}</p>}
        </div>
        <div class='relative'>
          <input
            type='password'
            id='password'
            ref={password}
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
          {passwordErrMsg && (
            <p className='text-red-500 text-sm'>{passwordErrMsg}</p>
          )}
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
        <button
          type='submit'
          className='my-6 bg-red-700 p-2 rounded-md w-full'
          onClick={validateForm}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <p className='text-lg font-bold'>{errormsg}</p> */}
        {isSignInForm && (
          <div>
            <h2 className='text-center text-gray-400'>OR</h2>
            <button
              type='submit'
              className='my-6 bg-slate-700 p-2 rounded-md w-full'>
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
          </div>
        )}
        <div className='mt-3'>
          {isSignInForm ? "New to Netflix?" : "Already a Netflix member?"}
          <Link className='px-2 underline' onClick={toggleIsForm}>
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
