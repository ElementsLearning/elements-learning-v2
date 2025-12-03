import { CarouselSingle } from "@/components/custom/CarouselSingle";
import { ContentCard } from "@/components/custom/ContentCard";
import { CustomAccordion } from "@/components/custom/CustomAccordion";
import { FadeIn } from "@/components/custom/FadeIn";
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton";
import { MultiCarousel } from "@/components/custom/MultiCarousel";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { MathLabEvents } from "@/constants/MathLabEvents";
import { packages } from "@/constants/packages";
import { sciencepackages } from "@/constants/sciencepakages";
import React from "react";
import { Textbooks } from "../../ScienceSection/Publications/Textbooks";
import { languagepackages } from "@/constants/languagepackages";

export default function LanguageLab() {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>
            The Elements Learning (EL) Language Lab is a purposeful learning
            environment that makes language engaging and accessible for early
            and primary learners. It provides a comprehensive, hands-on
            experience built on MTB MLE, beginning in L1 and guiding a confident
            transition to L2.
          </p>
          <p>
            {
              "Stations focus on listening, speaking, reading, and writing through word games, phonics practice, storytelling corners, sentence building, and small projects. The lab integrates teacher-led mini lessons, Time for English audio lessons, practice pages, and quick progress checks so classrooms can move from Learn to Read to Read to Learn with clarity and consistency."
            }
          </p>
        </div>
        {/* <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
              <MultiCarousel items={MathLabEvents} />
            </section> */}
        <CustomAccordion
          color="#307F0150"
          containerClass={"w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"}
          type="multiple"
          items={[
            {
              title: "Packages",
              id: "Packages",
              content: (
                <div className="flex flex-col gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
                  <p className="text-base md:text-lg xl:text-xl">
                    We offer two packages in our Language Labs. Each package is
                    tailored to meet the diverse needs of schools and educators.
                  </p>
                  <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                    {languagepackages.map((pkg, i) => (
                      <ContentCard key={`package-${i}`} {...pkg} index={i} />
                    ))}
                  </div>
                </div>
              ),
            },
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
                        src="/popularmath/1.jpg"
                        alt=""
                        className="size-full"
                      />
                      ,
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
                        src="/popularmath/1.jpg"
                        alt=""
                        className="size-full"
                      />
                      ,
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
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
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
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <img
                        src="/popularmath/1.jpg"
                        alt=""
                        className="size-full"
                      />
                      ,
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
                        src="/popularmath/1.jpg"
                        alt=""
                        className="size-full"
                      />
                      ,
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
