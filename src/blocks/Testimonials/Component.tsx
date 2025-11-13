import HeaderField from "@/components/HeaderField"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TestimonialBlock as TestimonialBlockProps } from "@/payload-types"
import React from "react"

const allTestimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Product Manager",
    company: "Tech Innovations",
    text: "This service completely transformed how we approach web development. The quality and attention to detail are unmatched.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "Digital Solutions",
    text: "Working with this team has been an absolute pleasure. They delivered everything on time and beyond expectations.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Founder",
    company: "StartUp Pro",
    text: "The best investment we made for our business. Their expertise in modern web technologies is impressive.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Design Lead",
    company: "Creative Studio",
    text: "Outstanding collaboration and professional communication throughout the entire project. Highly recommended!",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Business Owner",
    company: "E-commerce Plus",
    text: "Our sales increased 40% after implementing their solutions. Truly transformative for our business.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 6,
    name: "David Park",
    role: "Project Manager",
    company: "Enterprise Corp",
    text: "The support team is incredibly responsive and helpful. They treat our project like it's their own.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 7,
    name: "Isabella Santos",
    role: "Marketing Director",
    company: "Global Brands",
    text: "Professional, reliable, and always going the extra mile. They're our go-to development partner.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "CEO",
    company: "Fortune 500",
    text: "Exceptional technical skills combined with business acumen. A rare find in today's market.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
]


export const TestimonialsBlock: React.FC<TestimonialBlockProps> = (data) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* <Description
            visible={true}
            showBadge={true}
            badgeLabel='Testimonials'
            clientsText='Discover why our clients love working with us. Read their stories and experiences.'
        /> */}
        {/* <HeaderField header={data.header} /> */}
        {/* Client-side style testimonials grid with "Load More" */}
        <div className="mt-20">
          <div className="md:masonry-2-col lg:masonry-3-col">
            {allTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-lg transition-shadow duration-300 break-inside mb-4"
                style={{
            gridColumn:
              index % 3 === 2 && index !== allTestimonials.length - 1
                ? "span 1"
                : undefined,
                }}
              >
                <CardContent className="p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.4 9.587l-5.7 5.56L19.336 24 12 19.897 4.664 24l1.636-8.853-5.7-5.56 7.732-1.569L12 .587z" />
                </svg>
              ))}
            </div>

            <p className="mb-6 text-md text-muted-foreground">
              &quot;{testimonial.text}&quot;
            </p>

            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <img
                  src="https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg"
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-md">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
