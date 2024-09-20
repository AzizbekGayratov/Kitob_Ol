import { useSelector } from "react-redux";
import { FormMain, FormTop, UpdatingForm } from "./components";

export default function ProfileForm() {
  const { isProfileUpdating } = useSelector(
    (state: { project: { isProfileUpdating: boolean } }) => state.project
  );

  return (
    <section className="max-w-[1380px] mx-auto bg-white rounded">
      <FormTop />
      {isProfileUpdating ? <UpdatingForm /> : <FormMain />}
    </section>
  );
}
