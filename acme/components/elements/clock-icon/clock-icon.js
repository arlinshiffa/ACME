import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ClockIcon({ width, height }) {
  return (
    <Image src="/img/Clock.svg" alt="clock" width={width} height={height} />
  );
}

ClockIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

ClockIcon.defaultProps = {
  width: 24,
  height: 24,
};
