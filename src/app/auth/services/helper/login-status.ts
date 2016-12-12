

export class LoginStatus {

  private userId: string;

  constructor(userId:string) {
    this.userId = userId;
  }

  isLoggedIn(): boolean {
    return this.userId != null ? true : false
  }

  getUserId() : string {
    return this.userId;
  }

}
