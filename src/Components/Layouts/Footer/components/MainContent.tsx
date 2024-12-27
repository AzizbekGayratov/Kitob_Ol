import { useSelector } from "react-redux";
import { FooterLogo } from "../../../../assets/images/svg";

export default function MainContent() {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const text =
    language === "uz"
      ? 'Onlayn platformaga tegishli barcha materiallar "Kitob Ol" MCHJning mulki hisoblanadi. Ushbu Saytdan kitob ayrboshlashdan tashqari boshqa maqsadlarda foydalanish qonunan man etiladi.'
      : language === "ru"
      ? "Все материалы, относящиеся к онлайн-платформе, являются собственностью ООО «Китоб Ол». Использование данного Сайта для целей, отличных от обмена книгами, запрещено законом."
      : 'All materials on the online platform are the property of "Kitob Ol" LLC. Use of this Site for purposes other than book exchange is prohibited by law.';

  return (
    <div className="container pt-5 lg:pt-[60px] pb-10 flex flex-col lg:flex-row lg:justify-between px-4 sm:px-8 lg:px-4">
      <div className="flex flex-col lg:gap-5 gap-2 lg:max-w-[300px]">
        <div className="-ml-8">
          <img src={FooterLogo} alt="kitobol footer logosi" />
        </div>
        <p className="text-[16px] leading-[19px]">{text}</p>
      </div>
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-10 lg:mt-0 mb-10 lg:mb-0">
        <li>
          <a href="#">
            {language === "uz"
              ? "Ommaviy oferta"
              : language === "ru"
              ? "Публичная оферта"
              : "Public offer"}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            {language === "uz"
              ? "Sayt haqida"
              : language === "ru"
              ? "О сайте"
              : "About the site"}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            {language === "uz"
              ? "Sayt haqida"
              : language === "ru"
              ? "О сайте"
              : "About the site"}
          </a>
        </li>
      </ul>
      <a
        href="tel:+998777878877"
        className="block text-[32px] font-semibold leading-[39px]"
      >
        77 787 88 77
      </a>
    </div>
  );
}
