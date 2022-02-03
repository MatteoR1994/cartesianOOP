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

}