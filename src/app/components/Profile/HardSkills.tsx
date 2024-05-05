import React from 'react'
import ProgressBar from '../Progress/ProgressBar';

const HardSkills = () => {
  return (
		<div className='flex md:flex-col lg:flex-row xl:flex-row lg:w-[1152px] xl:w-[1512px] flex-wrap justify-evenly gap-[24px]'>
			<ProgressBar text='Ux Research' level={3} />
			<ProgressBar text='Prototipado' level={4} />
			<ProgressBar text='Testing' level={3} />
			<ProgressBar text='Arquitectura de la información' level={4} />
			<ProgressBar text='Figma' level={3} />
			<ProgressBar text='Metodologias ágiles' level={3} />
		</div>
	);
}

export default HardSkills
