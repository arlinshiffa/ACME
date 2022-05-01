import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import { useState } from 'react';
import en from 'react-phone-number-input/locale/en.json';
import styles from './input.module.scss';

export default function Input({
  title, id, type, placeholder, maxlength, minlength, message,
}) {
  const [value, setValue] = useState();
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={id}>
        {title}
      </label>
      {maxlength != ''
      && (
      <span className={styles.input__maxlength}>
        {' '}
        0/
        {maxlength}
      </span>
      )}
      {type == 'phonenumber' && (
      <div className={styles.input__phonenumber}>

        <div className={styles.input__phonenumber__wrapper}>
          <select
            className={styles.input__phonenumber__code}
            value={value}
            onChange={setValue}
          >
            <option value="">
              +
              {getCountryCallingCode('ID')}
            </option>
            {getCountries().map((country) => (
              <option key={country} value={country}>
                {getCountryCallingCode(country)}
              </option>
            ))}
          </select>
          <PhoneInput
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            defaultCountry="ID"
          />
        </div>
      </div>
      )}

      {type != 'phonenumber' && <input type={type} id={id} maxLength={maxlength} minLength={minlength} name={id} placeholder={placeholder} />}

      <div className={styles.input__help}>{message}</div>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  maxlength: PropTypes.string,
  minlength: PropTypes.string,
  message: PropTypes.string,
};

Input.defaultProps = {
  title: 'Name',
  type: 'text',
  id: 'name',
  placeholder: 'placeholder',
  maxlength: '',
  minlength: '',
  message: '',
};
