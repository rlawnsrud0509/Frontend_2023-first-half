const nums = [1, 2, 3, 4, 5];
//nums 배열 각각 요소에 제곱한 값을 넣음.

const squared = nums.map((num) => {
  return num * num;
});

const squared2 = nums.map((num) => num * num); // ==squared

console.log(squared); //1, 4, 9, 16, 25

const names = ["alice", "bob", "charlie", "diana"];
// names배열 앞글자 대문자

const names2 = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(names2);

const pokemon = ["피카츄", "펭도리", "파이리"];

const pokemonParagraph = pokemon.map((pokemon) => {
  return `<p>${pokemon}</p>`;
});

console.log(pokemonParagraph);
