import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2
          className="mt-10 font-palanquin font-bold text-4xl
        captalize lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg ">
          Ensuring prem•um comfort and our meticulously crafted footwear is
          designed to elevate your experience, providing you with unmatched
          quality. innovation. and a touch of elegance.
        </p>
        <br />
        <p className="info-text mt-6 lg:max-w-lg ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
