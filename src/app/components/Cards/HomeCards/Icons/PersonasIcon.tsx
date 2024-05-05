const PersonasIcon = () => {
	return (
		<div className='h-[24px]'>
			<div>
				<svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					className={`bg-none fill-none `}
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'
						className={` dark:stroke-blanco    dark:disabled:stroke-[#9747ff]    stroke-negro1    disabled:bg-purple9 `}
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			
			</div>
		</div>
	);
};

export default PersonasIcon;
