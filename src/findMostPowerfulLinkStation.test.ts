import {
  getDistance,
  getPower,
  findMostPowerfulLinkStation,
} from "./findMostPowerfulLinkStation";
import { LinkStation } from "./types";

test("calculates distance correctly", () => {
  const point1 = { x: 1, y: 1 };
  const point2 = { x: 5, y: 10 };

  const distance = getDistance(point1, point2);
  expect(distance).toBe(9.848857801796104);
});

test("calculates link station power in relation to a given point correctly", () => {
  const linkStation: LinkStation = [3, 3, 5];
  const point = { x: 1, y: 1 };

  const power = getPower(linkStation, point);
  expect(power).toBe(4.715728752538098);
});

test("calculates link station power as zero since it's out of reach", () => {
  const linkStation: LinkStation = [10, 10, 5];
  const point = { x: 1, y: 1 };

  const power = getPower(linkStation, point);
  expect(power).toBe(0);
});

test("finds the most powerful link station correctly", () => {
  const linkStations: Array<LinkStation> = [
    [3, 3, 5],
    [3, 4, 5],
    [10, 10, 5],
  ];
  const point = { x: 1, y: 1 };

  const message = findMostPowerfulLinkStation(linkStations, point);
  expect(message).toEqual(
    "Best link station for point 1,1 is 3,3 with power 4.715728752538098"
  );
});

test("does not find any link stations", () => {
  const linkStations: Array<LinkStation> = [
    [5, 5, 2],
    [10, 10, 5],
  ];
  const point = { x: 1, y: 1 };

  const message = findMostPowerfulLinkStation(linkStations, point);
  expect(message).toEqual("No link station within reach for point 1,1");
});
