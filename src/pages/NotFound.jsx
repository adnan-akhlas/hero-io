import { Link } from "react-router";
import image from "../assets/error-404.png";

export default function NotFound() {
  const imgSrc =
    image ||
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Main Content Area */}
      <main className="grow flex items-center justify-center p-6 md:p-12">
        <div className="text-center max-w-xl flex flex-col items-center">
          {/* Illustration Container */}
          <div className="w-full rounded-3xl  flex items-center justify-center my-6">
            <img
              src={imgSrc}
              alt="Page Not Found Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Error Message Text */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
            Oops, page not found!
          </h1>
          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for is not available.
          </p>

          {/* Go Back Button (react-router-dom Link) */}
          <Link
            to="/"
            className="px-8 py-3.5 bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Go Back!
          </Link>
        </div>
      </main>
    </div>
  );
}
