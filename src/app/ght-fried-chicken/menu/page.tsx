import { Metadata } from 'next'

import { MenuContent } from '@features/ght-fried-chicken/menu/content/Content'

export const metadata: Metadata = {
  title: 'Demo - Gak Habis Thinking Fried Chicken',
  description: 'Demo website for Gak Habis Thinking Fried Chicken',
}

export default function Menu() {
  return (
    <MenuContent/>
  )
}
