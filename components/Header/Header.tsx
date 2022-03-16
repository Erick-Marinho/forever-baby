import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from '../../assets/logoForeverBaby.png';
import minhaConta from '../../assets/minhaConta.png';
import carrinho from '../../assets/carrinho.png';

interface IFormInputs {
	text: string;
}

const schema = yup
	.object({
		text: yup
			.string()
			.min(3)
			.matches(/^[a-zA-Z0-9]+$/, 'Não é permitido caracteres especiais')
			.required(),
	})
	.required();

const Header: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormInputs) => {
		alert('Pesquisa realizada com sucesso');
	};

	return (
		<header className='flex justify-around items-center h-[68px] lg:w-full lg:h-[134px]'>
			<Link href='/'>
				<a className='w-[84px] h-[45px] lg:w-[160px] lg:h-[85.54px]'>
					<Image src={logo} alt='logo forever baby' />
				</a>
			</Link>
			<form className='' onSubmit={handleSubmit(onSubmit)}>
				<input
					className='italic pl-3 rounded-l-lg outline-none w-[550px] h-[52px]'
					{...register('text')}
					placeholder='Qual o mimo de hoje para o seu anjinho?'
				/>
				<button
					type='submit'
					className='text-[#345C7D] bg-[#FFFFFF] font-sans font-bold rounded-r-lg h-[52px] w-[100px]'>
					BUSCAR
				</button>
				<p>{errors.text?.message}</p>
			</form>
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
	);
};

export default Header;
