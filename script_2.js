// 2.2. Opérations & boucles
// 2.2.1 Calculs rapides

let factoriel = prompt("Pour quel nombre souhaites-tu avoir la factorielle? ")

function fact(factoriel) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (factoriel === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return factoriel * fact(factoriel-1);
}
console.log('Le résultat est:' + ' ' + fact(factoriel));