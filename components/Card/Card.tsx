import type { NextPage } from 'next';
import Image from 'next/image';
// import logo from '../../assets/logoForeverBaby.png';

type Props = {
	img: StaticImageData;
	text: string;
	price: string;
};
const Card = ({ img, text, price }: Props) => {
	console.log(text);
	return (
		<div className='w-[256px] h-[387px] shadow bg-[#FFFFFF]'>
			<div className='p-4 rounded'>
				<div className='w-full h-[190px]'>
					<Image src={img} alt='logo' />
				</div>
				<h2 className='mt-4 text-lg'>{text}</h2>
				<ul className='flex items-center'>
					<li>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-4 h-4 text-yellow-300 fill-current hover:text-yellow-400'
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
							className='w-4 h-4 text-yellow-300 fill-current hover:text-yellow-400'
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
							className='w-4 h-4 text-yellow-300 fill-current hover:text-yellow-400'
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
							className='w-4 h-4 text-yellow-300 fill-current hover:text-yellow-400'
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
							className='w-4 h-4 text-yellow-300'
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
				<h4 className='text-xl font-bold text-red-600'>{price}</h4>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]'>
					ADICIONAR AO CARRINHO
				</button>
			</div>
		</div>
	);
};

export default Card;

// const Card = (props: { text: string; price: string; img: StaticImageData }) => {
// 	return (
// 		<div>
// 			<h1>{props.text}</h1>
// 			<h1>{props.price}</h1>
// 			<div className='w-full h-[190px]'>
// 				<Image src={props.img} alt='logo' />
// 			</div>
// 		</div>
// 	);
// };

// export default Card;