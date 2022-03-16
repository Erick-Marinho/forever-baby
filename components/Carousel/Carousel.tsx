import type { NextPage } from 'next';
import Slider from 'react-slick';
import Image from 'next/image';
import imagem2 from '../../assets/imagem2.jpeg';
import imagem3 from '../../assets/image3.jpeg';
import imagem4 from '../../assets/image4.jpeg';
import imagem5 from '../../assets/image5.jpeg';
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
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<>
			<div className='bg-white w-full'>
				<Slider {...settings}>
					<div className='w-full h-96 relative'>
						<Image
							src={imagem2}
							alt='imagens'
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<div className='w-full h-96 relative'>
						<Image
							src={imagem3}
							alt='imagens'
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<div className='w-full h-96 relative'>
						<Image
							src={imagem4}
							alt='imagens'
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<div className='w-full h-96 relative'>
						<Image
							src={imagem5}
							alt='imagens'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel;
