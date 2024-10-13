
class hero {
    constructor(name = 'this', experience = 0, rank = 'none') {
        this.name = name;
        this.experience = experience;
        this.rank = rank;
    }
    questsCompleted() {
        switch (stage) {
            case 1:
                return 10;
                break;
            case 2:
                return 15;
                break;
            case 3: 
                return 20;
                break;
            case 4:
                return 22;
                break;
            case 5:
                return 25;
                break;
            default:
                return 30;
        }
    }
    xpCalc() {
        let xp = 0;
        switch (stage) {
            case 0:
                xp = 0;
                break
            case 1:
                xp = 100;
                break;
            case 2:
                xp = 125;
                break;
            case 3:
                xp = 155;
                break;
            case 4:
                xp = 200;
                break;
            default:
                xp = 250 ;
        }
        return xp *= this.questsCompleted();
    }
    rankCalc() {
        if (this.experience <= 1000) {
            this.rank = 'Ferro';
        } else if (this.experience > 1000 && this.experience <= 2000) {
            this.rank = 'Bronze';
        } else if (this.experience > 2000 && this.experience <= 5000) {
            this.rank = 'Prata';
        } else if (this.experience > 5000 && this.experience <= 7000) {
            this.rank = 'Ouro';
        } else if (this.experience > 7000 && this.experience <= 8000) {
            this.rank = 'Platina';
        } else if (this.experience > 8000 && this.experience <= 9000) {
            this.rank = 'Ascendente';
        } else if (this.experience > 9000 && this.experience <= 10000) {
            this.rank = 'Imortal';
        } else {
            this.rank = 'Radiante';
        }
        return this.rank;
    }
    experienceRanking() {
        this.experience += this.xpCalc();
        this.rank = this.rankCalc();
    }
}

let stage = 1;
let playerId = new hero('Hércules', 0, 'None')
playerId.experienceRanking()

do {
    console.log(`O Herói de nome ${playerId.name} está no nível de ${playerId.rank} com ${playerId.experience} pontos de experiência!`);
    playerId.experienceRanking()
    stage++;
} while (stage <= 5);