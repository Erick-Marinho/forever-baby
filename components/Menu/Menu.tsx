import type { NextPage } from 'next';
import Head from 'next/head';

const Menu: NextPage = () => {
	return (
		<>
			<div className='flex justify-around items-center w-full h-[50px] bg-[#F5717F]'>
				<span className='text-[#FFFFFF] text-[14px]'>PERFUME INFANTIL</span>
				<span className='text-[#FFFFFF] text-[14px]'>SABONETES</span>
				<span className='text-[#FFFFFF] text-[14px]'>PÓS-BANHO</span>
				<span className='text-[#FFFFFF] text-[14px]'>ASSADURAS</span>
				<span className='text-[#FFFFFF] text-[14px]'>HIDRATANTES</span>
				<span className='text-[#FFFFFF] text-[14px]'>LENÇOS UMEDECIDOS</span>
			</div>
		</>
	);
};

export default Menu;
