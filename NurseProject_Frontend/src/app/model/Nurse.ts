export class Nurse {
  id: number = 0;
  name: String = '';
  firs_surname: String = '';
  Second_surname: String = '';
  email: String = '';
  password: String = '';
  profile_pic: String = '';
  constructor(
    id = 0,
    name = '',
    firs_surname = '',
    Second_surname = '',
    email = '',
    password = '',
    profile_pic = ''
  ) {
    this.id = id;
    this.name = name;
    this.firs_surname = firs_surname;
    this.Second_surname = Second_surname;
    this.email = email;
    this.password = password;
    this.profile_pic = profile_pic;
  }
}
