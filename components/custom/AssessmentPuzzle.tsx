"use client"

import { useState } from "react"

export default function AssessmentPuzzle({
  card1,
  card2,
}: {
  card1: {
    title: string
    description: string
    colorcardbg: any
    colorcardborder: any
  }
  card2: {
    title: string
    description: string
    colorcardbg: any
    colorcardborder: any
  }
}) {
  const [flippedCard1, setFlippedCard1] = useState(false)
  const [flippedCard2, setFlippedCard2] = useState(false)

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="relative flex flex-col md:flex-row items-center">

        {/* LEFT CARD */}
        <div
          className="mb-6 md:mb-0"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setFlippedCard1(true)}
          onMouseLeave={() => setFlippedCard1(false)}
          onTouchStart={() => setFlippedCard1(!flippedCard1)}
        >
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-76 transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: flippedCard1 ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 flex items-center"
              style={{
                backgroundColor: card1.colorcardbg,
                backfaceVisibility: "hidden",
                clipPath:window.innerWidth >= 768 ?
                  "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" :
                  "none",
                borderTopLeftRadius: "1.5rem",
                borderBottomLeftRadius: "1.5rem",
              }}
            >
              <h2 className="text-center font-bold text-base sm:text-lg md:text-xl text-gray-800 px-8 leading-none w-80">
                {card1.title}
              </h2>
            </div>

            {/* BACK */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-white px-6 border-4 border-[${card1.colorcardborder}]`}
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                clipPath: window.innerWidth >= 768 ?
                  "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" :
                  "none",
                borderTopLeftRadius: "1.5rem",
                borderColor:"#FCBA42",
                borderBottomLeftRadius: "1.5rem",
              }}
            >
              <p className="text-sm sm:text-base md:text-lg px-10">
                {card1.description}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="md:-ml-20"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setFlippedCard2(true)}
          onMouseLeave={() => setFlippedCard2(false)}
          onTouchStart={() => setFlippedCard2(!flippedCard2)}
        >
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-76 transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: flippedCard2 ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 flex items-center justify-center shadow-2xl"
              style={{
                backgroundColor: card2.colorcardbg,
                backfaceVisibility: "hidden",
                clipPath: window.innerWidth >= 768 ?
                  "polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)" :
                  "none",
                borderTopRightRadius: "1.5rem",
                borderBottomRightRadius: "1.5rem",
              }}
            >
              <h2 className="text-center font-bold text-base sm:text-lg md:text-xl text-gray-800 px-8 leading-none w-80">
                {card2.title}
              </h2>
            </div>

            {/* BACK */}
            <div
              className="absolute  inset-0 flex items-center justify-center bg-white shadow-2xl px-6 border-4 border-[#fac570]"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                clipPath: window.innerWidth >= 768 ?
                  "polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)" :
                  "none",
                borderTopRightRadius: "1.5rem",
                borderColor:"#fac570",
                borderBottomRightRadius: "1.5rem",
              }}
            >
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                {card2.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
