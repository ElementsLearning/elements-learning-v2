import Marquee from "react-fast-marquee";

export const Clients = () => {
  return (
    <section className="gap-4 md:gap-12 px-4 py-6 lg:py-10 lg:px-2 w-full flex flex-col">
      <h3 className="px-4  text-2xl min-[900px]:text-4xl text-center font-bold uppercase">
        Our Clients
      </h3>
      <Marquee>
        {/* 1Silver Oaks */}
        <div className="w-24 sm:w-44 md:64 lg:w-72 flex flex-col items-center justify-center">
          <img
            src="/clients/sliveroaks.png"
            alt="Silver Oaks"
            className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48"
          />
          <p className="mt-2 px-2 text-sm sm:text-base text-center font-medium">
            Silver Oaks International Education Services
          </p>
        </div>

        {/* 2APS */}
        <div className="w-24 sm:w-44 md:64 lg:w-72 flex flex-col items-center justify-center">
          <img
            src="/clients/aps.jpg"
            alt="APS"
            className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 scale-[80%]"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Army Public Schools & Colleges System
          </p>
        </div>

        {/* 7NClS */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/ncls.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            &nbsp;&nbsp;&nbsp; NUST Creative Learning School & College
          </p>
        </div>

        {/* 3FGEL */}
        <div className="w-24 sm:w-44 md:64 lg:w-72 flex flex-col items-center justify-center">
          <img
            src="/clients/fgel.png"
            alt="FGEL"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Federal Government Educational Institutions (FGEI) Directorate (C/G)
          </p>
        </div>

        {/* 4FDE */}
        <div className="w-24 sm:w-44 md:64 lg:w-72 flex flex-col items-center justify-center">
          <img
            src="/clients/Fde.jpg"
            alt="FDE"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48 scale-[80%]"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Fedral directorate of education
          </p>
        </div>

        {/* 5Read Foundation (Ye pehle se theek tha, bas thoda standardize kiya) */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/read.png"
            alt="Read Foundation"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Read Foundation
          </p>
        </div>
        {/* 6Elementary */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/elementary.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Elementary & Secondary Education Department AJK
          </p>
        </div>

        {/* SAM */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/SAM.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Sirat al Mustaqeem
          </p>
        </div>

        {/* FQE */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/fqe.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Free Quran Education Centre
          </p>
        </div>

        {/* 9 Sir Syed Education Society */}

        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/sses.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Sir Syed Education Society
          </p>
        </div>

        {/* Khudi 8 */}
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="/clients/Khudi.png"
            alt="Elementary"
            className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48"
          />
          <p className="mt-2 text-sm sm:text-base text-center font-medium">
            Khudi Institute
          </p>
        </div>
      </Marquee>
    </section>
  );
};
