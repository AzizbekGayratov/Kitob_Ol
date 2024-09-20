import ButtonGroup from "./MainContent/ButtonGroup";
import ContactInfo from "./MainContent/ContactInfo";

export default function MainContent() {
  return (
    <div className="sm:p-10 pt-5 px-4 pb-10 flex items-center md:flex-row flex-col md:gap-0 gap-10 justify-between">
      <ContactInfo />
      <ButtonGroup />
    </div>
  );
}
