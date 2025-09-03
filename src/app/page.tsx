// src/app/page.tsx
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <section className="flex flex-col items-center justify-center text-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg w-full mt-10">
          <p className="mb-2">
            <strong>Address:</strong> Gyaneshwor, Kathmandu, Nepal
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +977-1-4540922
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@ismt.edu.np
          </p>
          <p>
            <strong>Postal Code:</strong> 44600
          </p>
        </div>
      </section>
    </main>
  );
}
