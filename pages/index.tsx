import type { NextPage } from 'next';
import Head from 'next/head';
import Cards from '../components/Cards/Cards';
import Carousel from '../components/Carousel/Carousel';
import Copyright from '../components/Copyright/Copyright';
import Debug from '../components/debug/debug';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Newsletter from '../components/Newsletter/Newsletter';
import Title from '../components/Title/Title';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Forever Baby</title>
			</Head>
			<Debug />
			<Menu />
			<Carousel />
			<Title />
			<Cards />
			<Title />
			<Cards />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Home;
