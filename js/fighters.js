function Fighter(name) {
    this.name = name;

    this.fight = function (fighter) {
        var damage = Math.floor(Math.random() * 20);
        fighter.health -= damage;
        fighter.health = fighter.health > 0 ? fighter.health : 0;

        console.log(this.name + ' strikes ' + fighter.name + ' and cause him ' + damage + ' damage ');
        console.log(fighter.name + ' has ' + fighter.health + ' health left');
    }
}

function MasterFighter(name) {
    this.health = 130;
    Fighter.apply(this, arguments);
}

function StudentFighter(name) {
    this.health = 100;
    Fighter.apply(this, arguments);
}

function Factory() {
    this.createFighter = function(type, name) {
        var fighter;

        switch (type) {
            case 'master':
                fighter = new MasterFighter(name);
                break;
            case 'student':
            default:
                fighter = new StudentFighter(name);
                break;
        }

        return fighter;
    }
}

function fight(fighter1, fighter2) {
    fighter1.fight(fighter2);
    var f1Turn = true;

    while (fighter1.health > 0 && fighter2.health > 0) {
        if (f1Turn) {
            fighter2.fight(fighter1);
        } else {
            fighter1.fight(fighter2);
        }

        f1Turn = !f1Turn;
    }

    if (fighter1.health < 0) fighter1.health = 0;
    if (fighter2.health < 0) fighter2.health = 0;

    return fighter1.health > fighter2.health ? fighter1 : fighter2;
}