const person = {
    name: 'Raihan Gazi',
    age: 27,
    subjects: ['Math', 'Eng', 'Physics', 'Chemistry', 'Biology'],
    exam: function () {
        return `${this.name} is participating in this exam`;
    },
    improve: function () {
        console.log(this.exam());
        return `${this.name} is giving improvement in ${this.subjects[3]}, ${this.subjects[1]}, ${this.subjects[2]}`;
    }
}

const isGivingImprove = person.improve();

console.log(isGivingImprove);