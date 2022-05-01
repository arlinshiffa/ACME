// import styles from './form.module.scss';

import styles from './form.module.scss';
import Input from '../../elements/input/input';
import Button from '../../elements/button/button';

export default function Form() {
  return (
    <form className={styles.form} action="/send-data-here" method="post">
      <Input title="Nama Lengkap" id="nama" type="text" placeholder="John Doe" maxlength="50" minlength="3" />
      <Input title="Nomor Telepon" id="nama" type="phonenumber" placeholder="81908009190" message="Pilih kode negara, diikuti dengan nomor HPmu" />
      <Input title="Password" id="password" type="password" placeholder="Masukkan kata sandi" maxlength="16" minlength="3" message="Kata sandi harus mengandung 8-16 karakter kombinasi huruf besar, huruf kecil, dan angka" />
      <Button text="Submit" type="submit" />
    </form>
  );
}
