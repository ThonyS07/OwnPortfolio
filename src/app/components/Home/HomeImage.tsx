import Image from "next/image";
import React from "react";
import profileImageDesktopLarge from "@/assets/img/profileImageDesktopLarge.png";
import profileImageDesktop from "@/assets/img/profileAndreaDesktopS.png";
import profileImageTablet from "@/assets/img/profileAndreaTablet.png";

const HomeImage = () => {
	return (
		<div>
			<div className='hidden md:flex lg:hidden'>
				<Image
					src={profileImageTablet}
					alt='profile'
					width={372}
					height={365}
				/>
			</div>
			<div className='hidden lg:flex xl:hidden h-[490px] w-[500px]'>
				<Image
					src={profileImageDesktopLarge}
					alt='profile'
					width={500}
					height={490}
				/>
			</div>
			<div className='hidden xl:flex mr-[104px]'>
				<Image
					src={profileImageDesktopLarge}
					alt='profile'
					width={564}
					height={553}
				/>
			</div>
		</div>
	);
};

export default HomeImage;
