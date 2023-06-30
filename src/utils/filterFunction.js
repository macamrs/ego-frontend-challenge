export default async function filterFunction(payload, cars) {
  if (payload === "todos") {
    return cars;
  }

  if (payload === "autos") {
    return cars.filter(
      (a) => a.segment !== "SUVs" && a.segment !== "Pickups y Comerciales"
    );
  }

  if (payload === "pickups") {
    return cars.filter((s) => s.segment === "Pickups y Comerciales");
  }

  if (payload === "suv") {
    return cars.filter((s) => s.segment === "SUVs");
  }
}
