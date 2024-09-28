import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text dark:text-white-400">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          className="w-[24px] h-[24px] object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray dark:text-white-400 ">
          ({rating})
        </p>
      </div>
      <h3 className="mt-4 text-bold font-palanquin text-coral-red text-2xl">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
