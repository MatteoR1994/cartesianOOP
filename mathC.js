class MathC { // Siccome questa classe non va instanziata, non ha bisogno di costruttore

    static calculateDistance(A, B) { // Per applicare un metodo di una classe che non viene istanziata all'inizio va messo "static"
        // La distanza tra due punti nel piano cartesiano è: radice quadrata((xB - XA)^2 + (yB - yA)^2)
        const xDif = B.x - A.x;
        const xDif2 = xDif * xDif;
        const yDif = B.y - A.y;
        const yDfi2 = yDif * yDif;
        const sumDif2 = xDif2 + yDfi2;
        const sqrtSumDif2 = Math.sqrt(sumDif2);
        return sqrtSumDif2;
        //return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    }

    static medianPoint(A, B){
        const xM = (A.x + B.x)/2
        const yM = (A.y + B.y)/2
        const median = new Point(xM, yM);
        return median;
    }


    static distanceFromOrigin(p){
        const origin = new Point(0,0);
        const distance = this.calculateDistance(origin, p);
        return distance;
    }


    static nearestPoint(startingPoint, ...points){
        let nearest = points[0];

        for (let i = 1; i  < points.length; i++) {
            const point = points[i];
            if (this.calculateDistance(startingPoint, point) < this.calculateDistance(startingPoint, nearest)) {
                nearest = point;
            }
        }

        return nearest;
    }

}