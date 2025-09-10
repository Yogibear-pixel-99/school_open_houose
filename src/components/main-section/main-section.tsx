import styles from "./main-section.module.scss";
import SingleSchool from "./single-school/single-school";
import { allSchools } from "./schools";

export default function MainSection() {


  return (
    <section className={`${styles["section"]} pad-main`}>
        {allSchools.map((school, index) => {
            return <SingleSchool key={index} {...school} />
           
        })}
    </section>
  );
}
