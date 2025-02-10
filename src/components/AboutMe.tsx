import {
  FaUtensils,
  FaMountain,
  FaFistRaised,
  FaDumbbell,
} from "react-icons/fa";

const AboutMe = () => {
  const hobbies = [
    {
      title: "Trying New Foods",
      description:
        "Exploring diverse cuisines and flavors from around the world.",
      icon: <FaUtensils className="w-8 h-8 text-gray-900" />,
    },
    {
      title: "Rock Climbing",
      description: "Challenging myself with new heights and routes.",
      icon: <FaMountain className="w-8 h-8 text-gray-900" />,
    },
    {
      title: "Muay Thai",
      description:
        "Practicing the art of eight limbs for fitness and discipline.",
      icon: <FaFistRaised className="w-8 h-8 text-gray-900" />,
    },
    {
      title: "Lifting",
      description: "Building strength and endurance through weight training.",
      icon: <FaDumbbell className="w-8 h-8 text-gray-900" />,
    },
  ];

  return (
    <section className="py-24 px-4 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-8">About Me</h2>
        <p className="text-center text-muted-foreground mb-1">
          Hello, I'm George Li. I graduated from UC San Diego with a bachelor's
          in computer science and business economics in 2023. One fun fact is
          I've been fortunate enough to travel to 20+ countries!
        </p>
        <p className="text-center text-muted-foreground mb-12">
          Currently, I work at Oracle as a full stack developer, focusing on
          backend and infrastructure. In my free time, I enjoy developing
          projects that interest me and reading papers on technical advancements
          (currently drawn into the Artificial Intelligence craze).
        </p>

        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">My Hobbies</h3>
              <p className="text-gray-600">
                Outside of work, I have a variety of hobbies that keep me active
                and engaged. Here are some of the activities I enjoy:
              </p>
            </div>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 shrink-0">{hobby.icon}</div>
                  <div>
                    <h4 className="font-medium">{hobby.title}</h4>
                    <p className="text-sm text-gray-500">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
