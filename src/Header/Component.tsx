import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { LocaleType } from '@/utilities/types'

export async function Header({lang}: {lang: LocaleType}) {
  
  const headerData: Header = await getCachedGlobal('header', 1, lang)() as Header //getCachedGlobal('header', 1)()
  // console.dir(headerData, { depth: 5 })

  return <HeaderClient data={headerData} />
}
