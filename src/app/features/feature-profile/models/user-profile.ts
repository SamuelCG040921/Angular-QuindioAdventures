export class UserProfile {
    constructor(
        public document: string,
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public age: number,
        public image: Blob,
        public phoneNumber: string,
        public address: string,
    ) {}
}