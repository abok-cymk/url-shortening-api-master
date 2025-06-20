import Illustration from "../components/Illustration";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Typography from "../components/ui/Typography";

const Intro = () => {
  return (
    <section className="px-6 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left w-full order-2 md:order-1 flex flex-col gap-y-6">
          <div>
            <Heading
              as="h1"
              className="lh text-4xl text-VeryDarkBlue lg:text-7xl font-bold"
            >
              More than just shorter links
            </Heading>
            <Typography className="leading-7 text-Gray text-lg">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Typography>
          </div>
          <Button type="button" className="rounded-full w-fit max-sm:mx-auto">
            Get started
          </Button>
        </div>
        <Illustration className="order-1 md:order-2 lg:translate-x-32" />
      </div>
    </section>
  );
}

export default Intro;
