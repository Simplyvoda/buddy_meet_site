import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
    const [goToUsers, setGoToUsers] = useState(false);

    if (goToUsers) {
        return <Navigate to="/Users"/>;
    }

  return (
      <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      First Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>    
              </div>
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                      Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="e.g buddymeet@yahoo.com"/>
              </div>
          </div>  
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                      <p className="text-gray-600 text-xs italic">We suggest you use a strong password</p>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-adress">
                      Home Address
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder=""/>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      City
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="PortHarcourt"/>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                      Postcode
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="500102"/>
              </div>
          </div>
          <div className='flex justify-center'>
              <button 
                    onClick={()=>{
                        setGoToUsers(true);
                    }} 
                    className="flex justify-center shadow bg-navy-blue hover:opacity-90 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-10 rounded-xl mt-10" type="button">
                  Connect
              </button>
          </div>
      </form>
  )
}

export default Form