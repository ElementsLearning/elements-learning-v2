import { FadeIn } from "@/components/custom/FadeIn"
import { MultiCarousel } from "@/components/custom/MultiCarousel"
import { sciencetraining } from "@/constants/ScienceTraining";
import CardDetailing from "./CardDetailing";

const Training = () => {
  
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>The ECE training program is designed to strengthen the foundational knowledge and practical skills of early childhood educators, coordinators, and parents. Through a blend of theory, hands-on activities, discussions, and classroom design exercises, participants develop a deep understanding of child development, effective adult roles, developmentally appropriate practices, and modern ECE approaches. By the end of the workshop, attendees are equipped to create nurturing, purposeful, and well-structured learning environments that support holistic growth in young children.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8] flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          <h3 className="px-4 text-2xl min-[900px]:text-4xl xl:text-6xl text-center font-bold uppercase">Our Training Pipeline</h3>
          <CardDetailing />
        </section>
        {/* <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={TrainingEvents} />
        </section> */}
      </div>
    </FadeIn>
  )
}
export default Training;
