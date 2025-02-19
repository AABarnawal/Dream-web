import Image from 'next/image'

const clients = [
  { name: '12v', logo: '/clients/12v.jpeg' },
  { name: 'UNICEF', logo: '/clients/unicef.png' },
  { name: 'ssb', logo: '/clients/ssb.png' },
  { name: 'chips', logo: '/clients/chips.jpeg' },
  { name: 'isro', logo: '/clients/isro.png' },
  { name: 'fgk', logo: '/clients/fgk.jpg' },
  { name: 'iim', logo: '/clients/iim.png' },
  { name: 'jak', logo: '/clients/jak.jpeg' },
  { name: 'japit', logo: '/clients/japit.jpeg' },
  { name: 'Softage', logo: '/clients/softage.png' },
  { name: 'Tourism', logo: '/clients/tourism.png' },
  { name: 'Jharkhand Government', logo: '/clients/jh-gov.png' },
  { name: 'CISF', logo: '/clients/cisf.png' },
  { name: 'nepa', logo: '/clients/nepa.jpeg' },
  { name: 'mrb', logo: '/clients/mrb.png' },
  // { name: 'jscb', logo: '/clients/jscb.jpg' },
  // { name: 'phsc', logo: '/clients/phsc.png' },
  
]

export function ClientLogos() {
  return (
    <section id="clients" className="py-16 bg-gray-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 dark:text-white mb-16">
          Trusted by industry-leading companies worldwide
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-12 gap-y-16 sm:max-w-xl sm:grid-cols-3 sm:gap-x-16 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-20 lg:gap-y-20">
          {clients.map((client) => (
            <div 
              key={client.name} 
              className="flex justify-center items-center hover:scale-105 transition-transform duration-300 p-4"
            >
              <div className="relative w-[160px] h-[90px] bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4">
                <Image
                  className="object-contain"
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="160px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

