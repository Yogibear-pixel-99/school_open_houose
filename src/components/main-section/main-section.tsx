
import styles from './main-section.module.scss';

export default function MainSection () {
    return (
<section className={`${styles['section']} pad-main`}>
    <div className={`${styles['main-content']} border-txt-box std-glas-effect-shadow pad-txt-box`}>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
    </div>
</section>
    );
}