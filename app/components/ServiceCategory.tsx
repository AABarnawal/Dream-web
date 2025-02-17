import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceItem {
  title: string
  link: string
}

interface ServiceCategoryProps {
  title: string
  services: ServiceItem[]
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 p-6 bg-gray-100 dark:bg-zinc-800">
        {title}
      </h2>
      <div className="flex-grow p-6 space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="transition-all duration-300 hover:translate-x-2"
          >
            <Link
              href={service.link}
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
            >
              <span className="text-red-600 dark:text-red-400 mr-2">•</span>
              {service.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

