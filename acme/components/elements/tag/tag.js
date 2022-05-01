import styles from './tag.module.scss';

export default function Tag(props) {
  return (
    <span className={styles.tag}>
      {props.text}
    </span>
  );
}
