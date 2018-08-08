export class Team{
    constructor(id, name, shield){
        this.id = id;
        this.name = name;
        this.shield = shield;

        this.points = 0;
        this.gf = 0;
        this.ga = 0; 
    }

    updateInfo(points, gf, ga) {
        this.points += points;
        this.gf += gf;
        this.ga += ga;
    }

    endGame(opponentTeam, goals, opponentGoals) {
        if( goals === opponentGoals) {
            this.updateInfo(1, goals, opponentGoals);
            opponentTeam.updateInfo(1, opponentGoals, goals);
        }else {
            if(goals > opponentGoals) {
                this.updateInfo(3, goals, opponentGoals);
                opponentTeam.updateInfo(0, opponentGoals, goals);
            }else {
                this.updateInfo(0, goals, opponentGoals);
                opponentTeam.updateInfo(3, opponentGoals, goals);
            }
        }
    }
}