function countPositivesSumNegatives(input) {
  if (input === null)  {
   return [];
 }
 var positevesNumbers = 0;
 var sumNegativesNumbers = 0;
 for (var i = 0; i < input.length; i++) {
   if (input[i] > 0) {
     positevesNumbers++;
   } else if (input[i] < 0) {
     sumNegativesNumbers += input[i];
   }
 }
 if (positevesNumbers === 0 && sumNegativesNumbers === 0)  {
   return [];
 }
 return [positevesNumbers, sumNegativesNumbers];
}
