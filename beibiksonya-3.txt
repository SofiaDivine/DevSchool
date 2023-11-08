class Warrior {
  constructor() {
    this.levelValue = 1;
    this.experienceValue = 100;
    this.rankValue = "Pushover";
    this.achievementsValue = [];
  }

  level() {
    return this.levelValue;
  }

  experience() {
    return this.experienceValue;
  }

  rank() {
    return this.rankValue;
  }

  achievements() {
    return this.achievementsValue;
  }

  training(trainingData) {
    const [description, expPoints, minLevel] = trainingData;
    if (this.levelValue >= minLevel) {
      this.experienceValue += expPoints;
      this.achievementsValue.push(description);
      return description;
    } else {
      return "Not strong enough";
    }
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    }

    const levelDifference = enemyLevel - this.levelValue;
    const diff = Math.abs(levelDifference);

    if (levelDifference >= 5 && this.rankValue !== "Greatest") {
      return "You've been defeated";
    }

    if (levelDifference === 0) {
      this.experienceValue += 10;
    } else if (levelDifference === 1) {
      this.experienceValue += 5;
    } else if (levelDifference >= 2) {
      this.experienceValue += 0;
    } else if (levelDifference < 0) {
      this.experienceValue += 20 * diff * diff;
    }

    if (this.experienceValue >= 10000) {
      this.experienceValue = 10000;
    }

    while (this.experienceValue >= this.levelValue * 100) {
      this.levelValue++;
      if (this.levelValue % 10 === 0) {
        this.rankValue = this.calculateRank(this.levelValue);
      }
    }

    if (levelDifference >= 2) {
      return "Easy fight";
    } else if (levelDifference === 1) {
      return "A good fight";
    } else {
      return "An intense fight";
    }
  }

  calculateRank(level) {
    const rankTiers = [
      "Pushover",
      "Novice",
      "Fighter",
      "Warrior",
      "Veteran",
      "Sage",
      "Elite",
      "Conqueror",
      "Champion",
      "Master",
      "Greatest",
    ];
    return rankTiers[Math.floor((level - 1) / 10)];
  }
}

module.exports = Warrior;
