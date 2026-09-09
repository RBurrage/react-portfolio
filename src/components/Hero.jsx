import Title from "./Title";
import Button from "./Button";

export default function Hero() {
  const showMsg = (text) => {
    alert(text);
  };
  return (
    <section id="home" className="hero-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Title text="Hi, I'm Alex" tagName="h1" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
              Creative <span className="gradient-text">Developer</span> &
              Designer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I build beautiful, functional websites and applications that help
              businesses grow and stand out in the digital world.
            </p>
            <div className="flex space-x-4">
              <Button
                handleClick={showMsg}
                text="Get In Touch"
                variant="primary"
              />
              <Button
                handleClick={showMsg}
                text="View My Work"
                variant="normal"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl floating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
