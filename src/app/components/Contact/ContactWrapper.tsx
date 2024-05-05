import React from "react";
import ContactButton from "../ContactButton/ContactButton";
import linkedin from "@/assets/img/linkedin.png";
import whatsapp from "@/assets/img/whatsapp.png";
import github from "@/assets/img/github.png";
import gmail from "@/assets/img/gmail.png";
import instagram from "@/assets/img/instagram.png";
import { HeaderBl5 } from "@/app/format/BlackTypography";
import { TextL1 } from "@/app/format/LightTypography";

const ContactWrapper = () => {
	return (
		<div className="mb-[56px]">
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] w-full items-center'>
				<TextL1>Si necesitas mi perfil</TextL1>
				<HeaderBl5>Contáctame</HeaderBl5>
			</div>
			<div className='flex justify-center gap-[24px]  items-center '>
				<ContactButton
					contactLink='https://www.instagram.com/andreaencarnaciong'
					buttonColor='border-instagram'
					image={instagram}
				/>
				<ContactButton
					contactLink='https://www.linkedin.com/in/andreeg'
					buttonColor='border-linkedin'
					image={linkedin}
				/>
				<ContactButton
					contactLink='mailto:andrea.encarnaciong@gmail.com?cc=andrea_206_93@hotmail.com'
					buttonColor='border-gmail'
					image={gmail}
				/>
				<ContactButton
					contactLink='https://wa.me/51999560439'
					buttonColor=' border-whatsapp'
					image={whatsapp}
				/>
				{/* <ContactButton
					contactLink='https://www.linkedin.com/in/andreeg'
					buttonColor='border-github'
					image={github}
				/> */}
			</div>
		</div>
	);
};

export default ContactWrapper;
