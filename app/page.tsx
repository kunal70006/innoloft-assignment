const HomePage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-slate-100 text-2xl lg:text-4xl text-gray-900 font-semibold tracking-wide">
      <span>
        Hi! Why don&apos;t you check out my{" "}
        <a
          href="https://portfolio-website-kunal.vercel.app/"
          referrerPolicy="no-referrer"
          target="_blank"
          className="underline"
        >
          Portfolio
        </a>{" "}
        :)
      </span>
    </main>
  );
};

export default HomePage;
