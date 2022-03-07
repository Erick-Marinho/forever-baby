import type { NextPage } from 'next';

const Newsletter: NextPage = () => {
	return (
		<>
			<div className='flex flex-col text-center w-full h-48 bg-[#F5717F]'>
				<h2 className='text-[#FFFFFF] text-[22px]'>NEWSLETTER FOREVER BABY</h2>
				<p className='text-[#FFFFFF] text-[14px]'>
					Cadastre-se agora para não perder nenhuma promoção
				</p>
				<form>
					<input
						className='w-[650px] h-[52px]'
						placeholder='Digite aqui o seu melhor email'
					/>
					<button className='text-[#345C7D] bg-[#FFFFFF] h-[52px]'>
						CADASTRAR
					</button>
				</form>
			</div>
		</>
	);
};

export default Newsletter;
