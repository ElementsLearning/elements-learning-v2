"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { CustomAccordion } from "@/components/custom/CustomAccordion";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { CarouselSingle } from "@/components/custom/CarouselSingle";
import { FadeIn } from "@/components/custom/FadeIn";
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton";
import { ContentCard } from "@/components/custom/ContentCard";
import { packages } from "@/constants/EcePkgs";

interface Station {
  id: number;
  title: string;
  color: string;
}

export default function ResourceCenter() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const stations: Station[] = [
    { id: 1, title: "Art Station", color: "#C5AECB" },
    { id: 2, title: "Literacy & Story Corner", color: "#9FD5B5" },
    { id: 3, title: "Science & Discovery Station", color: "#9FD8EB" },
    { id: 4, title: "Construction & Logic Station", color: "#F2CBAC" },
    { id: 5, title: "Dramatic Play & Role-Play Station", color: "#C5AECB" },
    { id: 6, title: "Music & Movement Station", color: "#9FD5B5" },
    { id: 7, title: "Sensory Exploration Station", color: "#9FD8EB" },
    { id: 8, title: "Maths & Numeracy Station", color: "#F2CBAC" },
    { id: 9, title: "Writing & Fine-Motor Station", color: "#C5AECB" },
    { id: 10, title: "Technology & Audio Station", color: "#9FD5B5" },
    { id: 11, title: "Gardening Corner / Chicken Coop", color: "#9FD8EB" },
    { id: 12, title: "General Classroom / Storage Station", color: "#F2CBAC" },
    { id: 13, title: "Display Corner", color: "#C5AECB" },
  ];

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="relative pt-16  px-4 sm:px-6 lg:px-8">
        {/* <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stations.map((station) => (
              <div
                key={station.id}
                className="group perspective"
                onMouseEnter={() => setHoveredId(station.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative h-48 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm overflow-hidden"
                  style={{
                    backgroundColor: station.color,
                    transform:
                      hoveredId === station.id
                        ? "translateY(-16px) scale(1.05)"
                        : "translateY(0) scale(1)",
                    transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                      >
                        {station.id}
                      </div>

                      <div
                        className="w-2 h-2 rounded-full opacity-60"
                        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {station.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          v
        </div> */}
        <img src="/ece.png" alt=" " className="size-full" draggable="false"/>
      </div>
      <div className="flex flex-col gap-4">
        <CustomAccordion
          containerClass={"w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"}
          type="multiple"
          color={"#DA037F50"}
          items={[
            {
              title: "Packages",
              id: "Packages",
              content: (
                <div className="flex flex-col gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
                  <p className="text-base md:text-lg xl:text-xl">
                    We offer three packages in our Maths Labs. Each package is
                    tailored to meet the diverse needs of schools and educators.
                  </p>
                  <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                    {packages.map((pkg, i) => (
                      <ContentCard key={`package-${i}`} {...pkg} index={i} />
                    ))}
                  </div>
                </div>
              ),
            },
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
                        The Elements Learning ECE Lab Manuals turn early
                        childhood philosophy into hands-on, classroom-ready
                        practice. Aligned with the National Curriculum of
                        Pakistan, they offer structured yet creative activities
                        that nurture language, numeracy, science, social, and
                        life skills in children aged 3–6. Each manual blends
                        open-ended play with guided worksheets, poems, and
                        stories in English and Urdu—building foundational
                        academic, social, and emotional skills through
                        meaningful exploration and joyful learning.
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
                            src="/eceLab/1.png"
                            className="size-full object-cover"
                          />,
                          <img
                            alt=""
                            key={"2"}
                            src="/eceLab/2.png"
                            className="size-full object-cover"
                          />,
                          <img
                            alt=""
                            key={"3"}
                            src="/eceLab/3.png"
                            className="size-full object-cover"
                          />,
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
  );
}
