import { LinkStation } from "./types";
import { findMostPowerfulLinkStation } from "./findMostPowerfulLinkStation";

const linkStations: Array<LinkStation> = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12],
];

console.log(findMostPowerfulLinkStation(linkStations, { x: 0, y: 0 }));
console.log(findMostPowerfulLinkStation(linkStations, { x: 100, y: 100 }));
console.log(findMostPowerfulLinkStation(linkStations, { x: 15, y: 10 }));
console.log(findMostPowerfulLinkStation(linkStations, { x: 18, y: 18 }));
