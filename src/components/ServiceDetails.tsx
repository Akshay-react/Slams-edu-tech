import { useParams } from "react-router-dom";
import { services } from "../data/service";

const ServiceDetails = () => {
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">

        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">
            {service.title} <span className="text-blue-400">Solutions</span> for Your Business
          </h1>

          <p className="text-gray-400 mb-6">
            {service.text}
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full">
            Start Your Project
          </button>
        </div>

        <div className="flex-1">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">About The Service</h2>
        <p className="text-gray-400">
          Our {service.title} services combine cutting-edge technology with creative design
          to deliver exceptional digital experiences.
        </p>
      </section>

      {/* WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="mb-2">Static Websites</h3>
            <p className="text-gray-400 text-sm">
              Fast, SEO-optimized static sites.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="mb-2">Dynamic Websites</h3>
            <p className="text-gray-400 text-sm">
              Interactive web apps with real-time features.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="mb-2">E-commerce</h3>
            <p className="text-gray-400 text-sm">
              Online stores with payment integration.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="mb-2">Custom Web Apps</h3>
            <p className="text-gray-400 text-sm">
              Tailored solutions for businesses.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-10">Our Process</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl mb-2">01 Planning</h3>
            <p className="text-gray-400 text-sm">
              Understanding project requirements and defining scope.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">02 Design</h3>
            <p className="text-gray-400 text-sm">
              Creating wireframes and UI designs.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">03 Development</h3>
            <p className="text-gray-400 text-sm">
              Building scalable and robust solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">04 Testing</h3>
            <p className="text-gray-400 text-sm">
              Testing, debugging and improvements.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">05 Launch</h3>
            <p className="text-gray-400 text-sm">
              Deployment, optimization and support.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-blue-900 rounded-2xl text-center py-12 px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s discuss how we can help bring your vision to life
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full">
            Get a Quote
          </button>

        </div>

      </section>

    </div>
  );
};

export default ServiceDetails;