import { CarouselSingle } from "@/components/custom/CarouselSingle";
import { CustomAccordion } from "@/components/custom/CustomAccordion";
import { FadeIn } from "@/components/custom/FadeIn";
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import React from "react";
import { LearningToRead } from "../LearningToRead";
import { LearningToReadMobile } from "../LearningToReadMobile";

export default function LanguagePublication() {
  return (
    <FadeIn
      threshold={0.01}
      className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>
            Language is the foundation for thinking, expression, and
            understanding. At Elements Learning, we follow MTB-MLE, beginning
            with the child’s first language (L1) to build confidence and
            comprehension, then gradually transitioning to a second language
            (L2) while preserving the richness of the mother tongue. This
            creates meaningful bilingualism and clear, connected learning.
          </p>
           <LearningToRead />
                    <LearningToReadMobile />
          <p>
            Our programme moves from Learn to Read to Read to Learn. Children
            first strengthen listening, speaking, and core vocabulary in L1,
            then expand knowledge and phonics, develop thinking skills and
            identity through activities like Who Am I, and finally write with
            confidence as independent authors.
          </p>
        </div>
        <CustomAccordion
          color={"#307F0150"}
          containerClass={"w-full"}
          type="multiple"
          items={[
            {
              title: "Word Games Manual",
              id: "Word Games Manual",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <p>
                        This manual features over 60 curated word games that
                        target phonics, vocabulary, grammar, and fluency. Each
                        game includes clear objectives, preparation steps, and
                        differentiation ideas for varying ability levels. The
                        manual helps teachers integrate play-based learning into
                        language instruction, ensuring that every child
                        participates actively and learns through fun, meaningful
                        repetition.
                      </p>
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <img
                        src="/worldgame/1.png"
                        alt=""
                        className="size-full"
                      />
                    </SlidingDiv>
                  </div>
                </div>
              ),
            },
            {
              title: "Time for English Teacher Manual",
              id: "Time for English Teacher Manual",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <img
                        src="/worldgame/2.png"
                        alt=""
                        className="size-full"
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <p>
                        Aligned with the MTB-MLE framework, this manual
                        accompanies the Time for English audio-supported
                        lessons. It provides scripted listening activities,
                        vocabulary support, visual aids, and step-by-step
                        guidance for transitioning from L1 to L2. The manual
                        ensures that teachers can deliver structured yet
                        flexible lessons that balance listening, speaking,
                        reading, and writing.
                      </p>
                    </SlidingDiv>
                  </div>
                </div>
              ),
            },
            {
              title: "Who Am I? Student Journal",
              id: "Who Am I? Student Journal",
              content: (
                <div className="p-2 xs:p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col-reverse sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <p>
                        The Who Am I? Journal is a reflective student workbook
                        that builds self-expression, comprehension, and writing
                        fluency. Through prompts, mini-projects, and personal
                        storytelling tasks, students explore identity, emotions,
                        and everyday experiences in both their home language and
                        English. It connects language learning to real life,
                        helping children see words as a means of understanding
                        themselves and the world.
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
                            key={"1"}
                            src="/WhoAmI/OWL.png"
                            className="size-full object-cover"
                          />,
                          <img
                            alt=""
                            key={"2"}
                            src="/WhoAmI/ELE.png"
                            className="size-full object-cover"
                          />,
                        ]}
                        nextButton={
                          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 z-10 size-10 lg:size-16">
                            <HexagonPlayButton
                              outerColor={"#307F0150"}
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
            {
              title: "Project Blueprint",
              id: "Project Blueprint",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <img
                        src="/projectblueprint/1.png"
                        alt=""
                        className="size-full"
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <p>
                        Language Projects turn learning into tangible work that
                        learners can show and share. Students research, plan,
                        draft, and present to build thinking skills, clear
                        expression, and confidence. The activities are fun and
                        purposeful and help students cover approximately 5,000
                        vocabulary items and core root words, strengthening
                        fluency across listening, speaking, reading, and
                        writing.
                      </p>
                    </SlidingDiv>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </FadeIn>
  );
}
