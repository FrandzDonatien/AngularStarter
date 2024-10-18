export class UserModel {
  id!: string;
  email!: string;
  createdAt!: Date;
  username!: string;
  haveShop!: boolean;
  enabled!: boolean;
  avatar!: string;
  accountNonLocked!: boolean;
  accountNonExpired!: boolean;
  credentialsNonExpired!: boolean;
}