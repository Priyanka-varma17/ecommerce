export interface SignUp{
    name:string,
    password:string,
    email:string
}
export interface Login{
    email:string;
    password:string;
}
export interface product{
    id:number,
    name:string,
    price:number,
    oldPrice:number;
    category:string,
    color:string,
    description:string,
    image:string
}