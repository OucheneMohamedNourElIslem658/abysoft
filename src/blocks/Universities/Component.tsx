
// import Description from "@/components/Description/Index";
import { Card, CardContent } from "@/components/ui/card"
import { UniversityBlock as UniversityBlockProps } from "@/payload-types"
import HeaderField from "@/components/HeaderField"
// import { TestimonialBlock as TestimonialBlockProps } from "@/payload-types"
import React from "react"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import { Media } from "@/components/Media"



async function getPopulatedUniversities(ids: number[]) {
  if (!ids?.length) return []
  const payload = await getPayload({ config: configPromise })

  const res = await payload.find({
    collection: 'universities',
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

export const UniversitiesBlock: React.FC<UniversityBlockProps> = async (data) => {
  // console.log('data------------------------------------>', data)
  const universities = await getPopulatedUniversities(data.universities as number[])
  // console.log('universities[0].logo', universities[0].logo)
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <HeaderField header={data.header} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {universities.map((uni) => (
            <Card
              key={uni.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <Media resource={uni.logo} className="flex justify-center items-center" imgClassName="object-contain object-center group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {uni.name}
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Location:</span>
                    <span className="font-medium text-foreground">{uni.location}</span>
                  </div>

                

                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Students:</span>
                    <span className="font-medium text-foreground">{uni.studentsNumber}</span>
                  </div>
                </div>

                {/* Visual indicator
                <div className="mt-4 h-1 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-4/5 group-hover:w-full transition-all duration-300" />
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
