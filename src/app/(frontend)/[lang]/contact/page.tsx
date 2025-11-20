import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import Description from "@/components/Description/Index"
import { getCachedGlobal } from "@/utilities/getGlobals"
import { Contact } from "@/payload-types"

export default async function ContactPage() {
  const contactData = await getCachedGlobal('contact', 1)() as Contact
  console.log('contactData', contactData)
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 !pt-28">
        {/* Header */}
        {/* <Description
          showBadge={true}
          visible={true}
          clientsText="Have questions or need assistance? Our team is here to help! Reach out to us through the contact form or via the provided contact details below. We look forward to connecting with you."
          badgeLabel="Contact Us"
          badgeType="highlight"
        /> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 mt-20">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/office-workspace-team-collaboration-OO4TYfe1zgxe0FddQSt4pYcYIgwzZu.jpg" 
                alt="Office" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex gap-5 items-center">
                    <Mail className="w-6 h-6 text-primary inline" /> 
                    <div> Email </div>
                  </CardTitle>
                  <CardDescription>hello@example.com</CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex gap-4 items-center">
                    <Phone className="w-6 h-6 text-primary inline" />
                    <div>Phone</div>
                  </CardTitle>
                  <CardDescription>+1 (555) 123-4567</CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex gap-4 items-center">
                    <MapPin className="w-6 h-6 text-primary inline" />
                    <div>Address</div>
                  </CardTitle>
                  <CardDescription>123 Tech Street, San Francisco, CA 94105</CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex gap-4 items-center">
                    <Clock className="w-6 h-6 text-primary inline" />
                    <div>Working Hours</div>
                  </CardTitle>
                  <CardDescription>Mon - Fri: 9:00 AM - 6:00 PM</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
