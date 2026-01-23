import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { flowchartSteps } from "@/constants/flowchartSteps"

export const FlowChart = () => {
  return (
    <>
      {/* ===================== UPPER FLOWCHART ===================== */}

      <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 md:h-[80vh] py-24">

        {flowchartSteps.map(({ name, color, optionals }, i) => (
          <div key={name} className="flex">

            <SlidingDiv
              direction="top"
              delay={i * 0.3}
              className="flex md:flex-col gap-2 justify-center items-center w-full"
            >
              {/* ===================== TOP OPTIONAL ===================== */}
              {optionals && (
                <div className="flex flex-col items-center gap-4">
                  <div
                    className={`flex justify-center items-center text-center
                    p-4 w-64 sm:w-72 md:w-80 h-28 sm:h-32
                    rounded-[20px]
                    border-2 border-dashed border-neutral-500 text-neutral-500`}
                  >
                    <p className="font-semibold text-base">
                      {optionals[0].name}
                    </p>
                  </div>

                  <div className="flex md:flex-col gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`Dot-${i}`}
                        className="size-1 rounded-full bg-[#F3EEE8]"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ===================== MAIN FLOW CARD (SAME AS FLIP CARD) ===================== */}
              <div
                className="flex flex-col justify-center items-center
                p-8
                w-64 sm:w-72 md:w-80
                h-52 sm:h-56 md:h-60
                text-center
                rounded-[30px]
                shadow-lg"
                style={{ backgroundColor: color }}
              >
                <p className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                  {name}
                </p>
              </div>

              {/* ===================== BOTTOM OPTIONAL ===================== */}
              {optionals && (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex md:flex-col gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`VDot-${i}`}
                        className="size-1 rounded-full bg-[#F3EEE8]"
                      />
                    ))}
                  </div>

                  <div
                    className={`flex justify-center items-center text-center
                    p-4 w-64 sm:w-72 md:w-80 h-28 sm:h-32
                    rounded-[20px]
                    border-2 border-dashed border-neutral-500 text-neutral-500`}
                  >
                    <p className="font-semibold text-base">
                      {optionals[1].name}
                    </p>
                  </div>
                </div>
              )}
            </SlidingDiv>
          </div>
        ))}
      </div>

      {/* ===================== LOWER CONTENT (UNCHANGED) ===================== */}

      <div className="flex flex-col gap-6 text-sm sm:text-base md:text-lg xl:text-xl py-8">
        {flowchartSteps.map((step, i) => (
          <div key={step.name}>
            <SlidingDiv
              repeat
              px={150}
              direction={i % 2 === 0 ? "left" : "right"}
              className="flex flex-col gap-2 p-6 shadow-md rounded-[20px]"
              style={{ backgroundColor: step.color }}
            >
              <h1 className="font-semibold">{step.name}</h1>
              <p>{step.content}</p>
            </SlidingDiv>

            {step.optionals?.map((optional, idx) => (
              <SlidingDiv
                repeat
                direction={idx % 2 === 0 ? "left" : "right"}
                key={optional.name}
                className="flex flex-col gap-2 border-4 border-neutral-300 border-dashed p-6 rounded-md"
              >
                <h1 className="font-semibold">{optional.name}</h1>
                <p>{optional.content}</p>
              </SlidingDiv>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}