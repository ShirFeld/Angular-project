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

  public get address(): string {
    return this._address;
  }
 
  public get startYear(): number {
    return this._startYear;
  }

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

