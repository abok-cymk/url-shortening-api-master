import clsx from "clsx";
import { memo } from "react";
import { Link } from "react-router-dom";

const baseImagePath = import.meta.env.BASE_URL;

const platforms = {
  facebook: {
    icon: `${baseImagePath}/icon-facebook.svg`,
    url: "https://facebook.com/profile.php?id=100071916751715",
    label: "Facebook",
  },
  twitter: {
    icon: `${baseImagePath}/icon-twitter.svg`,
    url: "https://x.com/abokallan22",
    label: "Twitter",
  },
  instagram: {
    icon: `${baseImagePath}/icon-instagram.svg`,
    url: "https://www.frontendmentor.io/profile/abok-cymk",
    label: "Instagram",
  },
  pinterest: {
    icon: `${baseImagePath}/icon-pinterest.svg`,
    url: "https://www.frontendmentor.io/profile/abok-cymk",
    label: "Pinterest",
  },
};
const SocialPlatforms = ({
  className = "",
  iconClassName,
  show = Object.keys(platforms),
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      {show.map((key) => {
        const { icon, url, label } = platforms[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={clsx("inline-block m-2", iconClassName)}
          >
            <img src={icon} alt={label} />
          </a>
        );
})}
    </div>
  );
};

export default memo(SocialPlatforms);
