const AddUserIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" fill="none">
      <g stroke="#0051E5" strokeWidth="1.5" filter="url(#a)">
        <circle
          cx="4"
          cy="4"
          r="4"
          fill="#0051E5"
          opacity=".3"
          transform="matrix(-1 0 0 1 15.75 3)"
        />
        <path
          fill="#0051E5"
          d="M4.75 16.935c0-.86.54-1.628 1.351-1.917a16.794 16.794 0 0 1 11.298 0 2.036 2.036 0 0 1 1.351 1.917v1.315c0 1.188-1.052 2.1-2.227 1.932l-.955-.136a27.002 27.002 0 0 0-7.636 0l-.955.136A1.951 1.951 0 0 1 4.75 18.25v-1.315Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 11h4M20.75 9v4"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="32"
          height="32"
          x="-2.25"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_219_511"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_219_511"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AddUserIcon;
