import type { NextPage } from 'next';
import Slider from 'react-slick';
import Image from 'next/image';
import logo from '../../assets/logoForeverBaby.png';
import imagem2 from '../../assets/imagem2.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: NextPage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<div className='bg-[#FFFFFF]'>
				<Slider {...settings}>
					<div className='w-screen h-96'>
						<Image src={logo} alt='imagens' />
					</div>
					<div className='w-screen h-96'>
						<Image src={logo} alt='imagens' />
					</div>
					<div className='w-screen h-96'>
						<Image src={logo} alt='imagens' />
					</div>
					<div className='w-screen h-96'>
						<Image src={logo} alt='imagens' />
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel;
