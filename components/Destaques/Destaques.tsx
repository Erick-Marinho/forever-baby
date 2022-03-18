import type { NextPage } from 'next';

const Title: NextPage = () => {
	return (
		<div className='flex align-center justify-center w-full'>
			<div className=''>
				<h1 className='text-[#FFFFFF] text-[22px] font-[Roboto] font-bold pt-8 pb-4'>
					FOREVER BABY
					<span className='text-[#345C7D] font-[Roboto] font-bold underline decoration-4 decoration-red-400'>
						{' '}
						DESTAQUES
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Title;
