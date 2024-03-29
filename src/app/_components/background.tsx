"use client";
// Source: https://github.com/openstatusHQ/time-picker/blob/main/src/app/_components/background.tsx

function Background() {
  return (
    <div className="fixed left-0 top-0 -z-50">
      <div className="sticky left-0 top-0 h-screen w-screen overflow-hidden">
        <div className="absolute bg-violet-700/40  inset-0 z-[-1]" />
        <div className="bg-gradient-radial to-transparent via-black absolute left-0 top-0 z-[-1] h-screen w-screen from-0% from-black to-85% blur-md" />

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="dotted-pattern"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="black" />
            </pattern>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="#050010"
            mask="url(#dots-mask)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Background;
