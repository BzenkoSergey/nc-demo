export default AccountModel;

class AccountModel {
    public firstName: string;
    public lastName: string;
    public email: string;

    constructor(params: any) {
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.email = params.email;
    }
}