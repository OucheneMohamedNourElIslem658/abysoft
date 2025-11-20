"use client"

import Description from "@/components/Description/Index";
import { Card, CardContent } from "@/components/ui/card"

const universities = [
  {
    id: 1,
    name: "Stanford University",
    location: "Stanford, CA",
    founded: "1891",
    students: "17,500+",
    image: "https://uit.stanford.edu/service/sallie", // Stanford ALL-Image Exchange (SALLIE) - requires SUNet ID
  },
  {
    id: 2,
    name: "MIT",
    location: "Cambridge, MA",
    founded: "1861",
    students: "1,100+",
    image: "https://betterworld.mit.edu/aerial-views-of-mit/", // MIT Aerial Views page (check for image links)
  },
  {
    id: 3,
    name: "Harvard University",
    location: "Cambridge, MA",
    founded: "1636",
    students: "23,000+",
    image: "https://unsplash.com/s/photos/harvard-university", // Unsplash (free high-quality images, check license)
  },
  {
    id: 4,
    name: "UC Berkeley",
    location: "Berkeley, CA",
    founded: "1868",
    students: "45,000+",
    image: "https://gallery.berkeley.edu/", // UC Berkeley Photo Gallery
  },
  {
    id: 5,
    name: "Yale University",
    location: "New Haven, CT",
    founded: "1701",
    students: "12,500+",
    image: "https://campusphotos.yale.edu/", // Yale University Campus Photos
  },
  {
    id: 6,
    name: "Princeton University",
    location: "Princeton, NJ",
    founded: "1746",
    students: "8,500+",
    image: "https://communications.princeton.edu/guides-tools/photo-libraries", // Princeton University Photo Libraries
  },
  {
    id: 7,
    name: "Caltech",
    location: "Pasadena, CA",
    founded: "1891",
    students: "1,250+",
    image: "https://identity.caltech.edu/templatesresources/flickr", // Caltech Flickr Photo Library
  },
  {
    id: 8,
    name: "University of Chicago",
    location: "Chicago, IL",
    founded: "1890",
    students: "17,000+",
    image: "https://photoarchive.lib.uchicago.edu/", // University of Chicago Photographic Archive
  },
];

export default function UniversitiesBlock() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <Description 
            visible={true}
            showBadge={true}
            badgeLabel='Top Universities'
            clientsText='Explore some of the world&apos;s leading universities known for their academic excellence and vibrant campus life.'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {universities.map((uni) => (
            <Card
              key={uni.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src="https://www.harvard.edu/wp-content/uploads/2023/11/110823_Features_KS_713-scaled.jpg"
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
                    <span>Founded:</span>
                    <span className="font-medium text-foreground">{uni.founded}</span>
                  </div>

                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Students:</span>
                    <span className="font-medium text-foreground">{uni.students}</span>
                  </div>
                </div>

                {/* Visual indicator */}
                <div className="mt-4 h-1 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-4/5 group-hover:w-full transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
