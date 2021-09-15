export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _currentDate(){
        return new Date()
    }
    get _futureDate(){
        return new Date(this.futureDate)
    }
    get _timestamp(){
        return this._futureDate.getTime() - this._currentDate.getTime() ;
    }
    get days(){
        return this._timestamp / 86400000;
    }
}