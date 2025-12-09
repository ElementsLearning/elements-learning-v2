"use client"

import { BulletList } from "@/components/custom/BulletList"
import { CarouselSingle } from "@/components/custom/CarouselSingle"
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton"
import Link from "next/link"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { useState } from "react"

export const Textbooks = () => {
  const [opened, setOpened] = useState< "TEACHERS" | "STUDENTS">("TEACHERS")

  const texts = {
    "TEACHERS": <>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left"> A fresh addition to the Elements Learning Science Lab Manual series that ignites curiosity through hands-on learning. Rooted in “science is best learned by doing,” it guides students to observe, explore, and investigate with simple experiments and basic lab tools. Aligned with the National Curriculum of Pakistan, it offers a clear, structured path to key SLOs with real-life examples, vivid illustrations, guiding questions, and discussion prompts.
</p>
      {/* <div className="pl-12 md:pl-24 lg:pl-32 xl:pl-40">
        <BulletList contentClass="text-sm text-left md:text-base xl:text-lg"
        list={[
          {title: "Effective Teaching Strategies"},
          {title: "Comprehensive Assessment Tools"},
          {title: "Supplementary Learning Resources"},
        ]} />
      </div> */}
    </>,
    "STUDENTS": <>
      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-bold">Our Student Workbooks are designed to complement the Teacher Guides, providing students with practical exercises and activities that reinforce their learning.</h3>
      <div className="pl-12 md:pl-24 lg:pl-32 xl:pl-40">
        <BulletList contentClass="text-sm text-left md:text-base xl:text-lg"
        list={[
          {title: "Curriculum-Aligned Content"},
          {title: "Engaging Interactive Exercises"},
          {title: "Progressive Skill Development"},
        ]} />
      </div>
    </>
  }

  const contents = {
    "TEACHERS": <>
      <CarouselSingle containerClass={"size-full"} items={[
        <img alt="" src="/ScienceLab/3.png" className="size-full"  key={"1"}/>,
        <img alt="" src="/ScienceLab/4.png" className="size-full"  key={"2"}/>,
        <img alt="" src="/ScienceLab/5.png" className="size-full" key={"3"} />,
        <img alt="" src="/ScienceLab/6.png" className="size-full" key={"4"} />,
        <img alt="" src="/ScienceLab/7.png" className="size-full" key={"5"} />,
      ]}
      nextButton={
        <div className="size-10 lg:size-16 pr-2 xs:pr-0">
          <HexagonPlayButton outerColor={"#55088C50"} innerColor={"#FFFFFF"}/>
        </div>
      } />
    </>,
    "STUDENTS": <>
      <CarouselSingle containerClass={"size-full"} items={[
        <img alt="" src="/ScienceLab/3.png" className="size-full"  key={"1"}/>,
        <img alt="" src="/ScienceLab/4.png" className="size-full"  key={"2"}/>,
        <img alt="" src="/ScienceLab/5.png" className="size-full" key={"3"} />,
        <img alt="" src="/ScienceLab/6.png" className="size-full" key={"4"} />,
        <img alt="" src="/ScienceLab/7.png" className="size-full" key={"5"} />,
      ]}
      nextButton={
        <div className="size-10 lg:size-16 pr-2 xs:pr-0">
          <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
        </div>
      } />
    </>,

  }

  return (
    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <SlidingDiv direction={"top"} className="flex-[3_0_0] flex flex-col text-right p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 bg-[#F3EEE8]">
          {texts[opened]}
          {/* <SlidingDiv direction={"bottom"} className="flex gap-2 mt-auto justify-end">
            <button className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#55088C50]">Teacher Guide</button>
            <button className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#353535]" disabled>Sudents Workbook</button>
          </SlidingDiv> */}
        </SlidingDiv>
        <SlidingDiv direction={'right'} className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
          {contents[opened]}
        </SlidingDiv>
      </div>
    </div>
  )
}