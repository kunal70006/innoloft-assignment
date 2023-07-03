import fetcher from "@/helpers/fetcher";
import { ProductData } from "@/types";
import Image from "next/image";

const ProductPage = async () => {
  const data: ProductData = await fetcher(
    "https://api-test.innoloft.com/product/6781"
  );
  console.log(data);
  return (
    <section className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-3 items-center">
          <Image src="/home.svg" alt="home icon" height={16} width={16} />
          <Image src="/right.svg" alt="right arrow" height={20} width={20} />
          <p className="text-sm text-slate-400">Offers</p>
          <Image src="/right.svg" alt="right arrow" height={20} width={20} />
          <p className="text-sm text-slate-600 truncate w-1/2 md:w-full">
            Intelligent Finite Elements in Structural mechanics
          </p>
        </div>
        <button className="rounded-md px-3 py-1 bg-indigo-600 w-fit text-white my-5 md:my-0">
          Edit
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
