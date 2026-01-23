import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { Update } from "@/constants/update"

export const UpdateCard: React.FC<Update> = ({src, content, title, date}) => {

  return (
    <SlidingDiv
  direction={"top"}
  className="flex flex-col flex-1 rounded-[50px] overflow-hidden rounded-tl-none gap-4 md:max-w-md bg-[#F3EEE8]"
>
  {/* Image Wrapper */}
  <div className="w-full h-48 md:h-56 lg:h-60 overflow-hidden bg-[#F3EEE8]">
    <img
      src={src}
      alt=""
      className="w-full h-full object-contain"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-1 gap-4 p-8 md:p-6 lg:p-6 xl:p-10 items-start">
    <p className="text-sm md:text-base lg:text-lg xl:text-xl font-bold">
      {title}
    </p>
    <p>
      {date}
    </p>
    <p className="text-xs md:text-sm lg:text-base">
      {content}
    </p>
  </div>
</SlidingDiv>

  )
}