import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logoForeverBaby.png';

const Debug: NextPage = () => {
	return (
		<div className='flex h-[68px] lg:w-full lg:h-[134px]'>
			<div>ham</div>
			<Link href='/'>
				<a className='w-[84px] h-[45px] lg:w-[160px] lg:h-[85.54px]'>
					<Image src={logo} alt='logo forever baby' />
				</a>
			</Link>
		</div>
	);
};

export default Debug;
