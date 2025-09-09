import styles from './text-content.module.scss'


export default function HeroText () {
    return (
            <div className={styles['content']}>
                <h3 className="sub-header-font-small">Der Schulwechsel steht bevor</h3>
                <p className="main-txt-font">Das vierte Volksschuljahr hat begonnen. Viele von euch stellen sich noch einige Fragen diesbezüglich.</p>
                <ul className="main-txt-font">
                    <li>Welche Schulen stehen den zur Auswahl?</li>
                    <li>Welche Schwerpunkte haben diese?</li>
                    <li>Wann ist den Tag der offenen Tür?</li>
                    <li>Muss ich mein Kind dazu anmelden?</li>
                    <li>Wo gibts den Infos dazu?</li>
                </ul>
                <p className="main-txt-font">Ich habe die gängigsten Schulen mit den Infos zusammengetragen. Bitte seit so nett und schickt mir eine EMail um weitere Schulen hinzuzufügen! Ich habe erstmal nur ein paar aufgelistet!</p>

                <p>Joachim Pürcher</p>
            </div>
    );
}