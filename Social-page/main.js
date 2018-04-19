var about = /** @class */ (function () {
    function about(firstName, lastName, email, online, birthday, friendsList, friends) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.online = online;
        this.birthday = birthday;
        this.friendsList = friendsList;
        this.friends = friends;
        // get some value getter
        this.getName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getFriendsList = function () {
            return _this.friendsList;
        };
        this.getStatus = function () {
            return _this.online;
        };
        this.getEmail = function () {
            return _this.email;
        };
        //setters
        this.setEmail = function (emailAddress) {
            return _this.email = emailAddress;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.online = online;
        this.birthday = birthday;
        this.friends = friends;
        this.friendsList = friendsList;
    } // end constructor
    return about;
}()); // end class 
var martin = new about('Martin', 'Garrix', "martin@stmpd.com", true, new Date(832277630), ["Marshmello", "Dua Lipa", "Skrillex", "David Guetta"], 4);
console.log("Welcome", martin.getName());
console.log("Your Email", martin.getEmail());
var mail = martin.setEmail("martingarrix@stmpd.com");
console.log("Your Email is changed to", mail);
console.log("Your Frineds", martin.getFriendsList());
