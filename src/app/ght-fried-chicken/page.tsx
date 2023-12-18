import { Metadata } from 'next'

import { HomeContent } from '@features/ght-fried-chicken/home/content/content'

export const metadata: Metadata = {
  title: 'Demo - Kriuk Kriuk Bandel',
  description: 'Demo website for Kriuk Kriuk Bandel',
}

export default function Home() {
  return (
    <HomeContent/>
  )
}
