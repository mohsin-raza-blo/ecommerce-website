import React, { useRef, useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";

const Login = () => {

  const initialState = {
    mail: '',
    password: ''
  }

  const [user, setUser] = useState(initialState)
  const [error, setError] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)


  const validateForm = () => {
   
    if (!user.mail && !user.password) {
      setError(pre => ({ ...pre, mail: 'Please enter your valid mail', password: 'please enter your valid password' }))
    }

    if (!user.mail) {
      setError(pre => ({ ...pre, mail: 'Please enter your valid mail' }))

    }


    if (!user.password) {
      setError(pre => (
        { ...pre, password: 'please enter your valid password' }
      ))
    }
  }



  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const validateUserCredentials = (e) => {
    e.preventDefault();
    if ((validationUserData.mail === (user.mail).toLocaleLowerCase() && validationUserData.password === user.password.toLocaleLowerCase())) {
     <Navbar />
    }
    else {
      validateForm()
    }

  }

  return (
    <div className='bg-gray-200 max-w-120 rounded-[7px] m-auto my-10  py-5 px-6 text-justify'>
      <div >
        <h1 className='text-3xl font-serif font font-bold text-center'>
         WellCome Back
        </h1>
        <p className='text-center text-[#6a7282]'>
          Stay with ShopVerse
        </p>
      </div>
      <div className='login-form '>
        <form action="" className='flex flex-col gap-6 my-10'>
          <div className='text-input'>
            <label className='text-[18px] font-lightBold font-serif'
              htmlFor="id" >
              Email
            </label>
            <input onChange={handleInput}
              id='id' type="text" placeholder='example@gmail.com' value={user.mail}
              name='mail'
            />
            {error.mail &&
              <span className='text-red-500 text-sm' >
                {error.mail}
              </span>
            }
          </div>
          <div className='text-input'>
            <label
              className='text-[18px] font-lightbold font-serif'
              htmlFor="password"
            >
              Password
            </label>

            {/* relative wrapper: icon ko input ke andar rakhne ke liye */}
            <div className='relative'>
              <input
                onChange={handleInput}
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='enter password'
                value={user.password}
                name='password'
                className='w-full pr-10'
              />
              <button
                type='button'
                onClick={() => setShowPassword(prev => !prev)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600'
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </div>

            {error.password && (
              <span className='text-red-500 text-sm'>{error.password}</span>
            )}
          </div>
          <button onClick={validateUserCredentials}
            type='submit'
          >Login DigiKhata</button>
        </form>
      </div>

    </div>
  )
}

export default Login

