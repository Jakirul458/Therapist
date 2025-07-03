import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/service-anxiety.jpg",
    description:
      "Learn practical tools to manage anxiety, reduce stress, and regain a sense of calm. Dr. Blake uses evidence-based techniques like cognitive-behavioral therapy and mindfulness to help you break free from worry and overwhelm, so you can live with greater ease and confidence.",
  },
  {
    title: "Relationship Counseling",
    image: "/service-relationship.jpg",
    description:
      "Strengthen your relationships and improve communication with compassionate, nonjudgmental support. Whether you're facing challenges as a couple or want to build healthier connections, Dr. Blake helps you navigate conflict, deepen understanding, and foster lasting bonds.",
  },
  {
    title: "Trauma Recovery",
    image: "/service-trauma.jpg",
    description:
      "Heal from past trauma in a safe, supportive environment. Dr. Blake integrates trauma-informed care and gentle therapeutic approaches to help you process difficult experiences, restore your sense of safety, and move forward with resilience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Services & Specialties</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="rounded-lg mb-4 object-cover h-28 w-28"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-700 text-lg">
          <strong>Session Fees:</strong> $200 / individual &bull; $240 / couples
        </div>
      </div>
    </section>
  );
} 