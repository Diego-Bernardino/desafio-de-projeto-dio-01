
let stage = 1;
let hero = {
    name: 'Hércules',
    experience: 0,
    rank: ''
}

do {
    hero.experience += xpCalc();
    hero.rank = rankCalc();
    console.log(`O Herói de nome ${hero.name} está no nível de ${hero.rank} com ${hero.experience} pontos de experiência!`);
    stage++;
} while (stage <= 5);

function xpCalc() {
    let xp = 0;
    switch (stage) {
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
    return xp *= questsCompleted();
}

function rankCalc(){
    rank = '';
    if (hero.experience <= 1000) {
        rank = 'Ferro';
    } else if (hero.experience > 1000 && hero.experience <= 2000) {
        rank = 'Bronze';
    } else if (hero.experience > 2000 && hero.experience <= 5000) {
        rank = 'Prata';
    } else if (hero.experience > 5000 && hero.experience <= 7000) {
        rank = 'Ouro';
    } else if (hero.experience > 7000 && hero.experience <= 8000) {
        rank = 'Platina';
    } else if (hero.experience > 8000 && hero.experience <= 9000) {
        rank = 'Ascendente';
    } else if (hero.experience > 9000 && hero.experience <= 10000) {
        rank = 'Imortal';
    } else {
        rank = 'Radiante';
    }
    return rank;
}    

function questsCompleted() {
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