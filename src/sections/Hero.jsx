import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full 
      max-xl:padding-x p-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin font-bold text-8xl
        max-sm:text-[72px] max-sm-leading-[82]"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p
          className="font-montserrat leading-8 text-slate-gray mt-6 mb-14
        sm: max-w-sm "
        >
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Shop More" iconURL={arrowRight} />
        <div
          className="flex justify-starts items-start
        flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="hero shoe"
          width={810}
          height={602}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
