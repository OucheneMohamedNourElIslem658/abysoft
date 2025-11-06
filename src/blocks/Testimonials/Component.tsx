import Description from "@/components/Description/Index"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ReviewItem {
  id: number
  author: string
  title: string
  content: string
  rating: number
  image?: string
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    title: "Exceptional Service",
    content: "Outstanding experience! The team went above and beyond to ensure everything was perfect.",
    rating: 5,
  },
  {
    id: 2,
    author: "Mike Chen",
    title: "Highly Recommended",
    content: "Professional, efficient, and incredibly helpful. Will definitely use again!",
    rating: 5,
  },
  {
    id: 3,
    author: "Emma Davis",
    title: "Great Value",
    content: "Excellent quality at competitive pricing. Exceeded my expectations in every way.",
    rating: 5,
  },
  {
    id: 4,
    author: "James Wilson",
    title: "Top Notch",
    content: "Best in the industry. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    id: 5,
    author: "Lisa Martinez",
    title: "5-Star Experience",
    content: "From start to finish, a seamless and delightful experience. Truly impressed!",
    rating: 5,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <Description
            visible={true}
            showBadge={true}
            badgeLabel='Testimonials'
            clientsText='Discover why our clients love working with us. Read their stories and experiences.'
        />

        <Carousel className="mt-20 flex flex-col gap-14 items-center" >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex gap-5 items-center">
                        <div className="bg-primary text-primary-foreground rounded-full size-10 flex items-center justify-center">
                            {review.image ? (
                                <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                            ) : (
                                <h6>
                                    {review.author
                                        .split(" ")
                                        .map((n) => n[0])
                                        .slice(0, 2)
                                        .join("")}
                                </h6>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <CardTitle className="text-lg mb-0">{review.title}</CardTitle>
                            <CardDescription className="text-sm mt-1">{review.author}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-foreground leading-relaxed">&quot;{review.content}&quot;</p>
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
