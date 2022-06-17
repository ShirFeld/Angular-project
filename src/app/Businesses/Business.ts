export default class Business{
    private _workName :string;
    private _businessNumber :number;
    private _employees :number;
    private _monthlyProfit:number;


    public constructor(workName :string , businessNumber :number ,employees :number ,monthlyProfit:number  ){
        this.WorkName = workName;
        this.BusinessNumber = businessNumber;
        this.Employees = employees;
        this.MonthlyProfit = monthlyProfit;
    }


    public get WorkName(){
        return this._workName;
    }

    public set WorkName(workName :string){
        this._workName = workName;
    }   


    public get BusinessNumber(){
        return this._businessNumber;
    }

    public set BusinessNumber(businessNumber :number){
        if(businessNumber >= 1000 && businessNumber<= 5000)
              this._businessNumber = businessNumber;
        else throw new Error("invalid business number")
    } 

    public get Employees(){
        return this._employees;
    }

    public set Employees(employees :number){
        this._employees = employees;
    } 

    public get MonthlyProfit(){
        return this._monthlyProfit;
    }

    public set MonthlyProfit(monthlyProfit :number){
        this._monthlyProfit = monthlyProfit;
    } 






}