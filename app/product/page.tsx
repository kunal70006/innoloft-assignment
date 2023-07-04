import Map from "@/components/Map";
import OfferDetails from "@/components/OfferDetails";
import VideoContainer from "@/components/Video";
import fetcher from "@/helpers/fetcher";
import { ProductData } from "@/types";
import Image from "next/image";

const ProductPage = async () => {
  const data: ProductData = await fetcher(process.env.PRODUCT_DETAILS!);
  if (!data) return <div className="">Something went wrong.</div>;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-3 items-center">
          <Image src="/home.svg" alt="home icon" height={16} width={16} />
          <Image src="/right.svg" alt="right arrow" height={20} width={20} />
          <p className="text-sm text-slate-400">Offers</p>
          <Image src="/right.svg" alt="right arrow" height={20} width={20} />
          <p className="text-sm text-slate-600 truncate w-1/2 md:w-full">
            {data.name}
          </p>
        </div>
        <button className="rounded-md px-3 py-1 bg-indigo-600 w-fit text-white my-5 md:my-0">
          Edit
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-5 rounded-md bg-white">
        <div className="flex flex-col border xl:w-[65%] md:w-2/3 pb-8">
          <div className="relative h-96 w-96 xl:h-[300px] xl:w-[800px]">
            <Image
              src={data.picture}
              alt="innoloft product"
              fill
              className="object-contain"
            />
            <div className="absolute flex top-0 left-0">
              <div className="bg-indigo-600 rounded-ss-md rounded-ee-md z-10 w-10 h-10 flex items-center justify-center">
                <Image src="/badge.svg" alt="badge" height={16} width={16} />
              </div>
              <div className="bg-white px-3 py-2 rounded-ee-md -ml-1 font-semibold">
                {data.type.name}
              </div>
            </div>
          </div>
          <div className="px-6 py-2">
            <div className="mt-5">
              <h1 className="font-semibold">{data.name}</h1>
            </div>
            <div className="mt-5">
              <p
                className="text-slate-600"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 flex-grow border border-l-0">
          <h1 className="font-medium text-lg text-slate-800">Offered By</h1>
          <div className="relative h-12 w-32">
            <Image
              src={data.company.logo}
              fill
              alt="company logo"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex relative h-16 w-16">
              <Image
                src={data.user.profilePicture}
                alt="profile picture"
                fill
                className="object-contain rounded-full mr-4"
              />
            </div>
            <div className="flex flex-col text-xs gap-1 text-slate-600">
              <p>{`${data.user.firstName} ${data.user.lastName}`}</p>
              <p>{data.user.position}</p>
            </div>
          </div>
          <div className="flex gap-2 my-5 items-start">
            <Image
              src="/location.svg"
              alt="location pin"
              height={16}
              width={16}
            />
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              <p className="">{`${data.company.address.street} ${data.company.address.house},`}</p>
              <p>{`${data.company.address.zipCode} ${data.company.address.city.name}, ${data.company.address.country.name}`}</p>
            </div>
          </div>
          <Map
            center={{
              lat: Number(data.company.address.latitude),
              lng: Number(data.company.address.longitude),
            }}
          />
        </div>
      </div>
      <VideoContainer source={data.video.split("=")[1]} />
      <OfferDetails
        technologies={data.categories}
        trl={data.trl.name}
        costs={data.investmentEffort}
        businessModels={data.businessModels}
      />
    </section>
  );
};

export default ProductPage;
