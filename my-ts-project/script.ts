


//array syntax

let numbers: number[] = [1,2,3]
console.log(numbers)

let names: string[]=['apple','orange']
console.log(names)

//mixed

let name: (string|number)[]=["john",25]
console.log(name)

//objects

let user:{ readonly name:string; age?:number} ={
    name:"vijay",
    // age:25
}
console.log(user)

//functions 

//default parameters

function welcome(name:string ="Guest"):string{
    return `welcome ${name}`
}

console.log(welcome())

//interface   for objects

//types for unions functions and advanced types

interface users{
    name:string;
    age:number
}

let person1: users ={
    name:"varun",
    age:30
}
console.log(person1);

interface product{
    readonly id:number;
    name:string,
    description?:string;
}

let pro1 : product = {
    id:123,
    name:"iphone",
    
}
console.log(pro1)

type admin = {
    role:string;
}

type userDetails ={
    name:string;
}

type Adminuser = admin & userDetails

//combining the above 

const adminUser:Adminuser={
    role:"admin",
    name:"varun"
}
console.log(adminUser)



let id : string|number;

id ='123';
id:123;

function printId(id:string|number){
    console.log("ID:",id)
}
printId(123)

type PaymentStatus = "pending" | "completed" | "failed";

function updateStatus(status: PaymentStatus) {
  console.log(status);
}
updateStatus("pending")

//Type narrowing is the process by 
//which TypeScript reduces a broader type 
// (like a union) into a more specific type
//  based on runtime checks.


// let status = "success" | "error" | "loading"

function printIDS(id:string | number){
    if (typeof id ==="string"){
        console.log(id.toUpperCase())
    }
    // else{
    //     console.log(id.toFixed(2))
    // }
}
printIDS(123)


//enum role

enum Role{
    ADMIN = "admin",
    USER = "user",
    SUPER_ADMIN = "super_admin"
}
let userRole: Role = Role.ADMIN
console.log(userRole)


//Generics
//declaring typescript  as value:any   is equal to javascript 

// function identify(value:any){
//     return value;
// }

// console.log(identify("varun"))

// <t>  <string>

function identity <T>(value:T):T{
    return value
}

let result = identity <string> ("hello varun")

console.log(result)

interface ApiResponce <t> {
    success:boolean;
    data:t
}
const response: ApiResponce <string> ={
    success:true,
    data:"Data fetched successfully"
}
console.log(response);

//generic constraints

function getLength <t extends {length:number}>(item:t):number{
   return item.length
}
console.log(getLength("helo"),
getLength([1,23,3]))

//multiple constraints

//mergin two different objects

function getsize <t,u>(obj1:t,obj2:u): t&u{
return{...obj1, ...obj2}
}
const size = getsize({name:"varun"},{age:24})
console.log(size);


//utility generic types

//  1.  partial<T>

//patch method
//redux reducers
//redux state updates

type partialUser ={
    id:number,
    name:string,
    email:string
}
type updatedUser =Partial<partialUser>

const updatedUser= (data:Partial<partialUser>) =>{
    // only changed fields sent here 
       return data.id

}
// updatedUser(1,{name:"varun"})  -> here email becomes optional 
//all the three becomes optionals we can either update or redeclare

// 2. Required<t>
// 3. Readonly<t>   cannot update the value
// 4. pick<t,k>

//select only some keys

type pickUser ={
     id:number,
    name:string,
    email:string
}

type publicuser= Pick<pickUser , "id" | "name">

function printpublicuser(user:publicuser): void{
    console.log(user.id,user.name)
}
printpublicuser({id:1,name:"varun"})

//5.Omit<T,K>
type omitUser ={
    id:number,
    name:string,
    password:string
}

type SafeUser = Omit<omitUser, "password">

//common in API responses 
//Auth systems 
//DTO shaping 

//6. Record<K,T>

//create object types dynamically

type Roles = "admin" | "user"|"guest"

type RolePermissions = Record<Roles, string[]>

//config maps 
//feature flags
//permission systems
//enums mapping


//7. Exclude<T,U>  remove some values

type ExcludeRole ="admin" |"user"|"guest"

type NonAdmin =Exclude<ExcludeRole, "admin">

//result   "user" |"guest"


//Extract<T,U>

type ExtractRole = "admin" |"user"|"guest"

type AdminOnly =Extract<ExtractRole , "admin"|"manager">

//result   "admin"

// 9 NonNullable<T>
//remove null | undefined

type User = string | null | undefined

type cleanUser = NonNullable<User>

//result string


//10. returnTYpe<T>
//extract function return type
const getUser = ()=>{
    return {id: 1, name:"varun"}
}

type UserType= ReturnType<typeof getUser>

const users: UserType =getUser()
console.log(users)

//11.  Parameters<T>

//extract functioon parameter types

function login(email:string, password:string){}

type LoginArgs = Parameters<typeof login>

//result [string,string]









