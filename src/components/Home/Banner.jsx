export default function Banner() {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] leading-tight mb-6">
          We Build <br />
          <span className="text-[#a855f7]">Productive</span> Apps
        </h1>

        {/* Description */}
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Google Play Button */}
          <button className="flex items-center gap-3 px-6 py-3 border border-slate-200  rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-left flex gap-2.5 items-center">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.03711 0.734506L22.0478 11.1302L28.9817 15.136C29.6323 15.5274 29.6376 16.4626 28.9918 16.8591L28.9613 16.8796L4.05227 31.2606L4.03182 31.2707C3.77775 31.4131 3.49817 31.4283 3.2542 31.3571C2.84758 31.2351 2.5271 30.8641 2.5271 30.3812V1.61896C2.5271 1.13607 2.84734 0.765063 3.2542 0.643078C3.50322 0.571619 3.7828 0.587018 4.03711 0.734506Z"
                    fill="#47BCFF"
                  />
                  <path
                    d="M4.03707 0.734321L22.0478 11.13L17.5235 16L3.25415 0.642652C3.50317 0.571434 3.78275 0.586832 4.03707 0.734321Z"
                    fill="#0BDF74"
                  />
                  <path
                    d="M22.0477 11.13L28.9816 15.1358C29.6322 15.5272 29.6375 16.4625 28.9917 16.859L28.9612 16.8794L22.0477 20.8647L17.5234 16L22.0477 11.13Z"
                    fill="#FDBA21"
                  />
                  <path
                    d="M17.5235 16L22.0478 20.865L4.05223 31.2606L4.03177 31.2707C3.7777 31.4132 3.49812 31.4283 3.25415 31.3571L17.5235 16Z"
                    fill="#FB434C"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold text-slate-800 leading-none">
                Google Play
              </span>
            </div>
          </button>

          {/* App Store Button */}
          <button className="flex items-center gap-3 px-6 py-3 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-left flex gap-2.5 items-center">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_716)">
                    <path
                      d="M25.5328 0.00201416H6.46319C2.89163 0.00201416 0 2.89364 0 6.4652V25.5388C0 29.1064 2.89163 31.998 6.46319 31.998H25.5368C29.1044 31.998 32 29.1064 32 25.5348V6.4652C31.996 2.89364 29.1044 0.00201416 25.5328 0.00201416Z"
                      fill="url(#paint0_linear_1_716)"
                    />
                    <path
                      d="M15.8619 7.35309L16.5099 6.23321C16.9098 5.53328 17.8017 5.29734 18.5016 5.69728C19.2016 6.09721 19.4375 6.98909 19.0376 7.68903L12.7943 18.4957H17.3097C18.7736 18.4957 19.5934 20.2155 18.9576 21.4073H5.71924C4.91137 21.4073 4.26343 20.7594 4.26343 19.9515C4.26343 19.1437 4.91137 18.4957 5.71924 18.4957H9.4308L14.1822 10.2607L12.6984 7.68503C12.2985 6.98509 12.5344 6.10121 13.2344 5.69328C13.9343 5.29334 14.8182 5.52928 15.2261 6.22921L15.8619 7.35309Z"
                      fill="white"
                    />
                    <path
                      d="M10.2466 22.9071L8.84682 25.3348C8.44688 26.0348 7.55501 26.2707 6.85507 25.8708C6.15513 25.4708 5.91919 24.579 6.31913 23.879L7.35901 22.0793C8.53482 21.7153 9.49069 21.9953 10.2466 22.9071Z"
                      fill="white"
                    />
                    <path
                      d="M22.3011 18.5037H26.0886C26.8965 18.5037 27.5444 19.1517 27.5444 19.9595C27.5444 20.7674 26.8965 21.4153 26.0886 21.4153H23.9849L25.4047 23.879C25.8046 24.579 25.5687 25.4628 24.8688 25.8708C24.1688 26.2707 23.2849 26.0348 22.877 25.3348C20.4853 21.1873 18.6895 18.0838 17.4977 16.016C16.2778 13.9123 17.1498 11.8005 18.0096 11.0847C18.9656 12.7245 20.3934 15.2002 22.3011 18.5037Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_716"
                      x1="16"
                      y1="0.00201416"
                      x2="16"
                      y2="31.998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00BFFC" />
                      <stop offset="1" stop-color="#0073F6" />
                    </linearGradient>
                    <clipPath id="clip0_1_716">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-lg font-semibold text-slate-800 leading-none">
                App Store
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
