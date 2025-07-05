import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 max-w-5xl">
        <div className="flex-shrink-0">
          <Image
            src="/serena-blake.jpg"
            alt="Dr. Serena Blake headshot"
            width={250}
            height={300}
            className="rounded-xl shadow-lg object-cover border-4 border-blue-100"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">About Dr. Serena Blake</h2>
          <p className="mb-4 text-lg text-gray-700">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <ul className="mb-4 text-gray-700">
            <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
            <li><strong>Experience:</strong> 8 years of practice, 500+ sessions</li>
            <li><strong>Contact:</strong> (323) 555-0192 &bull; <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></li>
          </ul>
          <div className="mb-2">
            <strong>Office Hours:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>In-person: Tue & Thu, 10 AM–6 PM</li>
              <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 