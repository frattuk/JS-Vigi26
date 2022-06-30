import {
  facebookBlue,
  gmailBlue,
  gmailRed,
  gmailLightRed,
  gmailYellow,
  gmailGreen,
  youtubeRed,
  youtubeBlack,
} from "./modules/colors.js";
import numbers, { zero, two, nine } from "./modules/numbers.js";
import { addition, multiplication } from "./modules/math.js";
import renderHeader from "./modules/header.js";
import codeAcademyHeader from "./modules/codeacademyheader.js";
import cars from "./modules/cars.js";

console.log(
  facebookBlue,
  gmailBlue,
  gmailRed,
  gmailLightRed,
  gmailYellow,
  gmailGreen,
  youtubeRed,
  youtubeBlack
);

console.log(numbers, zero, nine);
console.log(multiplication(two, nine));
renderHeader();
codeAcademyHeader(document.body);
cars(document.body);
