import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	img: StaticImageData;
	text: string;
	price: string;
};
const Card = ({ img, text, price }: Props) => {
	return (
		<div className='flex items-center w-[256px] h-[387px] shadow bg-[#FFFFFF]'>
			<div className='p-4 rounded'>
				<Link href='/'>
					<a className='w-full h-[190px]'>
						<Image src={img} alt='logo' />
					</a>
				</Link>
				<Link href='a'>
					<a className='mt-4 text-[14px] text-[#345C7D] pb-2'>
						<b>{text}</b>
					</a>
				</Link>
				<h4 className='text-xl font-bold text-[#BF6B84] pb-4'>{price}</h4>
				<ul className='flex justify-center pb-4'>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-[#FFE600] fill-current hover:text-yellow-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-[#FFE600] fill-current hover:text-yellow-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-[#FFE600] fill-current hover:text-yellow-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-[#FFE600] fill-current hover:text-yellow-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-[#FFE600]'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
							/>
						</svg>
					</li>
				</ul>
				<div className='flex justify-center'>
					<button className='flex text-white font-bold py-2 px-4 rounded text-[12px] bg-[#FF8A00]'>
						ADICIONAR AO CARRINHO
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
