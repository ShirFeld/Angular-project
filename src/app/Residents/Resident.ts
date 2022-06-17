import Person from '../Person';

export default class Resident extends Person {

  private _address: string;
  private _startYear: number;
  private _status :string;


  constructor(id:string , name:string , age:number , gender:boolean , city:string = 'Oranit', img:string,
    address: string, startYear: number , status:string ) {
    super(id, name, age, gender, city, img);

    this._address = address;
    this._startYear = startYear;
    this.Status = status;
  }

  public get address() {
    return this._address;
  }

  public set address(address: string) {
     this._address = address;
  }
 
  public get startYear() {
    return this._startYear;
  }

  public set startYear(startYear : number) {
    this._startYear = startYear;  }


  public get Status() {
    return this._status;
  }


  public set Status(status :string){
    switch (status) {
        case 'A':
            this._status = "single";
            break;
        case 'B':
            this._status = "married";
            break;
        case 'C':
            this._status = "divorce";
            break;
        case 'D':
            this._status = "widower";
            break;


        default:
            break;
    }
  }
 
}

