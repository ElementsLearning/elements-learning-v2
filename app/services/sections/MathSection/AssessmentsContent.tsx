import { AssessmentCard } from "@/components/custom/AssessmentCard";
import { BulletList } from "@/components/custom/BulletList";
import { CarouselSingle } from "@/components/custom/CarouselSingle";
import { ContentCard } from "@/components/custom/ContentCard";
import { CustomAccordion } from "@/components/custom/CustomAccordion";
import { FadeIn } from "@/components/custom/FadeIn";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { packages } from "@/constants/packages";
import { studentAssessments } from "@/constants/studentAssessments";
import { teacherAssessments } from "@/constants/teacherAssessment";
import FlipCards from "../ScienceSection/Trainings/FlipCard";
import { color } from "framer-motion";

const assessmentpoint = [{
  title: "1. Assessment for Learning (AfL)",
  description:"Real-time strategies that help teachers understand how students are learning during the lesson and adjust instruction immediately.",
  color: "#9FD5B5",
},
{
  title:"2. Learning for Mastery (LfM)",
  description:"A structured approach that ensures children fully understand essential concepts before moving forward, strengthening long-term retention and confidence.",
  color: "#9FD8EB",
}]

// Color aur Images dono eik hi object mein
const sectionConfig: Record<string, {
  color: string;
  holisticImage: string;
  trackingImage: string;
}> = {
  Math: {
    color: "#FCBA42",
    holisticImage: "/assessment/holistic/math.png",
    trackingImage: "/assessment/tracking/math.png"
  },
  Science: {
    color: "#55088C50",
    holisticImage: "/assessment/holistic/science.png",
    trackingImage: "/assessment/tracking/science.png"
  },
  Language: {
    color: "#307F0150",
    holisticImage: "/assessment/holistic/language.png",
    trackingImage: "/assessment/tracking/language.png"
  },
  Ece: {
    color: "#DA037F50",
    holisticImage: "/assessment/holistic/ece.png",
    trackingImage: "/assessment/tracking/ece.png"
  }
}

export const AssessmentsContent = ({ 
    section = "Math" 
}: {section?: string;}) => {

  // Section config ko resolve karein, agar nahi mila to Math ka use karein
  const config = sectionConfig[section] || sectionConfig.Math;

  return (
    <FadeIn
      threshold={0.01}
      className="flex flex-col w-full gap-4 p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
    >
      <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
        <p className="">
          At Elements Learning, assessment is not just an exam or a
          checkpoint—it is a continuous learning process. We focus on
          understanding how each child learns and ensuring that their growth is
          consistent, meaningful, and connected to real-world applications. Our
          model integrates two globally recognized approaches:
        </p>
      </div>
      <FlipCards data={assessmentpoint} columns={2} />

      <CustomAccordion
        containerClass={"w-full"}
        color={config.color}
        type="multiple"
        items={[
          {
            title: "Holistic Learning Goals",
            id: "Holistic Learning Goals",
            content: (
              <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                <div className="flex flex-cols sm:flex-row gap-2">
                  <SlidingDiv direction={"left"} className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]">
                    <h3 className={`text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[${config.color}] font-bold`}>
                      Traditional education often focuses only on intellectual growth, but at Elements Learning, we go further. Every grade level has subgoals organized under four tiers, covering intellectual, practical, and cross-subject skills.
                    </h3>
                    <p>Through our Project-Based Learning (PBL) Blueprints, students engage with concepts in ways that connect academic learning to real-world applications. This approach ensures students develop the full spectrum of skills and understanding, not just what is tested on paper.</p>
                  </SlidingDiv>
                  <SlidingDiv direction={"right"} className="sm:flex-[2_0_0] aspect-square bg-neutral-200">
                    <img 
                      src={config.holisticImage} 
                      alt={`${section} holistic learning`} 
                      className="size-full object-cover" 
                    />
                  </SlidingDiv>
                </div>
              </div>
            ),
          },
          {
            title: "Child Tracking System",
            id: "Child Tracking System",
            content: (
              <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                <div className="flex flex-col sm:flex-row gap-2">
                  <SlidingDiv
                    direction={"left"}
                    className="sm:flex-[2_0_0] aspect-square bg-neutral-200"
                  >
                    <img
                      src={config.trackingImage}
                      alt={`${section} tracking system`}
                      className="size-full object-cover"
                    />
                  </SlidingDiv>
                  <SlidingDiv
                    direction={"right"}
                    className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                  >
                    <p>
                      Our tracking system allows teachers to mark each subgoal
                      throughout the year using a Likert scale. This provides a
                      real-time measure of each {`student's`}
                      goals are consistently monitored and reinforced.
                    </p>
                  </SlidingDiv>
                </div>
              </div>
            ),
          },
        ]}
      />
    </FadeIn>
  );
};