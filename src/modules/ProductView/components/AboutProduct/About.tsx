import { AboutComment, AboutInfo } from "./components";

export default function About() {
  return (
    <section className="mt-10 grid xl:grid-cols-11 xl:gap-2 grid-cols-1">
      <AboutInfo />
      <AboutComment />
    </section>
  );
}
