import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import formasPagamento from '../../assets/formasPagamento.png';

const Footer: NextPage = () => {
	return (
		<>
			<div className='flex flex-col text-center w-full h-72 border-solid border-2 bg-[#F1F1F1]'>
				<h2>VISITE NOSSAS REDES SOCIAIS</h2>
				<div className='flex justify-center'>
					<div className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'></div>
					<div className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'></div>
					<div className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'></div>
					<div className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'></div>
				</div>
				<div className='flex justify-evenly items-center w-full h-12'>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>PERFUME INFANTIL</a>
					</Link>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>SABONETES</a>
					</Link>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>PÓS-BANHO</a>
					</Link>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>ASSADURAS</a>
					</Link>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>HIDRATANTES</a>
					</Link>
					<Link href='/'>
						<a className='text-[#345C7D] text-[14px]'>LENÇOS UMEDECIDOS</a>
					</Link>
				</div>
				<h2>FORMAS DE PAGAMENTO</h2>
				<div>
					<Image
						src={formasPagamento}
						alt='formas de pagamento'
						width='250px'
						height='60px'
					/>
				</div>
			</div>
		</>
	);
};

export default Footer;
