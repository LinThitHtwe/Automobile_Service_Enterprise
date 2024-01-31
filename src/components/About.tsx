import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="my-10 h-full  p-10">
      <div className="flex">
        <div className="max-h-96 w-[50%] overflow-hidden p-3">
          <div className="w-[80% h-full">
            <Image
              src={"/workshop_pic_1.png"}
              alt="Workshop 1"
              width={800}
              height={800}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
        <div className="w-[50%] px-3 py-2">
          <h4 className="px-6 py-2 text-4xl font-bold tracking-tight text-gray-900/90">
            Lorem ipsum dolor sit
          </h4>
          <p className="break-all px-6 py-2 tracking-wide text-gray-600/90">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            ut voluptate atque porro laborum, quis impedit numquam, odio
            provident dolorem consectetur sit pariatur aspernatur facere
            deserunt cupiditate fugit dicta ea. Fuga quibusdam doloremque
            asperiores commodi molestiae quidem qui, sit eaque ducimus omnis
            perferendis provident fugiat maxime totam autem nulla in facere nisi
            cupiditate deserunt! Deleniti nemo quo repudiandae iste ullam. Ad
            perspiciatis fugit facere magni Ipsam laborum quos voluptatem
            deleniti architecto fugiat? Ducimus nobis voluptas odio recusandae
            quo accusamus inventore quaerat perspiciatis, ea excepturi veniam.
            Quas, alias! Explicabo nisi aliquam, dolores ipsam architecto
            temporibus? Molestias ipsum numquam labore architecto, impedit natus
            eligendi.
          </p>
        </div>
      </div>
      <div className="my-20 flex">
        <div className="w-[50%] px-3 py-2">
          <h4 className="px-6 py-2 text-4xl font-bold tracking-tight text-gray-900/90">
            Lorem ipsum dolor sit
          </h4>
          <p className="break-all px-6 py-2 tracking-wide text-gray-600/90">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            ut voluptate atque porro laborum, quis impedit numquam, odio
            provident dolorem consectetur sit pariatur aspernatur facere
            deserunt cupiditate fugit dicta ea. Fuga quibusdam doloremque
            asperiores commodi molestiae quidem qui, sit eaque ducimus omnis
            perferendis provident fugiat maxime totam autem nulla in facere nisi
            cupiditate deserunt! Deleniti nemo quo repudiandae iste ullam. Ad
            perspiciatis fugit facere magni Ipsam laborum quos voluptatem
            deleniti architecto fugiat? Ducimus nobis voluptas odio recusandae
            quo accusamus inventore quaerat perspiciatis, ea excepturi veniam.
            Quas, alias! Explicabo nisi aliquam, dolores ipsam architecto
            temporibus? Molestias ipsum numquam labore architecto, impedit natus
            eligendi.
          </p>
        </div>
        <div className="max-h-96 w-[50%] p-3">
          <Image
            src={"/workshop_pic_2.png"}
            alt="Workshop 1"
            width={500}
            height={200}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
