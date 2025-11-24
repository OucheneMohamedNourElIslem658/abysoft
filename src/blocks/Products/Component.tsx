import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { TabsBlock as TabsBlockProps } from "@/payload-types"
import RichText from '@/components/RichText'
// import { blockComponents } from '../RenderBlocks'
import { FeatureBlock } from '../Feature/Component'
import { FaqsBlock } from '../FAQs/Component'
import HeaderField from '@/components/HeaderField'

const blockComponents = {
  
  faqs: FaqsBlock,
  section: FeatureBlock,
}

export const TabsBlock: React.FC<TabsBlockProps> = (tabsContainer) => {
  // console.log('tabsContainer------------------')
  // console.dir(tabsContainer.header, {depth: 4})

  
  return (
    <section className="py-16">

      <div className="container flex flex-col gap-20">

        <div className="flex justify-center">
          {tabsContainer.header && <HeaderField className="[&>div]:flex [&>div]:flex-col text-center [&>div]:items-center" header={tabsContainer.header} />}
        </div>

        <Tabs defaultValue={tabsContainer.tabs?.[0].name.toLowerCase()} className="w-full flex flex-col items-center ">
            <TabsList>
                {
                    tabsContainer.tabs?.map((tab, i) => (
                        <TabsTrigger key={i} value={tab.name.toLowerCase()} className="px-6">
                            {tab.name}
                        </TabsTrigger>
                    ))
                }
            </TabsList>
            {
                tabsContainer.tabs?.map((tab, i) => (
                    <TabsContent key={i} value={tab.name.toLowerCase()} className="rounded-3xl overflow-hidden">
                      {tab.contentType === 'blocks' 
                        ? (() => {
                          const BlockComponent = blockComponents[tab.blocksContent[0].blockType];
                          return <BlockComponent {...tab.blocksContent[0]} disableInnerContainer />;
                        })()
                        : <div className="p-10">
                            <RichText enableGutter={false} data={tab.richTextContent} />
                          </div>
                      }
                       
                    </TabsContent>
                ))
            }
        </Tabs>
      </div>
    </section>
  )
}
