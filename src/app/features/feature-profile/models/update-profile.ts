export class UpdateProfile {
    constructor(
        public name: string,
        public document: string,
        public lastName: string,
        public age: number,
        public phoneNumber: string,
        public address: string,
        public email: string,
        public image: string
    ) {}
}