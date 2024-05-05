

const HamburguerButton = () => {

	return (
		<div className='h-[24px]'>
			<button>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={24}
						height={24}
						className={`bg-none fill-none `}>
						<path
							className={` dark:stroke-blanco    dark:disabled:stroke-[#9747ff]    stroke-negro1    disabled:bg-purple9 `}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M1 12h22M1 5h22M1 19h22'
						/>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default HamburguerButton;
