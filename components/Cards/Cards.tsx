import React from 'react';
import Card from '../Card/Card';

import type { NextPage } from 'next';
import logo from '../../assets/logoForeverBaby.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	};
	return (
		<>
			<Slider {...settings}>
				{elements.map((item: Elements, index: number): React.ReactElement => {
					return (
						<div key={index} className='ml-10 pb-8'>
							<Card text={item.text} price={item.price} img={item.img} />
						</div>
					);
				})}
			</Slider>
		</>
	);
};

export default Cards;
