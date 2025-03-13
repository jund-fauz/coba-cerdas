import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
		<div className='py-20 text-white bg-gradient-to-r from-indigo-600 to-purple-600'>
			<div className='px-6 mx-auto max-w-7xl'>
				<div className='max-w-3xl'>
					<h1 className='mb-6 text-5xl font-bold'>
						Kuasai ilmu pengetahuan dengan pengalaman interaktif
					</h1>
					<p className='mb-8 text-xl text-indigo-100'>
						Belajar ilmu pengetahuan melalui pengamatan dan simulasi praktik & proyek dunia
						nyata. Bergabunglah dengan para pelajar yang merasakan manfaatnya.
					</p>
					<button className='flex items-center px-8 py-3 space-x-2 font-semibold text-indigo-600 transition-colors bg-white rounded-lg hover:bg-indigo-50'>
						<span>Belajar Sekarang</span>
						<ArrowRight className='w-5 h-5' />
					</button>
				</div>
			</div>
		</div>
	)
}