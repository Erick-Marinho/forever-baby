import type { NextPage } from 'next';
import Card from '../Card/Card';
import logo from '../../assets/logoForeverBaby.png';
import React from 'react';

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
];
const Cards: NextPage = () => {
	return (
		<div className='flex w-full justify-evenly pb-14'>
			{elements.map((item: Elements, index: number): React.ReactElement => {
				return (
					<Card
						key={index}
						text={item.text}
						price={item.price}
						img={item.img}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
