import React from "react";
import HomeCard from "../Cards/HomeCards/HomeCard";
import FamiliaIcon from "../Cards/HomeCards/Icons/FamiliaIcon";
import PersonasIcon from "../Cards/HomeCards/Icons/PersonasIcon";
import ViajesIcon from "../Cards/HomeCards/Icons/ViajesIcon";

const ProfileCards = () => {
	return (
		<div className='flex items-center justify-center flex-col w-full md:w-[684px] lg:w-full gap-[24px] md:flex-row xl:mx-[104px] md:flex-wrap lg:flex-nowrap'>
			<div>
				<HomeCard
					titulo='Familia'
					text='Soy un miembro feliz de una gran familia, sin duda es parte de mi identidad laboral tambien.'>
					<FamiliaIcon />
				</HomeCard>
			</div>
			<div className='my-[0px] '>
				<HomeCard
					titulo='Danza'
					text='He sido participante de distintos elencos de danza, donde aprendí a ser parte de un equipo.'>
					<PersonasIcon />
				</HomeCard>
			</div>
			<div className='my-[0px] '>
				<HomeCard
					titulo='Viajes'
					text='Amo con locura viajar y conocer diferentes culturas, esto ayuda mucho a mi curiosidad'>
					<ViajesIcon />
				</HomeCard>
			</div>
			<div className=''>
				<HomeCard
					titulo='Conversaciones'
					text='Me gusta mucho conversar, encuentro fascinante conocer que hay en las cabezas de las personas'>
					<ViajesIcon />
				</HomeCard>
			</div>
		</div>
	);
};

export default ProfileCards;
