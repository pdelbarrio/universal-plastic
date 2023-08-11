import { Link } from "react-router-dom";
import { Cloud, Disc } from "./Icons";
import { useState } from "react";

export default function FooterNav() {
  const [isDiscClicked, setIsDiscClicked] = useState<boolean>(true);
  const [isCloudClicked, setIsCloudClicked] = useState<boolean>(false);
  return (
    <footer className="fixed bottom-0 bg-white border-[1px] border-plastic-blue-light flex justify-center pt-[16px] pb-[32px] w-full max-w-screen-sm">
      <div className="flex gap-20">
        <Link
          to="/"
          onClick={() => {
            setIsDiscClicked(true);
            setIsCloudClicked(false);
          }}
        >
          <Disc isClicked={isDiscClicked} />
        </Link>
        <Link
          to="/weather"
          onClick={() => {
            setIsCloudClicked(true);
            setIsDiscClicked(false);
          }}
        >
          <Cloud isClicked={isCloudClicked} />
        </Link>
      </div>
    </footer>
  );
}
