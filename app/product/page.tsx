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
      <div className="flex flex-col rounded-md bg-white mt-5 xl:w-3/4 md:w-2/3">
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
    </section>
  );
};

export default ProductPage;
