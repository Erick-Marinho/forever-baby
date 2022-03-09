import type { NextPage } from 'next';
import Link from 'next/link';

const Menu: NextPage = () => {
	return (
		<>
			<div className='flex justify-around items-center w-screen h-[50px] bg-[#F5717F]'>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>PERFUME INFANTIL</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>SABONETES</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>PÓS-BANHO</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>ASSADURAS</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>HIDRATANTES</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px]'>LENÇOS UMEDECIDOS</a>
				</Link>
			</div>
		</>
	);
};

export default Menu;
