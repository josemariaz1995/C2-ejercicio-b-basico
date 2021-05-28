const palabras = ["Luis", "es", "programador", " de", "aplicaciones", " web"];
const cantidad = 2;

//1.
function comparadorLongitudDeStrings(array, numeroLetras) {
  const cuantasPalabras = array
    .filter((palabra, numeroLetras) => palabra.length > numeroLetras)
    .reduce((contador) => ++contador, 0);
  console.log(
    `${cuantasPalabras} palabras tienen una longitud mayor a ${numeroLetras}`
  );
}
comparadorLongitudDeStrings(palabras, cantidad);

//2.
function calculadorMediaDePalabras(array) {
  const numero = array.reduce(
    (contador, palabra, i, array) => contador + palabra.length / array.length,
    0
  );
  console.log(`La media del numero de letras en las strings es ${numero}`);
}
calculadorMediaDePalabras(palabras);

//3.
function inspeccionadorDePalabrasConEspacio(array) {
  const palabrasConEspacio = array
    .filter((palabra) => palabra.indexOf(" ") >= 0)
    .map((palabra) => palabra.toUpperCase());
  console.log(`Las palabras con espacio son ${[...palabrasConEspacio]}`);
}
inspeccionadorDePalabrasConEspacio(palabras);

//4.
const personas = [
  {
    nombre: "Luis",
    edad: 23,
    sexo: "M",
  },
  {
    nombre: "Marta",
    edad: 100,
    sexo: "F",
  },
  {
    nombre: "Arturo",
    edad: 200,
    sexo: "M",
  },
  {
    nombre: "Isabel",
    edad: 13,
    sexo: "F",
  },
];

function estadisticasPersonas(array) {
  const nuevoObjeto = {
    totalMujeres: array
      .filter((persona) => persona.sexo === "F")
      .reduce((contador) => ++contador, 0),
    totalHombres: array
      .filter((persona) => persona.sexo === "M")
      .reduce((contador) => ++contador, 0),
    totalMayoresEdad: array
      .filter((persona) => persona.edad > 17)
      .reduce((contador) => ++contador, 0),
  };
  return nuevoObjeto;
}
console.log(estadisticasPersonas(personas));

const empresas = [
  {
    empresa: "FRIME",
    empleados: [
      {
        nombre: "Jose",
        edad: 26,
        sueldo: "700 €",
      },
      {
        nombre: "Waxta",
        edad: 40,
        sueldo: "1500 €",
      },
      {
        nombre: "Ismael",
        edad: 32,
        sueldo: "1400 €",
      },
    ],
  },
  {
    empresa: "Bantor Europe",
    empleados: [
      {
        nombre: "Jose",
        edad: 26,
        sueldo: "1200 €",
      },
      {
        nombre: "Lorena",
        edad: 35,
        sueldo: "1350 €",
      },
      {
        nombre: "Julian",
        edad: 62,
        sueldo: "8000 €",
      },
    ],
  },
];

function sueldoMedioEmpresaMayores30(objEmpresas) {
  const euro = objEmpresas.map((empresa) =>
    empresa.empleados
      .filter((empleados) => empleados.edad > 30)
      .reduce(
        (contador, empleado, i, empleados) =>
          contador +
          empleado.sueldo.replace(/[^0-9.-]+/g, "") / empleados.length,
        0
      )
  );
  for (let i in objEmpresas) {
    console.log(objEmpresas[i]);
    return `En la Empresa ${objEmpresas[i].empresa} el sueldo medio en los mayores de 30 es de ${euro[i]} €`;
    ++i;
  }
}
console.log(sueldoMedioEmpresaMayores30(empresas));
