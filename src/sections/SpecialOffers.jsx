import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={770}
          height={680}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2
          className="mt-10 font-palanquin font-bold text-4xl
    captalize lg:max-w-lg"
        >
          Here are some
          <span className="text-coral-red"> Special </span> Offers
          <span className="text-coral-red"> For You </span>
        </h2>
        <p className="info-text mt-4 lg:max-w-lg dark:text-slate-300">
          Embark on an odyssey through a universe crafted to fulfill your
          wildest dreams—far beyond the heights of your grandest aspirations.
          Your journey? Oh, its nothing less than a dazzling spectacle of epic
          proportions!
        </p>
        <br />
        <p className="info-text mt-6 lg:max-w-lg dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey witty us
          is nothing short of exceptiona!,
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-grey"
            textColor="text-slate-grey"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
