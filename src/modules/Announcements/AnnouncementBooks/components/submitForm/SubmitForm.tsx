export default function SubmitForm() {
  return (
    <div className="container bg-white p-7 flex flex-col sm:flex-row sm:justify-end gap-4 -mt-5 ">
      <button
        type="reset"
        className="bg-white rounded text-base leading-[19px] border text-primary border-primary py-4 px-5 sm:px-7"
      >
        Tekshirib ko'rish
      </button>

      <button
        type="submit"
        className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3 sm:px-5"
      >
        E'lonni joylashtirish
      </button>
    </div>
  );
}
