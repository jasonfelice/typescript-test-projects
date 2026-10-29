interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  pass: string;

  constructor(name: string, id: number, pass: string) {
    this.name = name;
    this.id = id;
    this.pass = pass;
  }

  verifyUser(id: number): boolean {
    return id === this.id;
  }

}

const user = new UserAccount("Murphy", 1, "password");

user.verifyUser(1);

const account: User = user;

account.verifyUser(1); // Error: Property 'verifyUser' does not exist on type 'User'.