import type { NextPage } from 'next';
import Image from 'next/image';
import logo from '../../assets/logoForeverBaby.png';

const Header: NextPage = () => {
	return (
		<>
			<header className='flex justify-between items-center w-full h-[134px]'>
				<div className='w-[160px] h-[85.54px]'>
					<Image src={logo} alt='logo forever baby' />
				</div>
				<form>
					<input
						className='w-[650px] h-[52px]'
						placeholder='Qual o mimo de hoje para o seu anjinho?'
					/>
					<button className='text-[#345C7D] bg-[#FFFFFF] h-[52px]'>
						BUSCAR
					</button>
				</form>
				<div className='w-10 h-10 mx-1.5 rounded-full bg-[#F5717F]'>
					<span className='text-[10px] text-[#FFFFFF] w-[50px] h-[12px]'>
						MINHA CONTA
					</span>
				</div>
				<div className='flex flex-col'>
					<div className='w-10 h-10 mx-1.5 rounded-full bg-[#F5717F]'>
						<span className='text-[10px] text-[#FFFFFF] w-[50px] h-[12px]'>
							CARRINHO
						</span>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
