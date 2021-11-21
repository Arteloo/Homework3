"use strict"
class Car {
    _isStarted = Boolean(false)
    _mileage = Number(0)
    _currentFuel = Number(0)
   constructor(brand, model, year, maxSpeed, maxFuel, fuelCons) {
       if(String(brand) === brand && brand.length >= 1 && brand.length <= 50) {
        this._brand = brand;
       } else {
           throw new Error('Ошибка!');
       }
       if(String(model) === model && model.length >= 1 && model.length <= 50) {
        this._model = model;
       } else {
        throw new Error('Ошибка!');
    }
       if(year >= 1900 && Number(year) === year && year <= 2021) {
        this._year = year;
       } else {
        throw new Error('Ошибка!');
    }
       if(Number(maxSpeed) === maxSpeed && maxSpeed >= 100 && maxSpeed <= 300) {
        this._maxSpeed = maxSpeed;
       } else {
        throw new Error('Ошибка!');
    }
       if(Number(maxFuel) === maxFuel && maxFuel >= 5 && maxFuel <= 20) {
           this._maxFuel = maxFuel;
       } else {
        throw new Error('Ошибка!');
    }
       if(Number(fuelCons) === fuelCons) {
           this._fuelCons = fuelCons;
       } else {
        throw new Error('Ошибка!');
    }

       // Если поле не задается через кструктор - задать ему начальное значение по умолчанию
   }
get brand() {
    return this._brand;
}
get model() {
    return this._model;
}
get year() {
    return this._year;
}
get maxSpeed() {
    return this._maxSpeed;
}
get maxFuel() {
    return this._maxFuel;
}
get fuelCons() {
    return this._fuelCons;
}
get currentFuel() {
    return this._currentFuel;
}
get isStarted() {
    return this._isStarted;
}
get mileage() {
    return this._mileage;
}

set brand(br_name) {
    if (br_name.length <= 50 && String(br_name) === br_name && br_name.length >= 1) {
        this._brand = br_name;
    } else { 
    alert('Имя короткое');}
}
set model(md_name) {
    if(md_name.length <= 50 && md_name.length > 1 && String(md_name) === md_name) {
            this._model = md_name;
    } else {
        alert("Имя не подходит");
    }
}
set maxSpeed(Speed_num) {

    if (Number(Speed_num) === Speed_num && Speed_num >= 100 && Speed_num <= 300) {
           this._maxSpeed = Speed_num;
        } else { console.log("Неверная максимальная скорость");
    }
}
   set year(year_num) {
       if(year_num >= 1900 && Number(year_num) === year_num && year_num <= 2021) {
        this._year = year_num;
    } else {
        alert("Неверно введен год производства");}
   }
   set maxFuel(mxFuel) {
    if(Number(mxFuel) === mxFuel && mxFuel >= 5 && mxFuel <= 20) {
        this._maxFuel = mxFuel;
    }
}
   set fuelCons(fuelCon) {
    if(Number(fuelCon) === fuelCon) {
        this._fuelCons = fuelCon;
    }
   }

start() {
    if (this._isStarted == false) {
        this._isStarted = true;
    } else {
        alert('Машина уже заведена');
    }
}
shutDownEngine() {
    if (this._isStarted) {
        this._isStarted = false;
    } else { 
        alert('Машина еще не заведена'); 
    }
}
fillUp(litres) {
    if (Number(litres) === litres && litres > 0 && litres + this._currentFuel <= this._maxFuel) {
        this._currentFuel = this._currentFuel + litres;
    } else {alert('Чето криво');}
}
drive(speed, hours) {
    if(Number(speed) === speed && speed > 0) {
        if(Number(hours) === hours && hours > 0){
            if(speed <= this._maxSpeed) {
                if(this._isStarted) {
                    if(speed * hours * (this._fuelCons/100) <= this._currentFuel && speed * hours * (this._fuelCons/100) > 0) {
                        this._currentFuel = this._currentFuel - (speed * hours * (this._fuelCons/100));
                        this._mileage = this._mileage + (speed * hours);
                    } else {
                        alert("Недостаточно топлива");
                    }
                } else {
                    alert('Машина должна быть заведена, чтобы ехать');
                }
            } else {
                alert('Машина не может ехать так быстро');
            }
        } else {
            alert("Неверное количество часов");
        }
    } else {
        alert("Неверная скорость");
    }
}
}

const machine = new Car('Normal','model', 1988, 228, 20, 50);
