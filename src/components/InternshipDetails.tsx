import { useParams } from "react-router-dom";
import { internship } from "@/data/internship";
import { useNavigate } from "react-router-dom";
import { Clock, CircleCheck, Users } from "lucide-react";

export default function InternshipDetails() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const maxSize = 10 * 1024 * 1024; // 10MB

  if (file.size > maxSize) {
    alert("File size must be less than 10MB");
    e.target.value = ""; // reset input
    return;
  }

  console.log("Valid file:", file);
};
  const { id } = useParams();
  const data = internship.find((item) => item.id === id);
  const navigate = useNavigate();

  if (!data) return <div>Internship not found</div>;

  return (
    <div className="bg-black text-white px-6 pt-8">

      {/* HERO SECTION */}
      <div className="mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <button onClick={()=>navigate(-1)} className="text-gray-400 text-[20px] font-medium mb-2">  Back to all Programs</button>

          <h1 className="text-4xl font-medium  mt-2 mb-4">
            {data.title}
          </h1>

          <p className="text-[#BFBFBF] text-[24px] mb-6">
            {data.description}
          </p>  

          <div className="flex gap-4 mb-6">
            <button className="bg-[#2F2F2F] text-[20px] text-white px-4 py-2 rounded-lg">
              <Clock className="text-blue-400 mr-2"/>
              6 Months
            </button>
            <button className="bg-[#2F2F2F] text-[20px] text-white px-4 py-2 rounded-lg">
             <Users className="text-blue-400 mr-2"/> Hybrid/Remote
            </button>
          </div>

          <div className="flex gap-10 text-sm text-gray-400">
            <div className="">
              <p className="text-white text-[24px] font-medium">500+</p>
           <span className="text-[20px] ">  Students Trained  </span> 
            </div>
    <div className="h-[1px] w-16 md:w-[1px] md:h-12 bg-gray-500"></div>
            <div>
              <p className="text-white text-[24px] font-medium">95%</p>
             <span className="text-[20px]">Success Rate  </span> 
            </div>
                <div className="h-[1px] w-16 md:w-[1px] md:h-12 bg-gray-500"></div>

            <div>
              <p className="text-white text-[24px] font-medium">4.9/5</p>
            <span className="text-[20px]">  Student Rating  </span>
            </div>
          </div>
        </div>

        <img
          src={data.image}
          className="rounded-xl w-full h-[300px] object-cover"
        />
      </div>

      {/* DURATION */}
      <div className="mx-auto px-4 pb-4 ">
        <p className="text-[36px] font-medium mb-2">Internship Duration</p>
          <p className="text-[#BFBFBF] text-[24px] pb-3">Choose a timeline that fits your schedule • Flexible timings for students</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {data.duration.map((item, i) => (
    <div
      key={i}
      className="border border-gray-700 p-4 rounded-xl hover:border-blue-500"
    >
      {/* TITLE from carddetail */}

      <Clock size={32} className="mb-3 text-blue-400" />
                    <p className="text-[32px] mb-2">{item.title}</p>
      <p className="text-[20px] text-[#BCBCBC] mb-3">
        {data.carddetail[i]}
      </p>

      {/* ICON */}

      {/* POINTS */}
      <ul className="text-sm text-gray-400 space-y-2">
        {item.points.map((point: string, idx: number) => (
          <li key={idx} className="flex items-start text-[20px]">
            <CircleCheck
              className="text-blue-400 mr-2 mt-0.5"
              size={24}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <div className="mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-6 text-center">
          What You'll Learn
        </h2>

        <div className="border border-gray-700 rounded-xl p-6 py-16 grid md:grid-cols-2 gap-4 text-gray-400 text-sm">
          <ul className="space-y-4">
            {data.learn.slice(0, Math.ceil(data.learn.length / 2)).map((item, i) => (
              <li className="text-[24px]" key={i}><CircleCheck className=" mr-3 "/> {item}</li>
            ))}
          </ul>

          <ul className="space-y-4">
            {data.learn.slice(Math.ceil(data.learn.length / 2)).map((item, i) => (
              <li className="text-[24px]" key={i}> <CircleCheck className=" mr-3"/> {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* WHAT YOU'LL GET */}
      <div className="mx-auto px-4 py-10 ">
        <h2 className="text-xl font-semibold mb-6">What You'll Get</h2>

       <div className="grid md:grid-cols-3 gap-4">
  {data.benefits.map((item, i) => {
      const Icon = item.img; // 👈 important

    return (
    <div
      key={i}
      className="border border-gray-700 p-4 rounded-xl"
    >
      <div className="bg-[#4E4E4E] rounded-md w-9 h-9 flex justify-center item-center">
                <Icon className="w-8 h-8 mb-3 text-blue-300" /> {/* ✅ correct */}

      </div>
      <h3 className="font-medium text-[24px] mb-2">
        {item.title}
      </h3>
      <p className="text-gray-400 text-[20px]">
        {item.description}
      </p>
    </div>
  );
})}
</div>
      </div>

      {/* FORM */}
      <div className="mx-auto px-10 py-10 border border-[#7C7C7C] rounded-xl">
        <p className=" font-medium text-[32px] mb-6">
          Apply for this Internship
        </p>
        <p className="mb-6 text-[24px]">All fields marked with * are required</p>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">  <p className="pb-2"> First Name*</p>
            <input className="w-full bg-black border border-[#7C7C7C] p-3 rounded-xl" title="first" />
           </div>
           <div className=""> <p className="pb-2"> Last Name* </p>
            <input className="w-full bg-black border border-[#7C7C7C] p-3 rounded-xl" title="last" />   </div>
           <div className=""> <p className="pb-2"> Phone Number* </p>
            <input className="w-full bg-black border border-[#7C7C7C] p-3 rounded-xl" title="ph" />
            </div>
            <div className=""><p className="pb-2"> Email* </p>
            <input className="w-full bg-black border border-[#7C7C7C] p-3 rounded-xl" title="email" />
            </div>
          </div>
            <div className=""><p className="pb-2"> Message </p>
          <textarea
            className="w-full  bg-black border border-[#7C7C7C] p-3 rounded-xl"
          title="area" placeholder="Your message..."
          />
          </div>

          <div>
            <p className="text-sm mb-2">Upload Resume*</p>
            <div className="border p-3 rounded-lg w-[400px] flex">
              <p className="text-[#808080] whitespace-nowrap pr-2">Pdf ( maximum 10 mb )</p>
            <input title="file" type="file" className="text-sm rounded-lg"   accept=".pdf,.doc,.docx"
  onChange={handleFileChange}
/>
            </div>
          </div>

          <button className="w-full bg-white text-black py-3 rounded hover:-translate-y-1 hover:bg-gray-200">
            SUBMIT
          </button>
        </form>
      </div>

      {/* CTA */}
      <div className="mx-auto px-4 pb-16">
        <div className="flex item-center justify-center p-12">
        <p className="text-blue-400 text-[60px] text-sm mb-4">
          Real projects. Real skills. Real career growth.
        </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl  justify-between items-center">
          <div className="flex justify-between">
            <p className="font-semibold">Ready to Begin?</p>
            
          <button className="bg-white text-black px-4 py-2 rounded">
            Apply Now
          </button>
          </div>
          <div className="py-3"><hr /></div>

          <p className="text-gray-400 text-sm">
Start your journey as a React Developer with real-world project experience. Build modern user interfaces, work on live applications, and gain skills that match industry needs.            </p>
        </div>
      </div>
    </div>
  );
}