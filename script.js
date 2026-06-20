let A;
const P = 100000;
const r = 0.05;
const n = 1;
const t = 3;

function CompoundInterest() {
  return A = P * (1 + (r / n)) ** (n * t);
}

console.log(CompoundInterest());
