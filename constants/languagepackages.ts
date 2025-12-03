
export type Content = {
  headers: string[]
  color: string
  content: string | string[]
}

export const languagepackages: Content[] = [
  {
    headers: ["Basic", "Language Lab"],
    color: "#75BF46",
    content: [
      "Perfect for schools new to structured language learning.",
      "Includes core publications and essential activity materials.",
      "Designed to support L1 → L2 transition through guided play.",
      "Encourages interactive speaking, listening, and vocabulary practice.",
    ]
  },
  {
    headers: ["Premium", "Language Lab"],
    color: "#6C3694",
    content: [
      "Builds on the Basic package",
      "Adds collaborative furniture and immersive visual environment.",
      "Includes everything in Basic + classroom setup for group learning.",
      "Ideal for schools aiming to establish a full Language Lab environment.",

    ]
  },
]