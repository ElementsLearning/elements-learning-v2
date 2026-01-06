import { BulletList } from "@/components/custom/BulletList";
import { CarouselSingle } from "@/components/custom/CarouselSingle";
import { CustomAccordion } from "@/components/custom/CustomAccordion";
import { FadeIn } from "@/components/custom/FadeIn";
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { TextbooksPublications } from "./TextbooksPublications";
import Link from "next/link";

export const PublicationsContent = () => {
  return (
    <FadeIn
      threshold={0.01}
      className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>
            At Elements Learning (EL), we are dedicated to producing
            high-quality educational materials that cater to the diverse needs
            of educators and students. Our comprehensive range of textbooks and
            popular Maths resources is designed to enhance the learning
            experience and foster a deep understanding of Mathematical concepts.
          </p>
          <p>
            Central to our approach is the CPA (Concrete-Pictorial-Abstract)
            Methodology, which underpins all our publications. This approach
            ensures that students develop a deep and robust understanding of
            Mathematical concepts by:
          </p>
        </div>
        <SlidingDiv
          direction={"top"}
          className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4"
        >
          <BulletList
            contentClass="text-base md:text-lg xl:text-xl"
            list={[
              {
                title: "Concrete",
                content:
                  "Using physical manipulatives and objects to explore Mathematical ideas.",
              },
              {
                title: "Pictorial",
                content:
                  "Transitioning to visual representations such as diagrams and models to further conceptual understanding.",
              },
              {
                title: "Abstract",
                content:
                  "Finally, moving to abstract symbols and notations, solidifying students' mastery of concepts.",
              },
            ]}
          />
        </SlidingDiv>
        <CustomAccordion
          containerClass={"w-full"}
          type="multiple"
          items={[
            {
              title: "Textbooks",
              id: "Textbooks",
              content: <TextbooksPublications />,
            },
            {
              title: "Teacher Guides",
              id: "Teacher Guides",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-[3/4] "
                    >
                      <CarouselSingle
                        containerClass={"size-full"}
                        items={[
                          <Link
                            key={`studentPublication-1`}
                            href={"/pdfs/sample1.pdf"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              alt=""
                              src="/bookcovers/book1.jpg"
                              className="size-full"
                            />
                          </Link>,
                          <Link
                            key={`studentPublication-2`}
                            href={"/pdfs/sample2.pdf"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              alt=""
                              src="/bookcovers/book2.jpg"
                              className="size-full"
                            />
                          </Link>,
                          <Link
                            key={`studentPublication-3`}
                            href={"/pdfs/sample3.pdf"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              alt=""
                              src="/bookcovers/book3.jpg"
                              className="size-full"
                            />
                          </Link>,
                          <Link
                            key={`studentPublication-4`}
                            href={"/pdfs/sample4.pdf"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              alt=""
                              src="/bookcovers/book4.jpg"
                              className="size-full"
                            />
                          </Link>,
                          <Link
                            key={`studentPublication-5`}
                            href={"/pdfs/sample5.pdf"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              alt=""
                              src="/bookcovers/book5.jpg"
                              className="size-full"
                            />
                          </Link>,
                        ]}
                        nextButton={
                          <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                            <HexagonPlayButton
                              outerColor={"#FCBA42"}
                              innerColor={"#FFFFFF"}
                            />
                          </div>
                        }
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"bottom"}
                      className="flex-[3_0_0] flex flex-col  p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base xl:text-lg bg-[#F3EEE8]"
                    >
                      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-bold">
                        Our Teacher Guides offer essential teaching strategies
                        and classroom management tips, helping educators deliver
                        engaging and effective lessons.
                      </h3>
                      <div className="pl-12 md:pl-24 lg:pl-32 xl:pl-40">
                        <BulletList
                          contentClass="text-sm text-left md:text-base xl:text-lg"
                          list={[
                            { title: "Effective Teaching Strategies" },
                            { title: "Comprehensive Assessment Tools" },
                            { title: "Supplementary Learning Resources" },
                          ]}
                        />
                      </div>
                    </SlidingDiv>
                  </div>
                </div>
              ),
            },
            {
              title: "AJK Textbooks",
              id: "AJK Textbooks",
              content: (
                <div className="p-2 xs:p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col-reverse sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <h3 className="text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-bold">
                        Our textbooks are meticulously crafted to align with the
                        Student Learning Outcomes (SLOs) provided by the single
                        National Curriculum.
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        {" "}
                        By incorporating best practices based on the CPA
                        methodology and innovative methods from educational
                        theorists such as Jerome Bruner, Richard Skemp, Zoltán
                        Pál Dienes, and Caleb Gattegno, our textbooks ensure a
                        comprehensive and effective learning experience.
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
                            key={"1"}
                            alt=""
                            src="/MathTextbook/ajk/1.png"
                            className="size-full object-cover"
                          />,
                          <img
                            key={"2"}
                            alt=""
                            src="/MathTextbook/ajk/2.png"
                            className="size-full object-cover"
                          />,
                          <img
                            key={"3"}
                            alt=""
                            src="/MathTextbook/ajk/3.png"
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
              title: "Popular Maths",
              id: "Popular Maths",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <CarouselSingle
                        containerClass={"size-full"}
                        items={[
                          <img
                            key={`popularMath-1`}
                            src="/popularmath/1.jpg"
                            alt=""
                            className="size-full"
                          />,
                          <img
                            key={`popularMath-2`}
                            src="/popularmath/2.jpg"
                            alt=""
                            className="size-full"
                          />,
                          <img
                            key={`popularMath-3`}
                            src="/popularmath/3.jpg"
                            alt=""
                            className="size-full"
                          />,
                          <img
                            key={`popularMath-4`}
                            src="/popularmath/4.jpg"
                            alt=""
                            className="size-full"
                          />,
                        ]}
                        nextButton={
                          <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                            <HexagonPlayButton
                              outerColor={"#FCBA42"}
                              innerColor={"#FFFFFF"}
                            />
                          </div>
                        }
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-bold">
                        Popular Math uses puzzles and games to make learning
                        enjoyable for all ages, featuring resources from
                        renowned Maths popularizers and plans for recreational
                        programs and olympiads.
                      </h3>
                      <p>
                        Martin Gardner, a famous Maths popularizer, is best
                        known for creating and sustaining interest in
                        recreational maths. It is said that Martin transformed
                        countless kids into scientists and countless scientists
                        into kids. Known for his mind-bending puzzles and over
                        100 engaging books, he sparked curiosity worldwide.
                      </p>
                      <p>
                        {
                          "Now, we invite you to continue Martin's legacy by joining us as a part-time author."
                        }
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
};
