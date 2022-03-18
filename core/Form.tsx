import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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

const Form = () => {
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
		<>
			<form className='flex' onSubmit={handleSubmit(onSubmit)}>
				<input
					className='w-full h-[52px] italic pl-3 rounded-l-lg outline-none text-[14px]'
					{...register('text')}
					placeholder='Qual o mimo de hoje para o seu anjinho?'
				/>
				<button
					type='submit'
					className='text-[#345C7D] bg-[#FFFFFF] font-[Robot] font-bold rounded-r-lg h-[52px] w-[100px]'>
					BUSCAR
				</button>
			</form>
			<span className='text-[red]'>{errors.text?.message}</span>
		</>
	);
};

export default Form;
