import styles from "./single-school.module.scss";

type SchoolInfo = {
  name: string;
  address: string;
  hrefPath: string;
  dayOfOpen: string;
};

export default function SingleSchool({
  name,
  address,
  hrefPath,
  dayOfOpen,
}: SchoolInfo) {
  return (
    <section
      className={`${styles["main-content"]} border-txt-box std-glas-effect-shadow pad-txt-box`}>
      <h3 className={`${styles[""]} sub-header-font-small`}>{name}</h3>
      <div>
        <span className={`school-box-header-font`}>Adresse - </span>
        <span className={`main-txt-font`}>{address}</span>
      </div>
      <div>
        <span className={`school-box-header-font`}>Homepage - </span>
        <a className={`main-txt-font`} href={hrefPath} target="_blank">
          {hrefPath}
        </a>
      </div>
      <div>
        <span className={`school-box-header-font`}>Tag der offenen Tür - </span>
        <span className={`main-txt-font`}>
          {dayOfOpen}
        </span>
      </div>
    </section>
  );
}
