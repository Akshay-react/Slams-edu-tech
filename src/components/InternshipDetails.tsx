import { useParams } from "react-router-dom";
import { internship } from "@/data/internship";

export default function InternshipDetails() {

  const { id } = useParams();

  const data = internship.find((item) => item.id === id);

  if (!data) {
    return <div>Internship not found</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto py-20">

      <img
        src={data.image}
        alt={data.title}
        className="w-full max-h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {data.title}
      </h1>

      <p className="text-lg mt-4 text-gray-400">
        {data.text}
      </p>

    </div>
  );
}