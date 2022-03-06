import type { NextPage } from 'next';
import Head from 'next/head';

const Menu: NextPage = () => {
	return (
		<>
			<div className='flex justify-around items-center w-full h-12 bg-[#F5717F]'>
				<span className='text-[#FFFFFF]'>PERFUME INFANTIL</span>
				<span className='text-[#FFFFFF]'>SABONETES</span>
				<span className='text-[#FFFFFF]'>PÓS-BANHO</span>
				<span className='text-[#FFFFFF]'>ASSADURAS</span>
				<span className='text-[#FFFFFF]'>HIDRATANTES</span>
				<span className='text-[#FFFFFF]'>LENÇOS UMEDECIDOS</span>
			</div>
		</>
	);
};

export default Menu;
