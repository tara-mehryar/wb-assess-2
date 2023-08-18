import { jest } from '@jest/globals';
import * as solution from '../arrow-functions.js';

describe('Testing arrow-functions.js', () => {
  test('giveMeTwo() returns 2', () => {
    expect(solution.giveMeTwo()).toBe(2);
  });

  test('bestMovie() returns the string "<movie> is the best movie ever!"', () => {
    expect(solution.bestMovie('The Matrix')).toBe('The Matrix is the best movie ever!');
  });

  test('compareNums() returns the bigger number', () => {
    expect(solution.compareNums(5, 10)).toBe(10);
  });

  test('addCalories() uses the .forEach method to add a calories property to each food object', () => {
    const forEachSpy = jest.spyOn(solution.foods, 'forEach');
    solution.addCalories();
    expect(forEachSpy).toHaveBeenCalled();

    expect(solution.foods[0].calories).toBe(194);
    expect(solution.foods[1].calories).toBe(90);
    expect(solution.foods[2].calories).toBe(109);
    expect(solution.foods[3].calories).toBe(83);
  });

  test('getSaleProducts() returns an array of products with the prices reduced by 25% using the .map method', () => {
    const mapSpy = jest.spyOn(solution.products, 'map');
    const onSale = solution.getSaleProducts();
    expect(mapSpy).toHaveBeenCalled();

    expect(onSale[0].price).toBe(375);
    expect(onSale[1].price).toBe(300);
    expect(onSale[2].price).toBe(900);
    expect(onSale[3].price).toBe(150);
    expect(onSale[4].price).toBe(750);
  });

  test('getBlueProducs() returns an array of products that are blue using the .filter method', () => {
    const filterSpy = jest.spyOn(solution.products, 'filter');
    const blueProducts = solution.getBlueProducts();
    expect(filterSpy).toHaveBeenCalled();

    expect(blueProducts[0].name).toBe('shirt');
    expect(blueProducts[1].name).toBe('socks');
    expect(blueProducts[2].name).toBe('pants');
  });

  test('getTotalPrice() returns the total price of all blue products using the .reduce method', () => {
    const reduceSpy = jest.spyOn(solution.products, 'reduce');
    const total = solution.getTotalPrice();
    expect(reduceSpy).toHaveBeenCalled();

    expect(total).toBe(3300);
  });
});
