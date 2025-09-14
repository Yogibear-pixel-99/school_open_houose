import styles from "./all-schools.module.scss";
import { useState, useEffect } from "react";
import SingleSchool from "./single-school/single-school";
import { allSchools, type SchoolsData } from "./schools";

export default function MainSection() {
  const [schools, setSchools] = useState<SchoolsData>(allSchools);
  useEffect(() => {
    sortSchools();
  }, []);

  const lastWord = (address: string) => {
    let word = address.trim().split(" ");
    return word[word.length - 1].toLowerCase();
  };

  const sortSchools = () => {
    const sortedSchools = [...schools].sort((a, b) => {
      return lastWord(a.address).localeCompare(lastWord(b.address));
    });
    setSchools(sortedSchools);
  };

  return (
    <section id="allSchools" className={`${styles["section"]} pad-main`}>
      <h2 className={`${styles["header"]} sub-header-font`}>
        Weiterführende Schulen
      </h2>
      <div className={`${styles["school-wrapper"]} `}>
        {schools.map((school, index) => {
          return <SingleSchool key={index} {...school} />;
        })}
      </div>
    </section>
  );
}
