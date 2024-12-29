export default function Tavsif() {
  return (
    <section className="">
      {/* Header */}
      <div className=" bg-white py-6 mb-1">
        <h3 className="font-semibold text-base lg:text-lg">Tavsif</h3>
      </div>

      {/* Content */}
      <div className="bg-white w-full px-4 md:px-6 lg:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-8 pb-6">
          {/* First Column */}
          <p className="w-full max-w-full md:max-w-[400px] lg:max-w-[440px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, rem illo, suscipit repellendus molestiae facere labore ad aut, nemo velit minima ab nostrum. Rerum asperiores aut deserunt ratione libero odit?
          </p>
          {/* Second Column */}
          <p className="w-full max-w-full md:max-w-[400px] lg:max-w-[440px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae aliquam exercitationem magni ducimus qui totam omnis voluptatum unde, quia ipsam possimus, animi impedit eos beatae odit, adipisci accusantium! Quia.
          </p>
        </div>

        {/* Single Paragraph */}
        <div>
          <p className="w-full max-w-full md:max-w-[400px] lg:max-w-[440px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, perferendis atque? At esse itaque qui sed ipsa? Placeat velit tenetur, voluptate accusamus deleniti cumque quos repudiandae unde cum, laboriosam maxime!
          </p>
        </div>
      </div>
    </section>
  );
}
