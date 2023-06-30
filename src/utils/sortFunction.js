export default async function sortFunction(payload, cars, listaOriginal) {
  let sortCars =
    payload === "asc"
      ? cars.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          else return 0;
        })
      : payload === "dsc"
      ? cars.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          else return 0;
        })
      : payload === "nuevos"
      ? cars.sort((a, b) => {
          if (a.year > b.year) return -1;
          if (a.year < b.year) return 1;
          else return 0;
        })
      : payload === "viejos"
      ? cars.sort((a, b) => {
          if (a.year > b.year) return 1;
          if (a.year < b.year) return -1;
          else return 0;
        })
      : payload === "nada"
      ? listaOriginal
      : cars;

  return sortCars;
}
