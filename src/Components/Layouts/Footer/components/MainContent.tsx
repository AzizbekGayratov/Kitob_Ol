import { FooterLogo } from "../../../../assets/images/svg";

export default function MainContent() {
  return (
    <div className="container pt-5 lg:pt-[60px] pb-10 flex flex-col lg:flex-row lg:justify-between px-4 sm:px-8 lg:px-4">
      <div className="flex flex-col lg:gap-5 gap-2 lg:max-w-[300px]">
        <div className="-ml-8">
          <img src={FooterLogo} alt="kitobol footer logosi" />
        </div>
        <p className="text-[16px] leading-[19px]">
          Onlayn platformaga tegishli barcha materiallar "Kitob Ol" MCHJning
          mulki hisoblanadi. Ushbu Saytdan kitob ayrboshlashdan tashqari boshqa
          maqsadlarda foydalanish qonunan man etiladi.
        </p>
      </div>
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-10 lg:mt-0 mb-10 lg:mb-0">
        <li>
          <a href="#">Ommaviy oferta</a>
        </li>
        <li>
          <a href="#">Sayt haqida</a>
        </li>
        <li>
          <a href="#">Yo’riqnoma</a>
        </li>
      </ul>
      <a href="tel:+998777878877" className="block text-[32px] font-semibold leading-[39px]">
        77 787 88 77
      </a>
    </div>
  );
}
