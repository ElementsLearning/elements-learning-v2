import { ECEContent } from "./ECESection/ECEContent"
import ECEPublication from "./ECESection/Publications/ECEPublication"
import ResourceCenter from "./ECESection/ResourceCenter/ResourceCenter"
import EceTrainings from "./ECESection/Trainings/EceTrainings"
import { LanguageContent } from "./LanguageSection/LanguageContent"
import LanguageLab from "./LanguageSection/LanguageLab/LanguageLab"
import LanguageManipulative from "./LanguageSection/Manipulative/LanguageManipulative"
import LanguagePublication from "./LanguageSection/Publications/LanguagePublication"
import { AssessmentsContent } from "./MathSection/AssessmentsContent"
import { MathsLabsContent } from "./MathSection/MathsLabsContent"
import { MathsManipulativesContent } from "./MathSection/MathsManipulativesContent"
import { PublicationsContent } from "./MathSection/Publications/PublicationsContent"
import { TrainingsContent } from "./MathSection/Training/TrainingsContent"
import SciencePublication from "./ScienceSection/Publications/SciencePublication"
import Publication from "./ScienceSection/Publications/SciencePublication"
import { ScienceContent } from "./ScienceSection/ScienceContent"
import ScienceLab from "./ScienceSection/ScienceLab/ScienceLab"
import Training from "./ScienceSection/Trainings/Training"

export type Tab = {
  name: string
  src: string
  tabName: string
  content: React.ReactNode
  disabled?: boolean
}

export type Section = {
  name: string
  serviceName: string
  color: string
  src: string
  videoSrc?: string
  tabs?: Tab[]
  content?: React.ReactNode
}

export const sections: Section[] = 
[
  {
    name: "Maths",
    serviceName: "maths",
    color: "#FBBA42",
    videoSrc: "/animations/mathYellow.mp4",
    src: "/landingpage/maths.png",
    tabs: [
      {
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <PublicationsContent />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/maths/trainings.png",
        tabName: "trainings",
        content: <TrainingsContent /> 
      },
      {
        name: "Maths Lab",
        src: "/whatweofferpage/maths/maths-labs.png",
        tabName: "labs",
        content: <MathsLabsContent />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/maths/manipulative.png",
        tabName: "manipulatives",
        content: <MathsManipulativesContent />
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        tabName: "assessments",
        content: <AssessmentsContent />
      },
    ],
  },
  {
    name: "Science",
    serviceName: "science",
    color: "#55088C50",
    src: "/landingpage/science.png",
    content:<ScienceContent />,
    tabs:[{
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <SciencePublication />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/science/training.png",
        tabName: "trainings",
        content: <Training /> 
      },
      {
        name: "Science Lab",
        src: "/whatweofferpage/science/lab.png",
        tabName: "labs",
        content: <ScienceLab />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/science/manipulative.png",
        tabName: "manipulatives",
        disabled: true,
        content: "",
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        tabName: "assessments",
        disabled: false,
        content: <AssessmentsContent section={"Science"} />
      },
    ],
    // content: <ScienceContent />
  },
  {
    name: "Language",
    serviceName: "language",
    color: "#307F0150",
    src: "/landingpage/language.png",
    content: <LanguageContent />,
    tabs:[{
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <LanguagePublication />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/language/training.png",
        tabName: "trainings",
        disabled: true,
        content: ""
      },
      {
        name: "Language Lab",
        src: "/whatweofferpage/language/lab.png",
        tabName: "labs",
        content: <LanguageLab />
      },
      {
        name: "World Game Manipulatives",
        src: "/whatweofferpage/language/worldgame.png",
        tabName: "manipulatives",
        content: <LanguageManipulative />
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        tabName: "assessments",
        disabled: false,
        content: <AssessmentsContent section={"Language"} />
      },
    ],
  },
  {
    name: "ECE and Parenting",
    serviceName: "ece",
    color: "#DA037F50",
    src: "/landingpage/ece.png",
    content: <ECEContent />,
    tabs:[{
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <ECEPublication />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/ece/training.png",
        tabName: "trainings",
        content: <EceTrainings />
      },
      {
        name: "ECE Resornce Center",
        src: "/whatweofferpage/ece/rc.png",
        tabName: "labs",
        content: <ResourceCenter />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/ece/manipulative.png",
        tabName: "manipulatives",
        disabled: true,
        content: ""
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        tabName: "assessments",
        content: <AssessmentsContent section={"Ece"} />
      },]
  },
  // {
  //   name: "STEAM",
  //   serviceName: "steam",
  //   color: "#00678F50",
  //   src: "/landingpage/steam.png",
  //   content: <SteamContent />
  // },
  // {
  //   name: "EdTech",
  //   serviceName: "edtech",
  //   color: "#DA037F50",
  //   src: "/landingpage/edtech.png",
  //   content: <EdTechContent />
  // },
  // {
  //   name: "Social Science",
  //   serviceName: "socialscience",
  //   color: "#007E3D50",
  //   src: "/landingpage/socialscience.png",
  //   content: <SocialSciencesContent />
  // },
]
