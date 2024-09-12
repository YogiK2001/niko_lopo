import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl font-semibold mt-2 font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-2lx text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
