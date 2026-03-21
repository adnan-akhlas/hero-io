import { Link } from "react-router";
import errorImage from "../assets/App-Error.png";

export default function Error() {
  const imgSrc =
    errorImage ||
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-slate-50 font-sans p-6">
      {/* Container for the centered content */}
      <div className="text-center max-w-2xl w-full flex flex-col items-center">
        {/* Illustration Container - Matching the specific aspect and padding */}
        <div className="w-full max-w-md mb-8">
          <img
            src={imgSrc}
            alt="App Not Found"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Heading: OPPS!! APP NOT FOUND */}
        <h1 className="text-[#001f3f] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">
          OPPS!! APP NOT FOUND
        </h1>

        {/* Subtext: The App you are requesting is not found... */}
        <p className="text-slate-500 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        {/* Go Back Button with specific purple gradient */}
        <Link
          to="/"
          className="px-10 py-3 bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-sm rounded-md shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
}
