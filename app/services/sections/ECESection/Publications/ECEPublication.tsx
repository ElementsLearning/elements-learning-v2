import { CarouselSingle } from '@/components/custom/CarouselSingle'
import { CustomAccordion } from '@/components/custom/CustomAccordion'
import { FadeIn } from '@/components/custom/FadeIn'
import { HexagonPlayButton } from '@/components/custom/HexagonPlayButton'
import { SlidingDiv } from '@/components/custom/SlidingDiv'
import React from 'react'

export default function ECEPublication() {
  return (
     <FadeIn
          threshold={0.01}
          className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
              <p>
               At Elements Learning, our Early Childhood Education approach combines the philosophies of Reggio Emilia and Maria Montessori to create environments where children learn through exploration, creativity, and responsibility. Inspired by Reggio, our learning spaces are close to nature and enriched with open-ended “loose parts” that promote imagination and discovery. We view the environment as the “third teacher”—encouraging inquiry, collaboration, and problem-solving.
              </p>
              <p>Montessori principles provide structure and order through routines, organization, and self-directed care. The Reggio Emilia approach complements this with flexibility, creativity, and child-led inquiry. Together, they cultivate independent, confident learners who take ownership of their environment and learning journey.</p>
            </div>
            <CustomAccordion
              color={"#DA037F50"}
              containerClass={"w-full"}
              type="multiple"
              items={[
                {
                  title: "Lab Manuals",
                  id: "Lab Manuals",
                  content: (
                    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
                      <div className="flex flex-col-reverse sm:flex-row gap-2">
                        <SlidingDiv
                          direction={"right"}
                          className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                        >
                          <p>
                            The Elements Learning ECE Lab Manuals turn early childhood philosophy into hands-on, classroom-ready practice. Aligned with the National Curriculum of Pakistan, they offer structured yet creative activities that nurture language, numeracy, science, social, and life skills in children aged 3–6. Each manual blends open-ended play with guided worksheets, poems, and stories in English and Urdu—building foundational academic, social, and emotional skills through meaningful exploration and joyful learning.
                          </p>
                        </SlidingDiv>
                        <SlidingDiv
                          direction={"right"}
                          className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400"
                        >
                          <CarouselSingle
                            containerClass={"size-full relative"}
                            items={[
                              <img
                                alt=""
                                key={"ece1"}
                                src="/ecelab/1.png"
                                className="size-full object-cover"
                              />,
                              <img
                                alt=""
                                key={"ece2"}
                                src="/ecelab/2.png"
                                className="size-full object-cover"
                              />,
                               <img
                                alt=""
                                key={"ece3"}
                                src="/ecelab/3.png"
                                className="size-full object-cover"
                              />
                            ]}
                            nextButton={
                              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 z-10 size-10 lg:size-16">
                                <HexagonPlayButton
                                  outerColor={"#DA037F50"}
                                  innerColor={"#FFFFFF"}
                                />
                              </div>
                            }
                          />
                        </SlidingDiv>
                      </div>
                    </div>
                  ),
                },
                
              ]}
            />
          </div>
        </FadeIn>
  )
}
