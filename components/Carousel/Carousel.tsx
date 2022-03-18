import type { NextPage } from 'next';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';

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
						<Image src={image1} alt='imagens' layout='fill' objectFit='cover' />
					</div>
					<div className='w-full h-96 relative'>
						<Image src={image2} alt='imagens' layout='fill' objectFit='cover' />
					</div>
					<div className='w-full h-96 relative'>
						<Image src={image3} alt='imagens' layout='fill' objectFit='cover' />
					</div>
					<div className='w-full h-96 relative'>
						<Image src={image4} alt='imagens' layout='fill' objectFit='cover' />
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel;
