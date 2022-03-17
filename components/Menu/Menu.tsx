import type { NextPage } from 'next';
import Link from 'next/link';

const Menu: NextPage = () => {
	return (
		<>
			<div className='hidden lg:flex justify-around items-center w-full h-[50px] bg-[#F5717F]'>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						PERFUME INFANTIL
					</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						SABONETES
					</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						PÓS-BANHO
					</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						ASSADURAS
					</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						HIDRATANTES
					</a>
				</Link>
				<Link href='/'>
					<a className='text-[#FFFFFF] text-[14px] font-[Roboto] font-bold'>
						LENÇOS UMEDECIDOS
					</a>
				</Link>
			</div>
		</>
	);
};

export default Menu;
