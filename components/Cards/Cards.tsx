import type { NextPage } from 'next';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import logo from '../../assets/logoForeverBaby.png';
import Card from '../Card/Card';

interface Elements {
	img: StaticImageData;
	text: string;
	price: string;
}

const elements: Elements | Elements[] = [
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
	{
		img: logo,
		text: 'Lorem ipsum lorem ipsum',
		price: 'R$ 99,99',
	},
];

const Cards: NextPage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};

	// ml-10
	return (
		<>
			<Slider {...settings}>
				{elements.map((item: Elements, index: number): React.ReactElement => {
					return (
						<div
							key={index}
							className='p-2 max-w-[190px] lg:mx-4 my-0 lg:p-0 lg:max-w-[300px]'>
							<Card text={item.text} price={item.price} img={item.img} />
						</div>
					);
				})}
			</Slider>
		</>
	);
};

export default Cards;
