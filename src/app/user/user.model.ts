
export class User {
  id: string;
  username: string;
  fullName: string;
  birthDate: number;
  email: string;
  pathImg: string;
  interests: string[];

  constructor(data: any) {
    this.id = data.id || '';
    this.username = data.username || '';
    this.fullName = data.fullName || '';
    this.birthDate = data.birthDate || 0;
    this.email = data.email || '';
    this.pathImg = data.pathImg || 'https://www.it-trans.org/technical-data/img/user-default-fontawesome_1_1_330x330.png';
    this.interests = data.interests || [];
  }
}
