import React from 'react';
import DashBoardImg from '../../assests/images/dashboard.png';
import SettingsImg from '../../assests/images/settings.png';
import styles from "../../styles/componentStyles/_dashboardlistcard.scss";


const DashboardListCard = () => {
    return (
        <div className=' py-8 px-7  flex  gap-8 bg-[#242222] rounded-xl relative'>
            <img src={DashBoardImg} alt='dashboard' className='w-[368px] h-[300px] rounded-md border border-[#FFD21D]' />
            <img src={SettingsImg} alt='settings' className='absolute top-8 right-8  cursor-pointer' />
            <div>
                <div className='flex items-center gap gap-2 mb-6'>
                    <h2 className='text-[39px] font-bold font-sans text-white'>Okay Bears</h2>
                    <div className='p-2'>
                        <p className='font-sans text-[13px] text-[#FFD21D] bg-[rgba(218, 165, 33, 0.05) 100%]'>Brand</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex item justify-between bg-black py-[10px] px-10 rounded-lg w-[810px]'>
                        <p className='text-[16px] text-[#E8E1DC] font-medium'>All received proposal (ARP) </p>
                        <p className='text-[16px] text-[#E8E1DC]'>400</p>
                    </div>

                    <div className='flex item justify-between bg-black py-[10px] px-10 rounded-lg w-[810px]'>
                        <p className='text-[16px] text-[#E8E1DC] font-medium'>New Development </p>
                        <p className='text-[16px] text-[#E8E1DC]'>400</p>
                    </div>
                </div>

                <div className='flex items-center gap-12 mt-7'>
                    <buttton className='bg-[#FFDF00] rounded-lg py-3 px-4 cursor-pointer'>
                        <p className='text-[24px] font-poppins text-black'>Collab Proposals</p>
                    </buttton>

                    <button className='bg-transparent border border-[#FFDF00] text-[#FFDF00] rounded-lg py-3 px-4 cursor-pointer'>
                        <p className='text-[24px] font-poppins text-[#FFDF00] '>Collab Proposals</p>
                    </button>

                    <button className='bg-transparent border border-[#FFDF00] text-[#FFDF00] rounded-lg py-3 px-4 cursor-pointer'>
                        <p className='text-[24px] font-poppins text-[#FFDF00] '>Collab Proposals</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardListCard