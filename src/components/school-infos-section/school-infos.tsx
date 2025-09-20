import { appointments } from "./appointments";
import styles from "./school-infos.module.scss";

export default function SchoolInfos() {
  return (
    <section id="schoolInfos" className={`${styles["main-content"]} pad-main`}>
      <h1 className={`${styles["header"]} sub-header-font`}>
        Schulfreie Tage im Schuljahr 2025/26
      </h1>
      <div>
        {appointments.map((data) => {
          return (
            <p key={data.id} className="main-txt-font">
              <span className="school-box-header-font">
                {data.justification}
              </span>
              <div>
                <span>{data.days}</span>
                <div>
                <span>{data.from}</span>
                <span> - </span>
                <span>{data.to}</span>
                </div>
              </div>
            </p>
          );
        })}
      </div>
    </section>
  );
}
