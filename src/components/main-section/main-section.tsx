import styles from "./main-section.module.scss";
import SingleSchool from "./single-school/single-school";

export default function MainSection() {
  const allSchools = {
    name: "Testschule",
    town: "Teststadt",
    hrefPath: "Testlink",
    dayOfOpen: "TestTag",
    focus: "Testschwerpunkt",
  };

  return (
    <section className={`${styles["section"]} pad-main`}>
        <SingleSchool {...allSchools} /> 
    </section>
  );
}
