// must know Object
const movie = {
  name: "Blade Runner2049",
  year: 2017,
  Director: "Denis Villeneuve",
  cast: {
    maleLead: "Ryan Gosling",
    femaleLead: "Ana Armas",
  },
};

// static
// create:
const mov = Object.create(movie);
console.log(mov.name);

// entries:
for (const [key, value] of Object.entries(movie)) {
  console.log(`${key}: ${value}`);
}

// keys:
const keys = Object.keys(movie);
console.log(keys);

// values
const values = Object.values(movie);
console.log(values);
