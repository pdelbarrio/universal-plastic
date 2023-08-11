import { Link } from "react-router-dom";
import { Cloud, Disc } from "./Icons";

export default function FooterNav() {
  return (
    // <footer className="fixed bottom-0 bg-white border-[1px] border-plastic-blue-light flex justify-center pt-[16px] pr-[32px] pb-[16px] pl-[32px]">
    <footer className="fixed bottom-0 bg-white border-[1px] border-plastic-blue-light flex justify-center pt-[16px] pr-[32px] pb-[16px] pl-[32px] w-full max-w-screen-sm">
      <div className="flex justify-between items-center">
        <Link to="/">
          <Disc />
        </Link>
        <Link to="/weather">
          <Cloud />
        </Link>
      </div>
    </footer>
  );
}
