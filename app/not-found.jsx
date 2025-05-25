import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate__animated animate__zoomIn">
        404
      </h1>

      <p className="text-2xl font-semibold mb-4 text-gray-200 animate__animated animate__fadeIn animate__delay-2s">
        Oops! Page not found.
      </p>

      <p className="text-lg mb-8 text-gray-400 text-center max-w-md animate__animated animate__fadeIn animate__delay-3s">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <Button className=" text-black text-lg px-8 py-3 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
           Go Home
        </Button>
      </Link>
    </div>
  );
}
