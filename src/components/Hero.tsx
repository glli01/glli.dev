export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(../assets/background.jpeg)] px-4">
      <div className="max-w-4xl mx-auto text-center text-white space-y-6 pt-32">
        <h1 className="text-5xl md:text-6xl font-serif">
          Hello, I am George Li{" "}
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif">
          A Software Engineer Specializing in NodeJS, and DevOps
        </h2>
        <div className="text-white/80 max-w-2xl mx-auto">
          <p>
            I Lead Teams, Build Scalable Solutions, and Spend My Free Time Rock
            Climbing, Training in Muay Thai, and Exploring New Foods
          </p>
          <div className="mt-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 md:p-8">
              <img
                src="/src/assets/background.jpeg"
                alt="Portal Interface"
                width={800}
                height={400}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
