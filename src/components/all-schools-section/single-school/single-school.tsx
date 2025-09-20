import styles from "./single-school.module.scss";
import type { School } from "../schools";

/**
 * Displays information about a single school including its name, address,
 * a link to the homepage, and the open day information.
 *
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the school
 * @param {string} props.address - The address of the school
 * @param {string} props.hrefPath - URL to the school's homepage
 * @param {string} props.dayOfOpen - Date or description of the open day event
 *
 * @returns {JSX.Element} A section element containing the school's information
 */
export default function SingleSchool({
  name,
  address,
  hrefPath,
  dayOfOpen,
}: School) {
  return (
    <section
      className={`${styles["main-content"]} border-txt-box std-glas-effect-shadow pad-txt-box`}>
      <h3 className={`${styles[""]} sub-header-font-small`}>{name}</h3>
      <div>
        <span className={`school-box-header-font`}>Adresse - </span>
        <span className={`main-txt-font`}>{address}</span>
      </div>
      <div>
        <span className={`school-box-header-font`}>Mehr Infos: </span>
        <a className={`main-txt-font`} href={hrefPath} target="_blank">
          zur Homepage
        </a>
      </div>
      <div>
        <span className={`school-box-header-font`}>Tag der offenen Tür - </span>
        <span className={`main-txt-font`}>{dayOfOpen}</span>
      </div>
    </section>
  );
}
