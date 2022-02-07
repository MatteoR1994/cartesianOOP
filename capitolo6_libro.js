class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return MathC.distanceFromOrigin(this);
    }

    plus(vec) {
        const newVec = new Vec(this.x + this.y, vec.x + vec.y);
        return newVec;
    }

    minus(vec) {
        const newVec = new Vec(this.x - this.y, vec.x - vec.y);
        return newVec;
    }

}