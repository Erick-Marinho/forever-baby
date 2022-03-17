import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import formasPagamento from '../../assets/formasPagamento.png';
import instagram from '../../assets/instagram.png';
import tiktok from '../../assets/tiktok.png';
import youtube from '../../assets/youtube.png';

const Footer: NextPage = () => {
	return (
		<>
			<div className='flex flex-col text-center w-full h-72 bg-[#F1F1F1] pt-8'>
				<h2 className='text-[#345C7D]'>VISITE NOSSAS REDES SOCIAIS</h2>
				<div className='flex justify-center pt-2 pb-4'>
					<Link href='https://www.instagram.com/foreverliss/'>
						<a className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'>
							<Image src={instagram} alt='instagram' />
						</a>
					</Link>
					<Link href='https://www.facebook.com/foreverliss'>
						<a className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'>
							<Image src={instagram} alt='instagram' />
						</a>
					</Link>
					<Link href='https://www.youtube.com/c/ForeverLissOficial'>
						<a className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'>
							<Image src={youtube} alt='youtube' />
						</a>
					</Link>
					<Link href='https://www.tiktok.com/@foreverlissprofessional'>
						<a className='w-10 h-10 mx-1.5 rounded-full border-1 border-indigo-600 bg-[#f29595]'>
							<Image src={tiktok} alt='youtube' />
						</a>
					</Link>
				</div>
				<div className='flex flex-wrap justify-evenly items-center w-full h-12 mb-6'>
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
				<h2 className='text-[#345C7D]'>FORMAS DE PAGAMENTO</h2>
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
