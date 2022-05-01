import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './form.module.scss';
import Button from '../../elements/button/button';

import 'react-phone-number-input/style.css';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import { useState } from 'react';
import styles2 from '../../elements/input/input.module.scss';

export default function Form() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Nama terlalu pendek').max(50, 'Nama terlalu panjang'),
    number: Yup.number().max(16, 'Nomor telepon tidak valid').nullable()
      .transform((v, o) => (o === '' ? null : v), 'Nomor telepon tidak valid')
      .required('Nomor telepon tidak valid'),
    password: Yup.string().max(16).min(8).matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const {
    register, handleSubmit, reset, formState,
  } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert(`SUCCESS!! :-)\n\n${JSON.stringify(data, null, 4)}`);
    return false;
  }

  const registerForm = (param) => { register(param); };
  const [count1, setCount1] = useState(0);
  const [value, setValue] = useState();
  const [count2, setCount2] = useState(0);
  let nameError = '';
  let numberError = 'Kata sandi harus mengandung 8-16 karakter kombinasi huruf besar, huruf kecil, dan angka';

  nameError = errors.name?.message;
  numberError = errors.number?.message;
  if (count1 > 50) { nameError = 'Nama terlalu panjang'; }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="/send-data-here" method="post">
      <div className={styles2.input}>
        <label className={styles2.input__label} htmlFor="name">
          Nama Lengkap
        </label>
        <span className={`${styles2.input__maxlength} ${count1 > 50 ? styles2.input__red : ''}`}>
          {' '}
          {count1}
          /50
        </span>
        <input {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} onChange={(e) => setCount1(e.target.value.length)} type="text" id="name" name="name" placeholder="John Doe" />
        <div className={`${styles2.input__help} ${count1 > 50 ? styles2.input__red : ''} ${errors.name ? styles2.input__help__red : ''}`}>
          {nameError}
        </div>
      </div>

      <div className={styles2.input}>

        <label className={styles2.input__label} htmlFor="number">
          Nomor Telepon
        </label>
        <div className={styles2.input__phonenumber}>
          <div className={styles2.input__phonenumber__wrapper}>
            <select
              className={styles2.input__phonenumber__code}
              value={value}
              onChange={setValue}
            >
              <option value="">
                +
                {getCountryCallingCode('ID')}
              </option>
              {getCountries().map((country) => (
                <option key={country} value={country}>
                  +
                  {' '}
                  {getCountryCallingCode(country)}
                </option>
              ))}
            </select>

            <PhoneInput
              {...register('number')}
              id="number"
              name="number"
              placeholder="81908009190"
              value={value}
              onChange={setValue}
              defaultCountry="ID"
            />
          </div>
          <div className={`${styles2.input__help} ${errors.password ? styles2.input__help__red : ''} ${count2 > 18 ? styles2.input__red : ''} `}>{numberError}</div>
        </div>
      </div>

      <div className={styles2.input}>
        <label className={styles2.input__label} htmlFor="password">
          Password
        </label>
        <span className={`${styles2.input__maxlength} ${count2 > 18 ? styles2.input__red : ''}`}>
          {' '}
          {count2}
          /18
        </span>
        <input {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} onChange={(e) => setCount2(e.target.value.length)} type="password" id="password" name="password" placeholder="Masukkan kata sandi" />
        <div className={`${styles2.input__help} ${errors.password ? styles2.input__help__red : ''} ${count2 > 18 ? styles2.input__red : ''} `}>Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka</div>
      </div>

      <Button text="Submit" type="submit" />
    </form>
  );
}
