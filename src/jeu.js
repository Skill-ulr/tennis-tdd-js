export class Jeu {
  constructor(joueur1, joueur2, classement) {
    this.joueur1 = joueur1;
    this.joueur2 = joueur2;
    this.classement = classement;
    this.pointsJ1 = 0;
    this.pointsJ2 = 0;
    this.nomsDesPoints = ["Zéro", "Quinze", "Trente", "Quarante"];
  }

  pointPour(joueur) {
    if (joueur === this.joueur1) {
      this.pointsJ1 = this.pointsJ1 + 1;
    } else if (joueur === this.joueur2) {
      this.pointsJ2 = this.pointsJ2 + 1;
    }
  }

  score() {
    if (this.pointsJ1 === 4) {
      return `Victoire ${this.joueur1}`;
    }
    if (this.pointsJ2 === 4) {
      return `Victoire ${this.joueur2}`;
    }
    if (this.pointsJ1 === 3 && this.pointsJ2 === 3) {
      return "Égalité";
    }
    if (this.pointsJ1 === this.pointsJ2 && this.pointsJ1 > 0) {
      return `${this.nomsDesPoints[this.pointsJ1]}-A`;
    }
    const scoreJ1 = this.nomsDesPoints[this.pointsJ1];
    const scoreJ2 = this.nomsDesPoints[this.pointsJ2];
    return `${scoreJ1}-${scoreJ2}`;
  }
}