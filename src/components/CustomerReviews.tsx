import Image from "next/image";
import React from "react";

const CustomerReviews = () => {
  return (
    <>
      <h2 className="mt-20 text-center font-koblenz text-4xl text-primary  md:mt-28 md:text-6xl">
        Hear Their Words
      </h2>
      <div className="grid  h-auto grid-cols-1 gap-4 p-10 min-[521px]:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2  lg:py-8">
          <div className="rounded-3xl bg-primary p-3 text-background md:row-span-2 min-[1024px]:col-span-2 min-[1024px]:row-span-1 min-[1230px]:col-span-1 min-[1230px]:row-span-2">
            <div className="flex items-center gap-2 ">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a-/ALV-UjW64XfgSO3oGW5QZLhpY9io7qLX3hUVRVDxdLwrGUNHBuM=w36-h36-p-rp-mo-ba5-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold">Min Khin</p>
            </div>

            <p className="my-4 p-2 font-medium">
              The first impression with ASE is quite satisfactory. It has a
              compound to repair certain number of vehicles simultaneously. A
              well experienced mechanic is leading the auto workshop.
            </p>
          </div>
          <div className=" rounded-3xl bg-accent p-3 text-background">
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a/ACg8ocI-o0C3Ai6oPym8Adb4Wmbw84Ut4Tckno66oQvUx2Rj=w36-h36-p-rp-mo-ba3-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold">Kyaw Win</p>
            </div>
            <p className=" p-2 font-medium">Good workshop</p>
          </div>
          <div className="rounded-3xl border border-accent/60 bg-[#f9f9f9] p-3">
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a-/ALV-UjWGs2p7WE4THWhNlPTtLHMF6lYaCu-luUP_EaQsbIgRaak=w36-h36-p-rp-mo-ba2-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold text-black/80">Zack Daniel</p>
            </div>
            <p className="mt-5 p-2 font-medium text-black/80">
              Nice place which gained my trust.
            </p>
          </div>
        </div>
        <div className="hidden items-center p-8 lg:flex">
          <Image
            alt="Review"
            src={"/review.svg"}
            width={400}
            height={400}
            className="max-h-full w-full"
          />
        </div>
        <div className=" grid grid-cols-1 gap-3  md:grid-cols-2 lg:py-8">
          <div className="rounded-3xl border border-primary/60 p-3 md:col-span-2">
            <div className="flex items-center gap-5">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a-/ALV-UjUs6TtD73CGzM9HGC5pntzqnD772tH1r9CFAEnpYjcFpvw=w36-h36-p-rp-mo-ba4-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold">Y Li</p>
            </div>
            <p className="mt-3 p-2 font-medium text-black/80">
              One of the best Auto Mobile General Service in Yangon.
            </p>
          </div>
          <div className="rounded-3xl bg-secondary p-3">
            <div className="flex items-center gap-5">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a-/ALV-UjX11jPDn6O1fKJ03v7qFn3R7myYhcqY7lPUjEhxzgA4Mog=w36-h36-p-rp-mo-ba4-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold">A K</p>
            </div>
            <p className="mt-5 p-2 pb-16 font-medium text-black/80">
              Good "Car Repair Service" Provider
            </p>
          </div>
          <div className="row-span-2 rounded-3xl bg-accent p-3">
            <div className="flex items-center gap-5">
              <Image
                src={
                  "https://lh3.googleusercontent.com/a-/ALV-UjUL01GH5kQ6ESAybrNtLMxEX1VGW0nnBxsQgJK4P1KjHfU=w36-h36-p-rp-mo-ba5-br100"
                }
                alt="reviewed customer"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="font-bold">Kyaw Sein Win</p>
            </div>
            <p className="mt-5 p-2 font-medium text-black/80">
              Clean, professional and patient staff
            </p>
          </div>
          <div className="hidden rounded-3xl bg-primary  p-3 md:inline-block"></div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
