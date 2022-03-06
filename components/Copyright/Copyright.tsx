import type { NextPage } from 'next';

const Copyright: NextPage = () => {
	return (
		<div className='w-full h-full flex justify-center bg-[#FFFFFF]'>
			<div className='max-w-[808px] flex flex-col text-center bg-[#FFFFFF]'>
				<p className='text-[#AAAAAA] text-xs'>2022 www.foreverliss.com.br</p>
				<p className='text-[#AAAAAA] text-xs'>Todos os direitos reservados.</p>
				<br />
				<p className='text-[#AAAAAA] text-xs'>
					Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque
					sujeitos a alterações e podem variar sem aviso prévio. Em caso de
					divergência no valor do produto, irá prevalecer sempre o valor do
					carrinho de compras.
				</p>
				<p className='text-[#AAAAAA] text-xs'>
					FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José
					Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ:
					08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112
				</p>
			</div>
		</div>
	);
};

export default Copyright;
