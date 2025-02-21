/**
 * there are 2 player who has 100 health and will fight  with each other
 * each turn random power [10,20,30,50] to player  . where opposite player will lose the health based of power current player gets
 * print the winner after once match is over
 *
 */


class Player {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }

    isAlive() {
        return this.health > 0;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.powers = [10, 20, 30, 50];
    }

    getRandomPower() {
        return this.powers[Math.floor(Math.random() * this.powers.length)];
    }

    playTurn(attacker, defender) {
        const damage = this.getRandomPower();
        defender.takeDamage(damage);
        console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage.`);
        console.log(`${defender.name} health: ${defender.health}`);
    }

    declareWinner() {
        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(`The winner is ${winner.name} with ${winner.health} health remaining.`);
    }

    start() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.playTurn(this.player1, this.player2);
            if (!this.player2.isAlive()) break;
            this.playTurn(this.player2, this.player1);
        }
        this.declareWinner();
    }
}

const john = new Player("john")
const andrew = new Player("andrew")
const game = new Game(john,andrew)
game.start()


// ChartGpt solution for the same problem



class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    // Method to take damage
    takeDamage(power) {
        this.health -= power;
        if (this.health < 0) this.health = 0;
    }
}

// Function to simulate the game
function playGame(name1,name2) {
    const powers = [10, 20, 30, 50];

    // Initialize players
    const player1 = new Player(name1);
    const player2 = new Player(name2);

    let attacker = player1;
    let defender = player2;

    while (player1.health > 0 && player2.health > 0) {
        // Random power from the array
        const attackPower = powers[Math.floor(Math.random() * powers.length)];

        console.log(`${attacker.name} attacks with power ${attackPower}`);
        defender.takeDamage(attackPower);
        console.log(`${defender.name}'s health is now ${defender.health}`);

        // Swap roles
        [attacker, defender] = [defender, attacker];
    }

    // Determine the winner
    const winner = player1.health > 0 ? player1.name : player2.name;
    console.log(`\n${winner} wins the match!`);
}

// Start the game
playGame("John","Andrew");








