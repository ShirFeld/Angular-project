export default class Person{

    private _id:string;
    private _name:string;
    private _age:number;
    private _isMale:boolean;
    private _city:string;
    private _img:string;


    constructor(id:string , name:string , age:number , gender:boolean , city:string = 'Oranit', img:string){
        this.Id = id;
        this.Name = name;
        this.Age = age;
        this._isMale = gender;
        this.City = city;
        this._img =img;
    }

    // Id
    public get Id(){
        return this._id;
    }
    public set Id(id:string){
        if(id.length == 8 || id.length ==9)
            this._id = id;
        else throw new Error("invalid id")
    }
    //name
    public get Name(){
        return this._name;
    }
    public set Name(name:string){
        if (typeof name ==='string')
            this._name =name;
        else throw new Error("invalid name");
        
    }
    //age
    public get Age(){
        return this._age;
    }
    public set Age(age:number){
        if(age <0 || age > 120) throw RangeError("invalid age");
        this._age =age;
    }
    //city
    public get City(){
        return this._city;
    }
    public set City(city:string){
        this._city = city;
    }
    //img
    public get Img(){
        return this._img;
    }
    //gender
    public get Gender(){
        return this._isMale;
    }
}