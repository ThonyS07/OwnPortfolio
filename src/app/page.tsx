"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/Home/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import AboutMe from "@/app/components/Profile/AboutMe";
import Projects from "./components/Projects/Projects";

const Home = () => {
	return (
		<div className='w-full dark:bg-negro3'>
			<NavBar />
			<div className='w-full dark:bg-negro3 sm:px-[16px] md:px-[44px] lg:px-[107px] xl:px-[204px] pb-1'>
				<section id='inicio'>
					<HomeContent />
				</section>
				<div className=' sm:px-[25px] md:px-[42px] lg:px-[52px] xl:px-[104px]'>
					<section id='sobre mi'>
						<AboutMe />
					</section>
					<section id='mis pproyectos'>
						<Projects />
					</section>
					<div className='flex-col justify-center items-center'>
						<section id='contactame'>
							<ContactWrapper />
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
