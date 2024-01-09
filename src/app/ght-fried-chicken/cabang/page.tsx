import { Metadata } from 'next'

import { CabangContent } from '@features/ght-fried-chicken/cabang/content/Content'

export const metadata: Metadata = {
  title: 'Demo - Gak Habis Thinking Fried Chicken',
  description: 'Demo website for Gak Habis Thinking Fried Chicken',
}

export default function Cabang() {
  return (
    <CabangContent/>
  )
}
