import { IDNameCommon, OfferDetails } from "@/types";
import Image from "next/image";

const OfferDetails: React.FC<OfferDetails> = ({
  technologies,
  trl,
  businessModels,
  costs,
}) => {
  return (
    <div className="flex flex-col bg-white my-5 p-5 rounded-md border">
      <h1 className="text-lg font-medium text-slate-800">Offer Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-4">
        <Details title="Technology" icon="tech" detailsArr={technologies} />
        <Details
          title="Business Model"
          icon="bModel"
          detailsArr={businessModels}
        />
        <Details
          title="Implementation Time"
          icon="clock"
          detailsArr={[{ name: trl, id: 0 }]}
        />
        <Details
          title="Costs"
          icon="investor"
          detailsArr={[{ name: costs, id: 0 }]}
        />
      </div>
    </div>
  );
};

export default OfferDetails;

const Details: React.FC<{
  detailsArr: IDNameCommon[];
  title: string;
  icon: string;
}> = ({ detailsArr, title, icon }) => {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src={`/${icon}.svg`}
          alt={`${title} icon`}
          height={24}
          width={24}
        />
        <p className="text-slate-800 ml-2">{title}</p>
      </div>
      <div className="flex gap-2 ml-6 mt-2 flex-wrap">
        {detailsArr.map((t) => (
          <div
            className="px-3 text-sm py-1 bg-indigo-400 text-indigo-100 rounded-xl"
            key={t.id}
          >
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};
