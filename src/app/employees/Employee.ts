import Person from '../Person';

export default class Employee extends Person {
  private _workName: string;
  private _monthlyHours: number;
  private _hourlyWage: number;

  constructor(id: string, name: string,  age: number, gender: boolean,city: string = 'Oranit' , img: string ,
    workName: string, monthlyHours: number, hourlyWage: number  ) {
    super(id, name, age, gender, city, img);
    this.WorkName = workName;
    this.MonthlyHours = monthlyHours;
    this.HourlyWage  = hourlyWage;
  }

  
  public get HourlyWage(): number {
    return this._hourlyWage;
  }
  public set HourlyWage(v: number) {
    this._hourlyWage = v;
  }

  public get MonthlyHours(): number {
    return this._monthlyHours;
  }
  public set MonthlyHours(v: number) {
    this._monthlyHours = v;
  }

  public get WorkName(): string {
    return this._workName;
  }
  public set WorkName(v: string) {
    this._workName = v;
  }
}
