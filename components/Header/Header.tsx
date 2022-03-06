import type { NextPage } from 'next';

const Header: NextPage = () => {
	return (
		<>
			<header className='flex justify-around items-center w-full h-32'>
				<div>Logo</div>
				<div>Search</div>
				<div>Minha Conta</div>
				<div>Carrinho</div>
			</header>
		</>
	);
};

export default Header;
