import Pix1 from "./assets/odu-edit.png";
import Pix2 from "./assets/img-1.jpg";
import Pix3 from "./assets/edit-2.png";
import Pix4 from "./assets/groups.jpg";
import Pix5 from "./assets/gift2.jpg";


export const Users = [
    {
        id:1,
        profilePicture: Pix5,
        username:"Idris Dele"
    },
    {
        id:2,
        profilePicture: Pix3,
        username:"Ibrahim Sherif"
    },
    {
        id:3,
        profilePicture: Pix2,
        username:"Mateenat Apeke"
    },
    {
        id:4,
        profilePicture: Pix1,
        username:"Samuel Johnson"
    },
    {
        id:5,
        profilePicture: Pix4,
        username:"Babalola Bukola"
    }

];


export const Posts = [

    {
        id: 1,
        desc: "One love",
        photo: Pix1,
        date: "3 mins ago",
        userId: 1,
        like: 15,
        comment: 3,
    },
    {
        id: 2,
        desc: "Que sera sera",
        photo: Pix2,
        date: "10 mins ago",
        userId: 2,
        like: 10,
        comment: 23,
    },
    {
        id: 3,
        desc: "There is blessing in the power of giving",
        photo: Pix3,
        date: "30 mins ago",
        userId: 3,
        like: 15,
        comment: 3,
    },
    {
        id: 4,
        desc: "Family is all",
        photo: Pix4,
        date: "43 mins ago",
        userId: 4,
        like: 25,
        comment: 7
    },
    {
        id: 5,
      //  desc: "One love",
        photo: Pix5,
        date: "5 mins ago",
        userId: 5,
        like: 19,
        comment: 33,
    },
]