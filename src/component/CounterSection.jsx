 

const CounterSection = () => {
  return (
    <div className="bg-linear-to-r rounded-lg from-purple-600 to-pink-500 py-8 transition-all duration-300 text-center hover:-translate-y-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-center gap-8 ">
        {/* Item 1 */}
        <div className="space-y-2 transition-all duration-300 text-center hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-80">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-14 bg-white/30"></div>

        {/* Item 2 */}
        <div className="space-y-2 transition-all duration-300 text-center hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-14 bg-white/30"></div>

        {/* Item 3 */}
        <div className="space-y-2 transition-all duration-300 text-center hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-80">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
