class about {

    constructor(
        public firstName: string, 
        public lastName: string, 
        private email: string,
        public online: boolean, 
        private birthday: Date, 
        private friendsList: string[],
        private friends: number, 
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
        this.online = online;
        this.birthday = birthday;
        this.friends = friends;
        this.friendsList = friendsList;

    }// end constructor
    // get some value getter
    getName = () => {
        return `${this.firstName} ${this.lastName}`
    }
    getBirthday = () => {
        return this.birthday
    }
    getFriendsList = () => {
        return this.friendsList
    }
    getStatus = () => {
        return this.online
    }
    getEmail = () => {
        return this.email
    }

    //setters
    setEmail = (emailAddress: string) => {
        return this.email = emailAddress;
    }

}// end class 

let martin = new about('Martin', 'Garrix', "martin@stmpd.com", true, new Date(832277630), ["Marshmello", "Dua Lipa", "Skrillex", "David Guetta"], 4)


console.log("Welcome", martin.getName())

console.log("Your Email", martin.getEmail())
let mail = martin.setEmail("martingarrix@stmpd.com")
console.log("Your Email is changed to", mail)

console.log("Your Frineds", martin.getFriendsList())
