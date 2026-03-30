 
import createImg from "../assets/user.png";
import chooseImg from "../assets/package.png";
import startImg from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required.",
    img: createImg,
  },
  {
    id: "02",
    title: "Choose Tools",
    description: "Browse and select tools that match your workflow needs.",
    img: chooseImg,
  },
  {
    id: "03",
    title: "Start Building",
    description: "Use tools instantly and boost your productivity.",
    img: startImg,
  },
];

const Started = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl md:text-5xl font-bold">
          Get Started in{" "}
          <span className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            3 Steps
          </span>
        </h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative group">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 text-center hover:-translate-y-2 h-full">
              {/* Image Circle */}
              <div className="mx-auto w-20 h-20 mb-4 rounded-full bg-linear-to-r from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>

            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 bg-linear-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-base font-bold shadow-sm">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Started;
