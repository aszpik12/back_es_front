export const adatLeiras = {
  vnev: {
    megj: "Vezetéknév",
    tipus: "text",
    placeholder: "Valaki vagyok",
    pattern: "[A-Z][a-z]{2,15}",
    szoveg: "Legjobb 3 betű, a névnek nagybetűvel kell kezdődnie!",
    requre: true,
  },
  knev: {
    megj: "Keresznév",
    tipus: "text",
    placeholder: "Valaki vagyok",
    pattern: "[A-Z][a-z]{2,15}",
    szoveg: "Legjobb 3 betű, a névnek nagybetűvel kell kezdődnie!",
    requre: true,
  },
  szul: {
    megj: "Születési idő",
    tipus: "date",
    value: "2000-01-01",
    placeholder: "2000",
   
    pattern: {
      min: "1000-01-01",
      max: "2023-12-30",
    },
    szoveg: "1000 és 2023 közötti adhat meg!",
  },
};
