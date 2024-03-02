// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];
  const ageMinimum = 25;

  function sumAge(personnes, ageMinimum){
    let sum = 0;

    personnes.map(personne => {
      return sum
  })
  console.log(sum);
  }


  const sumTot = sumAge(personnes, ageMinimum)
  console.log(sumTot);

  /**
   * Ex: Somme des âges : 75
   */