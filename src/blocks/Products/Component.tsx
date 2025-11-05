import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import clsx from 'clsx'
import React from 'react'

const tabs = [
    {
        name: 'Overview',
        content: "This is the overview tab. It contains general information about the component."
    },
    {
        name: 'Documentation',
        content: "The Tabs component is built with Radix UI and styled with Firebase design system."
    },
    {
        name: 'Examples',
        content: "Tabs are useful for organizing related content into separate views."
    },
]

export default function ProductsBlock() {
  return (
    <section className="py-16">

      <div className="container flex flex-col gap-20">

        {true ? 
        
          <div className="head flex flex-col items-center">
              {true && 
              <>
                {'highlight' === 'highlight' 
                ? 
                  <div
                  className={clsx(
                      "rounded-full py-1 px-3 w-fit mb-5 text-sm font-semibold",
                       "bg-gray-100 text-gray-800" // according to appearence
                    )} 
                  >
                    Highlight
                  </div>
                : 
                  <div className="bg-muted rounded-full px-2 border-border border-[1px] w-fit mb-5">
                    <div className="flex justify-center items-center">
                      {/* {summary.lastSigned.map((user: { name: string; img_url: string }) => (
                        <div title={user.name} key={user.name} className="user-img w-8">
                          <Image className="w-full h-full object-cover" src={user.img_url} alt="user" width={100} height={100} />
                        </div>
                      ))} */}
                      <div className="ml-3 font-semibold text-sm">
                        150+ <span className="text-muted-foreground"> satisfied clients</span>
                      </div>
                    </div>
                  </div>
                }
              </>
              }
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl text-center">
                This is the title of this professional section!
              </h1>
          </div>
        : null}

        <Tabs defaultValue="overview" className="w-full flex flex-col items-center">
            <TabsList>
                {
                    tabs.map((tab) => (
                        <TabsTrigger key={tab.name} value={tab.name.toLowerCase()} className="px-6">
                            {tab.name}
                        </TabsTrigger>
                    ))
                }
            </TabsList>
            {
                tabs.map((tab) => (
                    <TabsContent key={tab.name} value={tab.name.toLowerCase()} className="space-y-4 py-4">
                        <p className="text-muted-foreground">
                            {tab.content}
                        </p>
                    </TabsContent>
                ))
            }
        </Tabs>
      </div>
    </section>
  )
}
