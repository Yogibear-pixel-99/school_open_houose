import styles from "./all-schools.module.scss";
import SingleSchool from "./single-school/single-school";
import { allSchools } from "./schools";

export default function MainSection() {


  return (
    <section id="allSchools" className={`${styles["section"]} pad-main`}>
    <h2 className={`${styles["header"]} sub-header-font`}>Weiterführende Schulen</h2>
      <div className={`${styles["school-wrapper"]} `}>
        {allSchools.map((school, index) => {
            return <SingleSchool key={index} {...school} />
           
        })}
        </div>
    </section>
  );
}
