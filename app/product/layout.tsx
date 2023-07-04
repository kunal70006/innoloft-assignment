export const metadata = {
  title: "Innoloft Product",
  description: "Innoloft Product Page.",
};

import Image from "next/image";

export default function ProductRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={`flex px-5 h-[7vh] xl:px-48 bg-primary items-center`}>
        <div className="h-[6vh] w-48 relative">
          <Image
            src={process.env.logo!}
            alt="Innoloft logo."
            fill
            className="object-contain"
          />
        </div>
        <div className="hidden md:flex justify-between flex-1 ml-56 items-center">
          <div className="relative flex items-center w-1/2">
            <input
              type="text"
              className="rounded-md bg-white w-full text-lg px-2 pr-10 py-1 outline-none placeholder:text-slate-600 text-slate-900"
              placeholder="Enter interests, keyword, company name, etc."
            />
            <Image
              src="/search.svg"
              alt="search icon."
              className="absolute right-4"
              width={16}
              height={16}
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/message.svg"
              alt="message icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="flex">
              <p className="mr-2 text-white">EN</p>
              <Image
                src="/down.svg"
                alt="down icon"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
            <Image
              src="/bell.svg"
              alt="notifications icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="flex">
              <Image
                src="/pfp.svg"
                alt="profile icon"
                width={25}
                height={25}
                className="mr-2 cursor-pointer"
              />
              <Image
                src="/down.svg"
                alt="down icon"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="px-3 pt-5 xl:px-48 bg-slate-100">{children}</main>
    </>
  );
}
