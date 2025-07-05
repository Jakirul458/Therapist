import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 max-w-2xl mx-auto">
        <Image
          src="/serena-blake.jpg"
          alt="Dr. Serena Blake headshot"
          width={180}
          height={180}
          className="rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 drop-shadow-lg">
          Dr. Serena Blake, PsyD
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-6 text-gray-700">
          Compassionate Therapy for Change, Insight, and Well-Being
        </h2>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg mt-2"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
} 