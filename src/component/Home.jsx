import React from 'react';
import heroimg from '../assets/heroimg.png';
import heroimg1 from '../assets/hero_image.png';
import {useState} from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Home = () => {
  const [input, setInput] = useState({
    email : '',
    password : '',
    checkbox : false,
  });

  // const [allEntry, setAllEntry] = useState([]);

  const handleInput = (e) =>{
    const {name, value, type, checked} = e.target;

    console.log(email, value)

    //setInput({...input, [name]: value});
    setInput(
      (prev) => (
        {...prev, [name] : type === 'checkbox' ? checked : value}
      )
    );
  }

  // const handlSubmit = (e) =>{
  //    e.preventDefault();

  //    const newEntry = { email: email, password: password };
  //    setAllEntry([...allEntry, newEntry]);
  //    console.log(allEntry);
  // }



  return (
    <div className=' bg-honey_dew pb-20'>
      <div className='lg:flex max-w-[1245px] lg:px-0 px-12 mx-auto justify-between py-12'>
        <div>
          {/* left side */}
          <h2 className='text-[48px] font-fredoka font-medium leading-[133.5%]'>
          Welcome to your <br/>professional community</h2>
          <p className='text-sub_title_color text-[18px] font-normal 
          pt-6 pb-16 font-fredoka'>
          Explore thousands of jobs in one place and get the job your dream.</p>
          
          <form action='#'>
            <div className='bg-nav_bg py-2 rounded-t-lg'>
              <div className=' flex justify-between items-center px-5'>
                <label htmlFor='email' className=' text-[18px] font-fredoka
                font-normal'>Email</label>
                <PersonOutlineIcon className='h-6 w-6'/>
              </div>
              <input
                  type='email'
                  name='email'
                  id='email'
                  autocomplete='off'
                  placeholder='Andresalmanan@outlook.com'
                  value={input.email}
                  onChange={handleInput}
                  className='py-2 px-5 outline-none w-full font-fredoka font-medium 
                  text-[20px] placeholder-demo_border'
              />
            </div>
            <div className=' border-solid border-[1px] border-hero_back'></div>


            <div className='bg-nav_bg py-2 rounded-b-lg'>
              <div className='flex justify-between items-center px-5'>
                <label htmlFor='password' className='text-[18px] font-fredoka
                font-normal'>Password</label>
                <LockOutlinedIcon className='h-6 w-6'/>
              </div>
              <input
                  type='password'
                  name='password'
                  id='password'
                  autocomplete='off'
                  placeholder='Placeholder the Password'
                  value={input.password}
                  onChange={handleInput}
                  className='py-2 px-5 outline-none font-fredoka w-full font-normal text-[20px]'
              />
            </div>

            <div className='flex justify-between items-center py-6'>
              <div className=' flex justify-center items-center'>
                {/* checkbox coding */}
                <input
                  type='checkbox'
                  name='checkbox'
                  id='checkbox'
                  value={input.checkbox}
                  onChange={handleInput}
                  className='h-[19px] w-[19px] mr-4'
                />
                <label htmlFor='checkbox' className=' font-fredoka font-normal 
                text-[16px] capitalize text-re_color'>remember me</label>
              </div>
              <p className=' font-fredoka text-[16px] text-demo_border 
              capitalize cursor-pointer'>forgot password?</p>
            </div>

            <div className='flex justify-between items-center py-2'>
              <div>
                <span className=' font-fredoka text-[17px] font-semibold'>Or, </span>
                <span className=' font-fredoka font-medium text-[17px] text-demo_border'>Login via OTP</span>
              </div>
              <button type='submit' className='font-fredoka text-[17px] font-medium
              bg-demo_border px-11 pt-[9px] pb-[11px] rounded-md text-nav_bg'>Login</button>
            </div>
          </form>
        </div>

        <div className='lg:max-w-[600px] scale-y-110 flex justify-center items-center '>
          {/* right side */}
          <img src={heroimg1} 
          className='mt-20 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Home