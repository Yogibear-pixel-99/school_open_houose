import { appointments, passkey } from "./appointments";
import styles from "./school-infos.module.scss";
import { useState } from "react";

export default function SchoolInfos() {
  interface SchoolInfos {
    id: number | string;
    justification: string;
    days: string;
    from: string;
    to: string;
  }

  const emptySchoolData:SchoolInfos[] = [{
    id: "",
    justification: "",
    days: "",
    from: "",
    to: "",
  }];

  const [schoolData, setSchoolData] = useState<SchoolInfos[]>(
    emptySchoolData,
  );

  const [showSchoolData, setShowSchoolData] = useState(false);
  const [codeWord, setCodeWord] = useState("");
  const [schoolDataError, setSchoolDataError] = useState(false);
  const changeCodeInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCodeWord(event.target.value);
  };

  const checkCodeWord = () => {
    if (codeWord === passkey) {
      setSchoolData(appointments);
      setShowSchoolData(true);
      setSchoolDataError(false);
    } else {
      setSchoolData(emptySchoolData);
      setShowSchoolData(false);
      setSchoolDataError(true);
    }
  };

  return (
    <section id="schoolInfos" className={`${styles["main-content"]} pad-main`}>
      <h1 className={`${styles["header"]} sub-header-font`}>
        Schulfreie Tage im Schuljahr 2025/26
      </h1>
      <div className={`${showSchoolData ? "block-display" : "hide-display"}`}>
        {schoolData.map((data) => {
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
      <div
        className={`${styles["input-wrapper"]} ${
          !showSchoolData ? "flex-display" : "hide-display"
        }`}>
        <label className={` input-label-font`} htmlFor="schoolInfoInput">
          Codewort eingeben um die Infos zu sehen
        </label>
        <input
          className="input-placeholder-font input-std-layout"
          id="schoolInfoInput"
          type="text"
          onChange={changeCodeInputField}
          value={codeWord}
        />
        <div className={`${styles['input-error-wrapper']} input-error-font`}>
        <span className={`${styles['input-error']} input-error-font error-color ${schoolDataError ? "block-display" : "hide-display"}`}>Falsches Codewort</span>
        </div>
        <button
          className="button-std-font btn-std-layout"
          onClick={checkCodeWord}>
          Inhalt anzeigen
        </button>
      </div>
    </section>
  );
}
