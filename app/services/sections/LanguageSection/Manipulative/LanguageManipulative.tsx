import { FadeIn } from '@/components/custom/FadeIn'
import React from 'react'

export default function LanguageManipulative() {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
              <p>Our Language Manipulatives include the hands-on materials used in our Word Games. These are picture cards, alphabet tiles, vocabulary cards, sentence-building strips, sorting mats, and other small group tools that support listening, speaking, reading, and writing. Students handle, arrange, match, sort, and build words and sentences, allowing language to be learned through active play rather than memorization. These materials encourage participation, help reinforce sound–symbol relationships, and make vocabulary and sentence structure visible, touchable, and easy to practice.</p>
            </div>
          </div>
        </FadeIn>
  )
}
