// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];
  const ageMinimum = 25;

  // Tri des utilisateurs par ordre
  personnes.sort((a,b) => a.nom.localeCompare(b.nom))

  function sumAge(personnes, ageMinimum){
    let sum = 0;

    personnes.map(personne => {
     sum += personne.age
      return sum
  })
  console.log(sum);

  }
const sumTot = sumAge(personnes, ageMinimum);

  /**
   * Ex: Somme des âges : 75
   */
  console.log(personnes)