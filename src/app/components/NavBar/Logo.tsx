import Image from "next/image";
import logo from "@/assets/img/logo.svg";





const Logo = () => {
	return (
		<div className='flex h-[42px]'>
			<Image src={logo} alt='logo' width={42} height={40} />
		</div>
	);
};

export default Logo;
