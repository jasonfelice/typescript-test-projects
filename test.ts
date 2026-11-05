type cType = "true" | "false";

interface User {
  name: string;
  id: number;
  pass: string;
  verifyUser(id: number): boolean;
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

const userX = new UserAccount("Jake", 1, "password");

userX.verifyUser(1);

const account: User = userX;

account.verifyUser(1);