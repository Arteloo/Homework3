"use strict"
class Car {
    isStarted = false
   constructor(brand, model, year, maxSpeed) {
   this.brand = brand;
       this.model = model;
       this.year = year;
       this.maxSpeed = maxSpeed;
   }

   get maxSpeed() {
       return this._maxSpeed;
   }
   get year() {
       return this._year;
   }
   get model() {
       return this._model;
   }
   get brand() {
       return this._brand;
}

set maxSpeed(Speed_num) {
    if (Speed_num > 100) {
        if (Speed_num < 300) {
           this._maxSpeed = Speed_num;
        }
    } else { alert('Неверная максимальная скорость');
    return;
}
}
   set year(year_num) {
       if(year_num < 1900) {
        alert("Неверно введен год производства");
       return;
    }
    this._year = year_num;
   }
   set model(md_name) {
       if(md_name.length < 50) {
           if(md_name.length> 1) {
               this._model = md_name;
           }
       } else alert("Имя не подходит");
       return;
   }
   set brand(br_name) {
       if(br_name.length > 50) {
           alert('Имя короткое');
           return;
       }
       this._brand = br_name;
   }
get start() {
     if (this.isStarted == false) {
         this.isStarted = true;
     } else {alert('Машина уже заведена');
      return;}
 }
get shutDownEngine() {
    if(this.isStarted == true) {
        this.isStarted = false;
    } else {alert('Машина еще не заведена'); return;}
}

}

let cadillac = new Car('brand','model','year', '228');

