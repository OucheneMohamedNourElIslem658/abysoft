// import Description from "@/components/Description/Index"
import HeaderField from "@/components/HeaderField"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TestimonialBlock as TestimonialBlockProps } from "@/payload-types"
import React from "react"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import { Media } from "@/components/Media"

export async function getPopulatedTestimonials(ids: number[]) {
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

  // console.log('testimonials', quoats)
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        
        <HeaderField header={data.header} />
        <Carousel className="mt-20 flex flex-col gap-14 items-center" >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex gap-5 items-center">
                        <div className="bg-primary text-primary-foreground flex-shrink-0 overflow-hidden rounded-full size-10 flex items-center justify-center">
                          <Media resource={review.photo} alt={review.name} imgClassName="w-full h-full object-cover" className="w-full h-full" />
                            {/* {review.image ? (
                                <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                            ) : (
                                <h6>
                                    {review.author
                                        .split(" ")
                                        .map((n) => n[0])
                                        .slice(0, 2)
                                        .join("")}
                                </h6>
                            )} */}
                        </div>
                        <div className="flex flex-col">
                            <CardTitle className="text-lg mb-0">{review.name}</CardTitle>
                            <CardDescription className="text-sm mt-1">{review.position}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-foreground leading-relaxed">&quot;{review.quote}&quot;</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <div className="flex gap-4">
                <CarouselPrevious/>
                <CarouselNext/>
            </div>
        </Carousel>
      </div>
    </section>
  )
}
