import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from "next/image";

const ContactButton = ({
	contactLink,
  buttonColor,
  image
}: {
	contactLink: string;
    buttonColor: string;
  image: StaticImageData
}) => {
	return (
		<div >
			<Link href={contactLink}>
				<div
					className={`w-[64px] h-[64px] rounded-full ${buttonColor}  border-[3px] flex justify-center items-center `}>
          <Image src={image} alt='contact' width={32.5} height={32.5} />
          
				</div>
			</Link>
		</div>
	);
};

export default ContactButton
