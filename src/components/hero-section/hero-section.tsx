import styles from "./hero-section.module.scss";
import Header from "../header/header";
import HeroText from "./text-content/text-content";
import { useState } from "react";

export default function HeroSection() {
  type Fruit = {
    id: number;
    name: string;
  };

  const fruits: Fruit[] = [
    { id: 1, name: "Apfel" },
    { id: 2, name: "Banane" },
    { id: 3, name: "Kirsche" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Traube" },
  ];

  const [fruitsArray, setFruitsArray] = useState<Fruit[]>(fruits);
  const [userInput, setUserInput] = useState<string>("");

  const sortFruits = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArr = [...fruits].filter((fruit) => {
  
      return fruit.name.toLowerCase().includes(event.target.value.toLowerCase());
      
      
    });
    setUserInput(event.target.value);
    setFruitsArray(newArr);
  };

  return (
    <>
      <Header />
      <section className={`${styles["main-content"]} pad-main`}>
        <div className={styles["shadow-separator"]}>
          {fruitsArray.map((fruit) => {
            return <div key={fruit.id}>{fruit.name}</div>;
          })}

          <div>
            <input type="text" value={userInput} onChange={sortFruits} />
          </div>
        </div>
        <HeroText />
      </section>
    </>
  );
}
