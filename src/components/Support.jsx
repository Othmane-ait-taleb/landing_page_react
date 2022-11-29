import React from 'react'
import {AiFillPhone, AiOutlineArrowRight} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
import {MdMemory} from 'react-icons/md'
import supportimg from '../assets/support.jpeg'
const Support = () => {
  return (
	<div children className='w-full h-screen mt-24'>
		<div children className='w-full h-[700px] bg-gray-900/90 absolute'>
			<img className='w-full h-full object-cover mix-blend-overlay' src={supportimg} alt="support img" />
		</div>
		<div className='max-w-[1240px] mx-auto text-white relative'>
			<div className='px-4 py-12'>
				<h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
				<h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
				<p className='py-4 text-3xl text-slate-300'>He my polite be object oh change. Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to.</p>
			</div>

			<div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 text-black'>
				<div className='bg-white rounded-xl shadow-2xl'>
					<div className='p-8'>
						<AiFillPhone className='w-16 h-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
						<h3 className='font-bold text-2xl my-6'>Sales</h3>
						<p className='text-gray-600 text-xl'>Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar.</p>
					</div>
					<div className='bg-slate-100 pl-8 py-4'><p className='flex items-center text-indigo-600'>Contact us  <AiOutlineArrowRight className='ml-3'/></p> </div>
				</div>
				<div className='bg-white rounded-xl shadow-2xl'>
					<div className='p-8'>
						<BiSupport className='w-16 h-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
						<h3 className='font-bold text-2xl my-6'>Technical support</h3>
						<p className='text-gray-600 text-xl'>Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar.</p>
					</div>
					<div className='bg-slate-100 pl-8 py-4'><p className='flex items-center text-indigo-600'>Contact us  <AiOutlineArrowRight className='ml-3'/></p> </div>
				</div>
				<div className='bg-white rounded-xl shadow-2xl'>
					<div className='p-8'>
						<MdMemory className='w-16 h-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
						<h3 className='font-bold text-2xl my-6'>Media inquiries</h3>
						<p className='text-gray-600 text-xl'>Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar.</p>
					</div>
					<div className='bg-slate-100 pl-8 py-4'><p className='flex items-center text-indigo-600'>Contact us  <AiOutlineArrowRight className='ml-3'/></p> </div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Support