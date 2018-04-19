// creating class for video
class videoPage{
    // Fields on youtube video page
    videoUrl: string;
    title: string;
    likes: number;
    dislikes:number;
    releaseDate: Date;
    category: string;
    comments: {userName:string, comment:string}[];
    relatedVideos: string[];
    ageRestriction: boolean;

    // constructor to intialize all the fields  
    constructor( 
        Url:string, 
        Title:string, 
        Likes: number,
        Dislikes:number,
        ReleaseDate: Date,
        Category: string,
        Comments: any,
        RelatedVideos: string[],
        ageRestriction: boolean

    ){
        this.videoUrl = Url;
        this.title= Title;
        this.likes= Likes;
        this.dislikes=Dislikes;
        this.releaseDate= ReleaseDate;
        this.category= Category;
        this.comments=Comments;
        this.relatedVideos=RelatedVideos;
        this.ageRestriction=ageRestriction;
    
    }//end of contructor

    // method to get soomething fruitful
    getvideoUrl = () =>{
        return this.videoUrl
    }
    getvideoTitle = () =>{
        return this.title
    }
    getvideoLike = () =>{
        return this.likes
    }
    getvideoDislikes = () =>{
        return this.dislikes
    }
    getvideoReleaseDate = () =>{
        return this.releaseDate
    }
    getvideoCategory = () =>{
        return this.category
    }
    getComments = () =>{
        return this.comments
    }
    getRelatedVideos = () =>{
        return this.relatedVideos
    }
    getAgeRestriction = () =>{
        return this.ageRestriction
    }

}//end class

let alone = new videoPage( "https://www.youtube.com/watch?v=cGTi4o_cVOw", "Marshmello - Alone Live @ AMF 2017", 12000, 301, new Date(1524158458), "Awards", [{userName:"aks",comment:"cool"},{userName:"noise",comment:"Awesome"}], ["link1", "link2"],false)

console.log("Url =>",alone.getvideoUrl())
console.log("Title =>",alone.getvideoTitle())
console.log("Likes =>",alone.getvideoLike())
console.log("Dislikes =>",alone.getvideoDislikes())
console.log("Category =>",alone.getvideoCategory())
console.log("Released On =>",alone.getvideoReleaseDate())
console.log("Comments =>",alone.getComments())
console.log("Related Videos =>",alone.getRelatedVideos())