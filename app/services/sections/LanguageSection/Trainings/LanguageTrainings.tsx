import { FadeIn } from "@/components/custom/FadeIn";
import FlipCards from "../../ScienceSection/Trainings/FlipCard";
import { languagestrainings } from "@/constants/languagetrainings";
import CardDetailing from "./CardDetailing";

const LanguageTraining = () => {
  
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>Language—together with mathematics—is one of the two core drivers of cognitive growth and academic success. At Elements Learning, our Language Training Program equips parents and teachers with powerful, practical methods to strengthen comprehension, expression, and communication. The program connects directly with Elements Learning’s Language Lab, Project-Based Word Games, and the Mother-Tongue-Based Multilingual Education (MTB-MLE) L1→L2 Transition Series, ensuring continuity between training, classroom practice, and at-home support.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8] flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          <h3 className="px-4 text-2xl min-[900px]:text-4xl xl:text-6xl text-center font-bold uppercase">Our Training Pipeline</h3>
          <FlipCards data={languagestrainings} columns={5} />
          <CardDetailing />
        </section>
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>By the end of this program, participants gain a complete, practical toolkit for strengthening children’s language skills—rooted in research, storytelling, multilingual development, and expressive confidence. The training naturally connects with Elements Learning’s wider ecosystem, where children continue practicing through the Language Lab, applying learning through PBL Word Games, and transitioning smoothly from L1 to L2 using the MTB-MLE series. Together, these components create a continuous and sustainable pathway toward stronger comprehension, clearer thinking, and confident communication.</p>
        </div>
        {/* <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={TrainingEvents} />
        </section> */}
      </div>
    </FadeIn>
  )
}
export default LanguageTraining;