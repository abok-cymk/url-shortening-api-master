import { memo } from "react";
import Heading from "../../components/ui/Heading";
import Typography from "../../components/ui/Typography";

const baseImagePath = import.meta.env.BASE_URL;

const offers = [
  {
    id: 1,
    icon: `${baseImagePath}/icon-brand-recognition.svg`,
    offer: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: `${baseImagePath}/icon-detailed-records.svg`,
    offer: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: `${baseImagePath}/icon-fully-customizable.svg`,
    offer: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Analytics = () => {
  return (
    <section id="analytics" className="mt-10 px-6 lg:px-0">
      <div className="max-w-md mx-auto text-center">
        <Heading as="h2" className="font-bold text-3xl pb-2">
          Advanced Statistics
        </Heading>
        <Typography as="p">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </div>
      <div className="card__container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-10 mt-24 relative">
        {offers.map((item) => (
          <div
            key={item.id}
            className={`bg-white shadow-lg rounded-lg p-8 relative ${
              item.id === 2
                ? "md:translate-y-8"
                : item.id === 3
                ? "md:translate-y-16"
                : ""
            }`}
          >
            <div className="bg-DarkViolet absolute max-sm:left-1/2 max-sm:-translate-x-1/2 -translate-y-3/4 w-fit rounded-full p-5">
              <img
                src={item.icon}
                alt={`${item.offer} icon`}
                className="h-10 w-10 object-cover"
              />
            </div>
            <div className="mt-12 text-center md:text-left">
              <Heading as="h3" className="font-bold text-xl pb-2">
                {item.offer}
              </Heading>
              <Typography as="p">{item.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Analytics);
