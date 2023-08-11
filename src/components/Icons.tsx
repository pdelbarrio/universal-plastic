interface IconProps {
  isClicked: boolean;
}

export const Disc = ({ isClicked }: IconProps) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isClicked ? "text-plastic-blue" : "text-plastic-blue-light"}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      {isClicked && (
        <div className="absolute w-[5px] h-[5px] bg-plastic-blue rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></div>
      )}
    </div>
  );
};

export const Cloud = ({ isClicked }: IconProps) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isClicked ? "text-plastic-blue" : "text-plastic-blue-light"}
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
      {isClicked && (
        <div className="absolute w-[5px] h-[5px] bg-plastic-blue rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></div>
      )}
    </div>
  );
};

export const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 40"
      x="0px"
      y="0px"
      width="20"
      height="20"
      fill="none"
      className="fill-current pt-1"
    >
      <g data-name="Layer 2">
        <path d="M16,2A11,11,0,0,0,5,13c0,9.41,10,16.52,10.43,16.82a1,1,0,0,0,1.14,0C17,29.52,27,22.41,27,13A11,11,0,0,0,16,2Zm0,25.75C13.93,26.13,7,20.15,7,13a9,9,0,0,1,18,0C25,20.15,18.07,26.13,16,27.75ZM16,7a5,5,0,1,0,5,5A5,5,0,0,0,16,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,16,15Z" />
      </g>
    </svg>
  );
};
