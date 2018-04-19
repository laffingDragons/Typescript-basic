// creating class for video
var videoPage = /** @class */ (function () {
    // constructor to intialize all the fields  
    function videoPage(Url, Title, Likes, Dislikes, ReleaseDate, Category, Comments, RelatedVideos) {
        var _this = this;
        // method to get soomething fruitful
        this.getvideoUrl = function () {
            return _this.videoUrl;
        };
        this.getvideoTitle = function () {
            return _this.title;
        };
        this.getvideoLike = function () {
            return _this.likes;
        };
        this.getvideoDislikes = function () {
            return _this.dislikes;
        };
        this.getvideoReleaseDate = function () {
            return _this.releaseDate;
        };
        this.getvideoCategory = function () {
            return _this.category;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getRelatedVideos = function () {
            return _this.relatedVideos;
        };
        this.videoUrl = Url;
        this.title = Title;
        this.likes = Likes;
        this.dislikes = Dislikes;
        this.releaseDate = ReleaseDate;
        this.category = Category;
        this.comments = Comments;
        this.relatedVideos = RelatedVideos;
    } //end of contructor
    return videoPage;
}()); //end class
var alone = new videoPage("https://www.youtube.com/watch?v=cGTi4o_cVOw", "Marshmello - Alone Live @ AMF 2017", 12000, 301, new Date(1524158458), "Awards", [{ userName: "aks", comment: "cool" }, { userName: "noise", comment: "Awesome" }], ["link1", "link2"]);
console.log("Url =>", alone.getvideoUrl());
console.log("Title =>", alone.getvideoTitle());
console.log("Likes =>", alone.getvideoLike());
console.log("Dislikes =>", alone.getvideoDislikes());
console.log("Category =>", alone.getvideoCategory());
console.log("Released On =>", alone.getvideoReleaseDate());
console.log("Comments =>", alone.getComments());
console.log("Related Videos =>", alone.getRelatedVideos());
