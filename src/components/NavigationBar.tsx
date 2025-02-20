import lightMode from "../assets/light-mode.svg";

export default function NavigationBar() {
  return (
    <header className="font-nunito bg-white px-2 mb-12 shadow-2xs">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-extrabold text-neutral-900">
          Where in the world?
        </h1>
        <button className="p-2 text-neutral-900 flex items-center gap-2 font-semibold cursor-pointer">
          <img className="w-6 h-6" src={lightMode} />
          Dark Mode
        </button>
      </div>
    </header>
  );
}
