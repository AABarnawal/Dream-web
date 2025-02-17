import Image from 'next/image'
import { Testimonial } from '../components/Testimonial'
import { CallToAction } from '../components/CallToAction'

const testimonials = [
  {
    name: "Altamash Alam",
    company: "Flyer Infotech Pvt. Ltd.",
    role: "Director",
    content: "As a longtime client of Dreamworks, I can always depend on their commitment, technical expertise, and customer-focused approach towards risk and compliance solutions.",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Deepika Sharma",
    company: "UNICEF",
    role: "Programme Officer, Child Development & Nutrition",
    content: "It is the result of a lot of hard work, toil, and sweat of the regional and state teams. Thanks to give a special mention to Deonandan - who actually put this vision into action.",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Abhisheka Kumar",
    company: "Softage",
    role: "Head - IT Software",
    content: "Working with Dreamworks came along with a whole set of technical skills. Your continuous valuable efforts are really appreciated.",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

export default function Clients() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Clients</h1>
        <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
          <Image src="/placeholder.svg?height=100&width=200" alt="Flyer Infotech Logo" width={200} height={100} className="mx-auto" />
          <Image src="/placeholder.svg?height=100&width=200" alt="UNICEF Logo" width={200} height={100} className="mx-auto" />
          <Image src="/placeholder.svg?height=100&width=200" alt="Softage Logo" width={200} height={100} className="mx-auto" />
          <Image src="/placeholder.svg?height=100&width=200" alt="Client 4 Logo" width={200} height={100} className="mx-auto" />
          <Image src="/placeholder.svg?height=100&width=200" alt="Client 5 Logo" width={200} height={100} className="mx-auto" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <CallToAction 
          title="Join our satisfied clients"
          description="Experience the Dreamworks difference for your business today."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </div>
    </div>
  )
}

