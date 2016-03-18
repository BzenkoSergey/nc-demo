class AccountModel {
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;

    constructor(params: any) {
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.email = params.email;
        this.role = params.role;
    }
}

export default AccountModel;