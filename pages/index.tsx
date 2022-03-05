import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Forever Baby</title>
			</Head>
			<Header />
		</>
	);
};

export default Home;
