// app/about/page.tsx
import Header from "../components/header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <section className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          The International School of Management and Technology (ISMT) is a premier institution 
          offering high-quality education in business, management, and technology. 
          Located in the heart of Kathmandu, Nepal, ISMT is committed to producing 
          skilled graduates who are ready to meet global challenges. Our curriculum 
          is designed to foster innovation, leadership, and practical skills, 
          preparing students for success in the competitive world.
        </p>
      </section>
    </main>
  );
}
