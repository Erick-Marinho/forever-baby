import type { NextPage } from 'next';

const Newsletter: NextPage = () => {
	return (
		<>
			<div className='flex flex-col text-center w-screen h-48 bg-[#F5717F] pt-8'>
				<h2 className='text-[#FFFFFF] text-[22px]'>NEWSLETTER FOREVER BABY</h2>
				<p className='text-[#FFFFFF] text-[14px]'>
					Cadastre-se agora para não perder nenhuma promoção
				</p>
				<form className='flex items-center justify-center pt-4'>
					<input
						className='w-[550px] h-[52px] italic pl-3 rounded-l-lg outline-none'
						placeholder='Digite aqui o seu melhor e-mail'
					/>
					<button className='text-[#345C7D] bg-[#FFFFFF] h-[52px] w-[100px] text-[14px] rounded-r-lg'>
						CADASTRAR
					</button>
				</form>
			</div>
		</>
	);
};

export default Newsletter;
