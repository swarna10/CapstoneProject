export class User{
name:string;
id:string;
password:string;

users: object[];
constructor(){
this.users=[];
}

getUser()
{
return this.users;
}
}


