class Student {
    constructor(firstName,lastName,year,attendance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
    }

    intro() {
        return `Hello my name is ${firstName} + ${lastName} class of ${year}`
    }

    late() {
        this.tardies ++
        if (this.tardies > 2) {
            return (`${firstName} ${lastName} has been late ${this.tardies} times. Sorry you have been Expelled`)
        }
        else {
            return `Excellent Attendance ${this.firstName}`
        }
    }

}

let firstStudent = new Student('Dwane', 'Richards', 1999)
let secondStudent = new Student('Max', 'Richards', 2025)
secondStudent.late()
secondStudent.late()
