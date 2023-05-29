import React from 'react';
import logo from '../assets/Vector.png'
// import { NavLink, Route, Routes } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import Login from './Login';
// import Demo from './Demo';



const Header = () => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-[1245px] lg:px-0 px-12 
    sticky my-4 bg-nav_bg'>
      <img src={logo} alt={'logo_img'} 
      className='cursor-pointer h-[36px] w-[152px]'/>
      <div className='flex  justify-between items-center gap-x-11'>
        <span className='text-[18px] font-fredoka font-medium leading-[22px] cursor-pointer lg:block hidden'>Sign in</span>
        <p className='font-fredoka font-medium text-[18px] text-demo_border lg:block hidden
        capitalize border-solid border-demo_border border-2 rounded-full px-4 py-1 cursor-pointer' >request demo</p>
        <div className='lg:hidden block'>
          <MenuRoundedIcon className='scale-x-150 scale-y-150 cursor-pointer'/>
        </div>
        {/* <nav>
          <ul>
            <li>
              <NavLink to='/login'>Sign in</NavLink>
            </li>
            <li>
              <NavLink to='/demo'>Request Demo</NavLink>
            </li>
          </ul>
        </nav> */}

        {/* <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/demo' element={<Demo/>}/>
        </Routes> */}
      </div>
    </div>
  )
}

export default Header;