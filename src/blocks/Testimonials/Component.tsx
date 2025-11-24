// import Description from "@/components/Description/Index"
import HeaderField from "@/components/HeaderField"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialBlock as TestimonialBlockProps } from "@/payload-types"
import React from "react"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import { Media } from "@/components/Media"

async function getPopulatedTestimonials(ids: number[]) {
  if (!ids?.length) return []
  const payload = await getPayload({ config: configPromise })

  const res = await payload.find({
    collection: 'testimonials',
    where: {
      id: {
        in: ids,
      },
    },
    depth: 1,
    limit: ids.length,
  })

  return res.docs
}

export const TestimonialsBlock: React.FC<TestimonialBlockProps> = async (data) => {
  // console.log('first--------------------------------.')
  // console.dir( data, { depth: null } )

  const reviews = await getPopulatedTestimonials(data.testimonials as number[])

  // console.log('reviews', reviews)

  // console.log('testimonials', quoats)
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        
        <HeaderField header={data.header} />
        <div className="mt-20">
          <div className="md:masonry-2-col lg:masonry-3-col">
            {reviews.map((testimonial, index) => (
              <Card
          key={testimonial.id}
          className="hover:shadow-lg transition-shadow duration-300 break-inside mb-4"
          style={{
            gridColumn:
              index % 3 === 2 && index !== reviews.length - 1
                ? "span 1"
                : undefined,
          }}
              >
          <CardContent className="p-6">
            {/* <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
                <svg
            key={i}
            className="w-4 h-4 fill-primary text-primary"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
                >
            <path d="M12 .587l3.668 7.431L23.4 9.587l-5.7 5.56L19.336 24 12 19.897 4.664 24l1.636-8.853-5.7-5.56 7.732-1.569L12 .587z" />
                </svg>
              ))}
            </div> */}

            <p className="mb-6 text-md text-muted-foreground">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                {testimonial.photo ? (
                  <Media
                    resource={testimonial.photo}
                    alt={testimonial.name}
                    imgClassName="w-full h-full object-cover"
                    className="w-full h-full"
                  />
                      ) : (
                        (() => {
                          const name = (testimonial.name ?? "").trim();
                          const parts = name.split(/\s+/).filter(Boolean);
                          const initials =
                            parts.length >= 2
                              ? (parts[0][0] + parts[1][0]).toUpperCase()
                              : name.slice(0, 2).toUpperCase() || "?";

                          return (
                            <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground">
                              <span className="font-semibold">{initials}</span>
                            </div>
                          );
                        })()
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-md">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
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
