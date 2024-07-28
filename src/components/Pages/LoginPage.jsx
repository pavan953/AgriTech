import google from '../../assets/search.png'
import mac from '../../assets/mac.png'
// import LandingPage1 from '../../assets/landingpage.mp4'
import bac from '../../assets/logbac.jpeg'
import { Link } from 'react-router-dom';
// import Layout from '../Layout/Layout.jsx';
// import layout from '../Layout/Layout';
export default function LoginPage() {
    return (
        
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back!</h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                      <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900"> Remember for 30 days </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to={"/home"} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="w-5 h-5" src={google} alt="Google" />
                        <span className="ml-2">Sign in with Google</span>
                      </button>
                      <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="w-5 h-5" src={mac} alt="Apple" />
                        <span className="ml-2">Sign in with Apple</span>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                  Dont have an account? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img className="absolute inset-0 h-full w-full object-cover" src={bac} alt="Background" />
        </div>
      </div>
    //   </div>
    )
  }
  