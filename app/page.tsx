import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <>
      <section className="relative mt-1 text-primary xs:pl-[0px] px-[15px] xs:pr-[0px] sm:pl-[22px] sm:pr-[22px] md:pl-[22px] md:pr-[22px] lg:pl-[22px] lg:pr-[22px] xl:pl-[22px] xl:pr-[22px] 2xl:pl-[22px] 2xl:pr-[22px]">
        <div className="relative h-full max-w-[1504px] mx-auto ">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 rounded-[30px] bg-[#1A3560] opacity-50" />
          <video
            className="max-h-[85vh] w-full rounded-[30px] object-cover"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src="/videos/Web2.mp4" />
          </video>

          <div className="absolute left-0 top-0 flex h-full flex-col justify-end xs:ml-[20px] xs:max-w-[426px] xs:pb-[20px] sm:ml-[20px] sm:max-w-[526px] sm:pb-[20px] md:ml-[78px] md:max-w-[526px] md:pb-[87px] lg:ml-[78px] lg:max-w-[526px] lg:pb-[87px] xl:ml-[78px] xl:max-w-[626px] xl:pb-[87px] 2xl:ml-[78px] 2xl:max-w-[626px] 2xl:pb-[87px]">
            <h1 className="leading-[110%] font-bold text-[#FFFFFF] xs:mb-[17px] sm:mb-[31px] sm:text-[31px] md:mb-[31px] md:text-[51px] lg:mb-[31px] lg:text-[51px] xl:mb-[31px] xl:text-[51px] 2xl:mb-[31 px] 2xl:text-[48px]">
              Improving the IT and Digital Education Landscape in Uzbekistan: Research Phase
            </h1>
            <Button className="max-w-[240px] w-full cursor-pointer min-h-[58px] text-lg font-bold rounded-[12px] bg-[#6C9CEC] hover:bg-[#6C9CEC]">Registration</Button>
          </div>
        </div>
      </section>

    </>
  );
}
