import Image from "@/components/Image";
import styles from "./Bento6.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/bento-6.svg" width={368} height={536} alt="" />
        </div>
    </div>
);

export default Bento;
