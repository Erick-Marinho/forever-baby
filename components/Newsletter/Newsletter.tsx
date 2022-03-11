import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
	email: string;
}

const schema = yup
	.object({
		email: yup.string().email().required(),
	})
	.required();

const Newsletter: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: any) => {
		const response = await fetch(
			'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const result = await response.json();
		console.log(result);
	};

	return (
		<>
			<div className='flex flex-col text-center w-screen h-48 bg-[#F5717F] pt-8 mt-8'>
				<h2 className='text-[#FFFFFF] text-[22px]'>NEWSLETTER FOREVER BABY</h2>
				<p className='text-[#FFFFFF] text-[14px]'>
					Cadastre-se agora para não perder nenhuma promoção
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex items-center justify-center pt-4'>
					<input
						className='w-[550px] h-[52px] italic pl-3 rounded-l-lg outline-none'
						placeholder='Digite aqui o seu melhor e-mail'
						{...register('email')}
					/>
					<button className='text-[#345C7D] bg-[#FFFFFF] h-[52px] w-[100px] text-[14px] rounded-r-lg'>
						CADASTRAR
					</button>
					<p>{errors.email?.message}</p>
				</form>
			</div>
		</>
	);
};

export default Newsletter;
