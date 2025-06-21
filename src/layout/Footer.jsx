import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Logo from "../components/ui/Logo";
import SocialPlatforms from "../components/SocialPlatforms";
import { memo } from "react";

const shortlyLinks = {
  features: ["Link Shortening", "Branded Links", "Analytics"],
  resources: ["Blog", "Developers", "Support"],
  company: ["About", "Our Team", "Careers", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-VeryDarkViolet py-4">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-0 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 lg:gap-36 max-sm:items-center text-center md:text-left">
        <Logo className="logo__footer h-10" />
        <div className="flex md:flex-row flex-col gap-8 lg:gap-24 w-full lg:justify-end">
          {Object.entries(shortlyLinks).map(([key, values]) => (
            <div key={key}>
              <Heading className="font-bold capitalize text-white pb-3">
                {key}
              </Heading>
              <ul className="flex flex-col gap-y-2">
                {values.map((item) => (
                  <li key={item} className="text-Gray">
                    <a href="#">{item}</a>{" "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <SocialPlatforms />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
