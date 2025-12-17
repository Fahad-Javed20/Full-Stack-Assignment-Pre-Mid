const HeroComponent = () => {
  return (
    <section className="body-font" style={{ color: '#F2E9DB' }}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            Welcome to Your Employee Portal
            <br className="hidden lg:inline-block" />
            Stay Connected & Productive
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            Access all your resources, company updates, and personal information in one secure place. Collaborate efficiently and stay informed with everything you need for your work.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex py-2 px-6 rounded text-lg font-semibold"
              style={{ backgroundColor: '#5B7D95', color: '#F2E9DB' }}
            >
              Go to Dashboard
            </button>
            <button
              className="ml-4 inline-flex py-2 px-6 rounded text-lg font-semibold border border-[#F2E9DB]"
              style={{ backgroundColor: '#5B7D95', color: '#F2E9DB' }}
            >
              Company Resources
            </button>
          </div>
        </div>

        <div className="lg:max-w-md lg:w-4/5 md:w-3/5 w-4/5">
  <img
    className="object-cover object-center rounded-2xl shadow-lg lg:h-110 md:h-96 h-64"
    alt="employee portal"
    src="https://url-shortener.me/3XRP"
  />
</div>


      </div>
    </section>
  );
};

export default HeroComponent;
