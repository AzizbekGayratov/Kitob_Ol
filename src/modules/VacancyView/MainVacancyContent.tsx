import AboutJob from "./components/AboutJob";
import AboutPart from "./components/AboutJobPart";
import Tavsif from "./components/Tavsif";

export default function MainVacancyContent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-2 mb-10">
        <div className="col-span-2">
          <AboutJob />
        </div>
        <div className="col-span-1">
          <AboutPart />
        </div>
      </div>
      <Tavsif />
    </>
  );
}
