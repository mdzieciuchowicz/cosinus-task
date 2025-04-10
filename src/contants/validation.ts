export const validation = {
  emailFormat: "Adres email ma niepoprawny format",
  required: "Pole jest wymagane",
  minLen: (len: number) => `Wymagana długość powyżej ${len} znaków`,
  bigLetterRequired: "Pole wymaga przynajmniej jednej wielkiej litery",
  specialCharacterRequired: "Pole wymaga przynajmniej jednego znaku specjalnego",
  numberRequired: "Pole wymaga co najmniej jednej cyfry",
};
