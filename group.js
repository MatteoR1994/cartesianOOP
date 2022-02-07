class Group {

    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    remove(value) {
        if (this.has(value)) {
            this.members = this.members.filter((e) => e !== value);
        }
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        const newGroup = new Group;
        for (const element of collection) {
            newGroup.add(element);
        }
        return newGroup;
    }

}