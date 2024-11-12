export interface IUser{
    picture:IPicture;
    name:IName;
    email:string;
    phone: string;
}

interface IName {
    title:string;
    first: string;
    last: string
}

interface IPicture{
    large: string;
    medium: string;
    thumbnail:string
}