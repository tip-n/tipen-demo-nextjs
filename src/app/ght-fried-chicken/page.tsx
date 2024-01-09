import { Metadata } from 'next'

import { HomeContent } from '@features/ght-fried-chicken/home/content/Content'

export const metadata: Metadata = {
  title: 'Demo - Gak Habis Thinking Fried Chicken',
  description: 'Demo website for Gak Habis Thinking Fried Chicken',
}

export default function Home() {
  return (
    <HomeContent/>
  )
}
