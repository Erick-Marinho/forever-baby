import type { NextPage } from 'next';
import Card from '../Card/Card';
import logo from '../../assets/logoForeverBaby.png';

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
		<>
			{elements.map((item, index: number): any => {
				return (
					<Card
						key={index}
						text={item.text}
						price={item.price}
						img={item.img}
					/>
				);
			})}
		</>
	);
};

export default Cards;
