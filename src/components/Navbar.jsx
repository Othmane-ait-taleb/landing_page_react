import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import {AiOutlineCloseCircle} from 'react-icons/ai';
const Navbar = () => {

	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);
	return (
		<div className='bg-zinc-200 fixed w-screen drop-shadow-lg h-[80px] z-10 '>
			<div className="px-2 flex justify-between items-center w-full h-full">
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand</h1>
					<ul className="hidden md:flex ">
						<li>Home</li>
						<li>About</li>
						<li>Support</li>
						<li>Platforms</li>
						<li>Pricing</li>
					</ul>
				</div>
				<div className='hidden md:flex pr-4'>
					<button className='border-none bg-transparent text-black mr-4'>Sign In </button>
					<button className='px-8 py-3'>Sing Up</button>
				</div>
				<div className=' md:hidden' onClick={handleClick}>
					{!nav ? <TiThMenu className='w-6 h-6' />:<AiOutlineCloseCircle className='w-6 h-6' />}
				</div>
			</div>
			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
				<li className='border-b-2 border-zinc-300 w-full'>Home</li>
				<li className='border-b-2 border-zinc-300 w-full'>About</li>
				<li className='border-b-2 border-zinc-300 w-full'>Support</li>
				<li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
				<li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
				<div className='flex flex-col'>
					<button className='bg-transparent text-black px-8 py-3 mb-2'> Sign In </button>
					<button className='px-8 py-3'> Sign Up</button>
				</div>
			</ul>

		</div>
	)
}

export default Navbar