import styles from "./all-schools.module.scss";
import { useState, useEffect } from "react";
import SingleSchool from "./single-school/single-school";
import { allSchools, type SchoolsData } from "./schools";

/**
 * MainSection component renders a list of schools sorted by the last word in their address.
 *
 * @component
 * @returns {JSX.Element} The section with all schools displayed.
 */
export default function MainSection() {
  const [schools, setSchools] = useState<SchoolsData>(allSchools);
  useEffect(() => {
    sortSchools();
  }, []);

  /**
   * Extracts the last word from an address string and returns it lowercased.
   * @param {string} address - The full address string.
   * @returns {string} The last word in the address, in lowercase.
   */
  const lastWord = (address: string) => {
    let word = address.trim().split(" ");
    return word[word.length - 1].toLowerCase();
  };

  /**
   * Sorts schools by the last word of their address and updates the state.
   */
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
