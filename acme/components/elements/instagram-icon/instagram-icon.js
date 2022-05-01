import Image from 'next/image';
import PropTypes from 'prop-types';

export default function InstagramIcon({ width, height }) {
  return (
    <Image src="/img/Instagram.svg" alt="instagram" width={width} height={height} />
  );
}

InstagramIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

InstagramIcon.defaultProps = {
  width: 24,
  height: 24,
};
