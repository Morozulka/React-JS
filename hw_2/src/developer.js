class Developer {
	constructor(name, age, department) {
		this.name = name;
		this.age = age;
        this.department = department;
        this.displayinfo();
    }
    displayinfo() {
        console.log(this);
    }
}

export const developer1 = new Developer("A", 0, "developer");