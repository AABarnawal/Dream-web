import Image from 'next/image'

const clients = [
  { name: 'UNICEF', logo: '/clients/unicef.png' },
  { name: 'Softage', logo: '/clients/softage.png' },
  { name: 'Tourism', logo: '/clients/tourism.png' },
  { name: 'Jharkhand Government', logo: '/clients/jh-gov.png' },
  { name: 'CISF', logo: '/clients/cisf.png' },
]

export function ClientLogos() {
  return (
    <div className="bg-gray-100 dark:bg-zinc-950 py-24 dark:text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
          Trusted by industry-leading companies worldwide
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center">
              <div className="relative w-[150px] h-[80px]">
                <Image
                  className="object-contain"
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="150px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

