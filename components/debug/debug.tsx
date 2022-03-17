import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import carrinho from '../../assets/carrinho.png';
import logo from '../../assets/logoForeverBaby.png';
import minhaConta from '../../assets/minhaConta.png';
import Form from '../../core/Form';

const Debug: NextPage = () => {
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
		<header className='w-full'>
			<nav className='flex items-center justify-between h-[68px] lg:h-[134px]'>
				<div className='h-[45px] w-[84px] ml-6 lg:h-[85px] lg:w-[160px]'>
					<Link href='/'>
						<a className='cursor-pointer'>
							<Image src={logo} alt='logo forever baby' />
						</a>
					</Link>
				</div>
				<div className='lg:w-[651px]'>{isDesktop ? <Form /> : null}</div>
				<ul className='flex justify-around mr-6'>
					<li className='w-10 h-10 rounded-full mr-6 bg-[#F5717F]'>
						<a href='#' className=''>
							<Image src={minhaConta} alt='minha conta' />
						</a>
						<a
							href='#'
							className='hidden lg:contents text-[10px] hover:text-cyan-500 duration-500'>
							MINHA CONTA
						</a>
					</li>
					<li className='w-10 h-10 rounded-full bg-[#F5717F]'>
						<a href='#' className=''>
							<Image src={carrinho} alt='carrinho' />
						</a>
						<a
							href='#'
							className='hidden lg:contents text-[10px] hover:text-cyan-500 duration-500'>
							CARRINHO
						</a>
					</li>
				</ul>
			</nav>
			{!isDesktop ? <Form /> : null}
		</header>
	);
};

export default Debug;
