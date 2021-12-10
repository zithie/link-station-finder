import { LinkStation, Point } from "./types";

export const getDistance = (point1: Point, point2: Point): number => {
  const a = point1.x - point2.x;
  const b = point1.y - point2.y;
  return Math.sqrt(a * a + b * b);
};

export const getPower = (linkStation: LinkStation, point: Point) => {
  const reach = linkStation[2];
  const distance = getDistance({ x: linkStation[0], y: linkStation[1] }, point);

  let power = 0;
  if (distance <= reach) {
    power = Math.pow(reach - distance, 2);
  }
  return power;
};

export const findMostPowerfulLinkStation = (
  linkStations: Array<LinkStation>,
  point: Point
) => {
  let mostPowerfulLinkStation: LinkStation | undefined;
  let maxPower = 0;

  for (let i = 0; i < linkStations.length; i++) {
    const power = getPower(linkStations[i], point);

    if (power > maxPower) {
      mostPowerfulLinkStation = linkStations[i];
      maxPower = power;
    }
  }

  if (mostPowerfulLinkStation) {
    return `Best link station for point ${point.x},${point.y} is ${mostPowerfulLinkStation[0]},${mostPowerfulLinkStation[1]} with power ${maxPower}`;
  }

  return `No link station within reach for point ${point.x},${point.y}`;
};
