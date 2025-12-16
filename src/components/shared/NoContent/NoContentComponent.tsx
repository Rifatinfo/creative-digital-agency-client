"use client";
import { useRouter } from "next/navigation";

export default function NoContentComponent() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-64 bg-[#a6293e]  text-white p-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        No content in this component yet
      </h2>
      <p className="mb-6 text-center">
        This section is coming soon. Check back later!
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-white text-[#a6293e] font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        Home
      </button>
    </div>
  );
}
