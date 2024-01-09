import { Metadata } from 'next'

import { KemitraanContent } from '@features/ght-fried-chicken/kemitraan/Content'

export const metadata: Metadata = {
  title: 'Demo - Gak Habis Thinking Fried Chicken',
  description: 'Demo website for Gak Habis Thinking Fried Chicken',
}

export default function Kemitraan() {
  return (
    <KemitraanContent/>
  )
}
