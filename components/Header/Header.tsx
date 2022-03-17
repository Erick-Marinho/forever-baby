import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import carrinho from '../../assets/carrinho.png';
import logo from '../../assets/logoForeverBaby.png';
import minhaConta from '../../assets/minhaConta.png';
import Form from '../../core/Form';

const Header: NextPage = () => {
	const [isDesktop, setDesktop] = useState();

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1024);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		updateMedia();
		return () => window.removeEventListener('resize', updateMedia);
	});
	return (
		<>
			<header className='flex justify-around items-center h-[68px] lg:w-full lg:h-[134px]'>
				<Link href='/'>
					<a className='w-[84px] h-[45px] lg:w-[160px] lg:h-[85.54px]'>
						<Image src={logo} alt='logo forever baby' />
					</a>
				</Link>
				{isDesktop ? <Form /> : null}
				<div className='flex items-center'>
					<div className=' flex flex-col items-center mr-6'>
						<Link href='/'>
							<a className='w-10 h-10 mx-1.5 rounded-full bg-[#F5717F]'>
								<Image src={minhaConta} alt='minha conta' />
							</a>
						</Link>
						<Link href='/'>
							<a className='text-[10px] text-[#FFFFFF] w-[68px] h-[12px] pt-1'>
								MINHA CONTA
							</a>
						</Link>
					</div>
					<div className=' flex flex-col items-center mr-6'>
						<Link href='/'>
							<a className='w-10 h-10 mx-1.5 rounded-full bg-[#F5717F]'>
								<Image src={carrinho} alt='minha conta' />
							</a>
						</Link>
						<Link href='/'>
							<a className='text-[10px] text-[#FFFFFF] w-[68px] h-[12px] pt-1 ml-4'>
								CARRINHO
							</a>
						</Link>
					</div>
				</div>
			</header>
			{!isDesktop ? <Form /> : null}
		</>
	);
};

export default Header;
