
export type Content = {
  headers: string[]
  color: string
  content: string | string[]
}


export const packages: Content[] = [
  {
    headers: ["Basic", "ECE Resource Center"],
    color: "#75BF46",
    content: [
      "Perfect for schools beginning their journey into play-based and hands-on early learning.",
      "Includes ECE Lab Manuals (Levels 1–3), loose-parts starter kits, and essential workstation materials.",
      "Designed to support exploration → creation → reflection across the 13 ECE workstations.",
      "Encourages active, child-led learning through guided play and simple classroom setups. ",

    ]
  },
  {
    headers: ["Premium", "Maths Lab"],
    color: "#6C3694",
    content: [
        "Builds on the Basic package.",
        "Adds full workstation furniture, classroom layout design, and immersive environment setup.",
        "Includes everything in Basic + expanded resource kits and multi-sensory learning materials.",
        "Ideal for schools aiming to establish a complete, inquiry-driven ECE Resource Centre.",

    ]
  },
]