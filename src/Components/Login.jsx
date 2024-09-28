import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      
      <Header />

      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="relative top-48 bg-black bg-opacity-80 w-full max-w-md mx-auto p-12 rounded-md">
        <form className="space-y-4">
          <h1 className="text-white font-bold text-3xl text-left">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>

          
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 outline-none rounded-md bg-transparent text-white w-full h-12 border-2 border-gray-700"
            />
          )}

          
          <input
            className="p-3 m-2 outline-none rounded-md bg-transparent text-white w-full h-12 border-2 border-gray-700"
            type="text"
            placeholder="Email Address"
          />

        
          <input
            className="p-3 m-2 outline-none rounded-md bg-transparent text-white w-full h-12 border-2 border-gray-700"
            type="password"
            placeholder="Password"
          />

          
          <button
            type="submit"
            className="m-2 text-white bg-red-700 p-3 rounded-md w-full"
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-gray-300 text-center p-4">
          {isSignInForm ? 'New to Netflix?' : 'Already a User?'}
          <span
            onClick={toggleSignInForm}
            className="font-semibold text-white cursor-pointer hover:underline ml-1"
          >
            {isSignInForm ? 'Sign up now' : 'Sign in now'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
