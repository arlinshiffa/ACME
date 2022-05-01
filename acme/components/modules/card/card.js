import styles from './card.module.scss';
import Tag from '../../elements/tag/tag';
import ClockIcon from '../../elements/clock-icon/clock-icon';
import InstagramIcon from '../../elements/instagram-icon/instagram-icon';
import Price from '../../elements/price/price';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image} />
      <div className={styles.card__detail}>
        <Tag text="PENTING" />
        <span className={styles.card__title}>Jasa Perancangan Website e-Commerce</span>
        <span>mulai dari </span>
        <Price price="6.000.000" type="crossed" />
        {' '}
        <Price price="1.000.000" type="red" />
        <div className={styles.card__date}>
          <ClockIcon />
          <span>31 Desember 2022</span>
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
