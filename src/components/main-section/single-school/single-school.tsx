import styles from "./single-school.module.scss";

type SchoolInfo = {
  name: string;
  town: string;
  hrefPath: string;
  dayOfOpen: string;
  focus: string;
};

export default function SingleSchool({name, town, hrefPath, dayOfOpen, focus} : SchoolInfo) {
  return (
    <section className={`${styles["main-content"]} border-txt-box std-glas-effect-shadow pad-txt-box`}>
      <h3>{name}</h3>
      <div>{name}</div>
      <div>{town}</div>
      <div>
        <span>
          Homepage - <a href="#">{hrefPath}</a>
        </span>
      </div>
      <div>
        <span>Tag der offenen Tür - <a href="#">{dayOfOpen}</a></span>
      </div>
      <div>
        <span>Schwerpunkt -</span><span>{focus}</span>
      </div>
    </section>
  );
}
