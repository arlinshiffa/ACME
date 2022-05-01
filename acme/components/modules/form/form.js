import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './form.module.scss';
import Input from '../../elements/input/input';
import Button from '../../elements/button/button';

import 'react-phone-number-input/style.css';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import { useState } from 'react';
import styles2 from '../../elements/input/input.module.scss';

export default function Form() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Nama terlalu panjang'),
    password: Yup.string().max(18),
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
  const [count2, setCount2] = useState(0);

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
          {errors.name?.message}
          {count1 > 50 ? 'Nama terlalu panjang' : ''}
        </div>
      </div>

      <Input title="Nomor Telepon" id="nama" type="phonenumber" placeholder="81908009190" message="Pilih kode negara, diikuti dengan nomor HPmu" />
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
        <div className={`${styles2.input__help} ${errors.password ? styles2.input__help__red : ''} ${count2 > 18 ? styles2.input__red : ''} `}>Kata sandi harus mengandung 8-16 karakter kombinasi huruf besar, huruf kecil, dan angka</div>
      </div>

      <Button text="Submit" type="submit" />
    </form>
  );
}
