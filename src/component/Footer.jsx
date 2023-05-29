import React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const Footer = () => {
  return (
    <div className='bg-honey_dew pb-10'>
        <div className='lg:flex justify-between items-center max-w-[1245px] mx-auto'>
            <div className='flex space-x-1 justify-center items-center'>
                <span className='font-fredoka font-medium text-[18px]'>Any questions?</span>
                <span className='font-fredoka font-medium text-[18px] text-demo_border pr-3 cursor-pointer'>Call us now</span>
                <div className='bg-demo_border rounded-full p-2'>
                    <CallRoundedIcon className='text-nav_bg cursor-pointer'/>
                </div>
            </div>
            <div className='lg:py-0 py-4 flex justify-center'>
                <span className='font-fredoka font-medium text-[18px]'>Copyright @jsthire 2023 | Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;