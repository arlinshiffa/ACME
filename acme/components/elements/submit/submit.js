import PropTypes from 'prop-types';
import styles from './submit.module.scss';

export default function Submit({ text }) {
  return <div id="submit" className={styles.submit}>{text}</div>;
}

Submit.propTypes = {
  text: PropTypes.string,
};

Submit.defaultProps = {
  text: 'Data berhasil disimpan',
};
