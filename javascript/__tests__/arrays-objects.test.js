import { jest } from '@jest/globals';
import * as solution from '../arrays-objects.js';

describe('Testing arrays-objects.js', () => {
  test("myArr() returns an array with the values: 4, 'abc', an array of strings ('apple', 'berry', 'cherry'), true", () => {
    expect(solution.myArr()).toEqual([4, 'abc', ['apple', 'berry', 'cherry'], true]);
  });

  test('getZ() returns the letter "z" from the nestedLetters array', () => {
    expect(solution.getZ()).toBe('z');
  });

  test('flatAnimals() returns an array with all the animals from the forest, ocean, savannah, and desert arrays', () => {
    expect(solution.flatAnimals()).toEqual([
      'deer',
      'bear',
      'squirrel',
      'whale',
      'shark',
      'dolphin',
      'octopus',
      'starfish',
      'lion',
      'zebra',
      'lion',
      'giraffe',
      'rattlesnake',
      'coyote',
    ]);
  });

  test('animalsWithElephant() returns an array with all the animals from the animals array, with "elephant" added to the end', () => {
    expect(solution.animalsWithElephant()).toEqual(['aardvark', 'bear', 'cat', 'elephant']);
  });

  test('improveGameRating() returns the gameInfo object with the rating property deleted', () => {
    expect(solution.improveGameRating()).toEqual({
      name: 'Splendor',
      desc: 'Renaissance merchants race to grab gems, acquire property, and please nobility.',
      players: [2, 3, 4],
      playingTime: 30,
      minAge: 10,
    });
  });

  test('evenShapes() returns the shapes object with the triangle and pentagon properties deleted', () => {
    expect(solution.evenShapes()).toEqual({
      square: 4,
      rectangle: 4,
      hexagon: 6,
      octagon: 8,
    });
  });

  test('betterCourses() returns courses with true values swapped to false', () => {
    expect(solution.betterCourses()).toEqual([
      {
        title: 'JavaScript 101',
        instructor: 'Emily',
        days: ['M', 'W', 'F'],
        time: 11,
        inPerson: false,
        homework: false,
      },
      {
        title: 'UI Design',
        instructor: 'Daniel',
        days: ['T', 'Th'],
        time: 9,
        inPerson: false,
        homework: false,
      },
      {
        title: 'Creating Servers',
        instructor: 'Jess',
        days: ['M', 'W'],
        time: 1,
        inPerson: false,
        homework: false,
      },
    ]);
  });

  test('findPairs() returns indexes of letter pairs from lettersToPair', () => {
    expect(solution.findPairs()).toEqual([
      [0, 4],
      [1, 8],
      [2, 5],
      [3, 6],
      [7, 9],
    ]);
  });

  test("getHelensInfo() uses Object.assign to return a new object with Helen's info", () => {
    const assignSpy = jest.spyOn(Object, 'assign');
    const helensInfo = solution.getHelensInfo();
    expect(assignSpy).toHaveBeenCalled();

    expect(helensInfo).toEqual({
      name: 'Helen',
      phoneNumber: 1234445555,
      email: 'helen@mymail.com',
      street: '100 E. Main Street',
      city: 'Anytown',
      state: 'AZ',
      zipCode: 85004,
    });
  });

  test("getHelensEmail() returns Helen's email address", () => {
    expect(solution.getHelensEmail()).toBe('helen@mymail.com');
  });

  test('getZipAndState() returns an array with the zip code and state', () => {
    expect(solution.getZipAndState()).toEqual([85004, 'AZ']);
  });

  test("getEllensInfo() returns an object with Ellen's info", () => {
    expect(solution.getEllensInfo()).toEqual({
      name: 'Ellen',
      phoneNumber: 1234445555,
      email: 'ellen@email.com',
      street: '100 E. Main Street',
      city: 'Anytown',
      state: 'AZ',
      zipCode: 85004,
    });
  });

  test("shouldAlert() returns the value of the user's alert preference", () => {
    expect(solution.shouldAlert()).toBe(false);
  });

  test("lastTopic() returns the last item in the user's topics array", () => {
    expect(solution.lastTopic()).toBe('tech');
  });

  test("firstResponseId() returns the id of the first response ID to the user's second comment", () => {
    expect(solution.firstResponseId()).toBe(1084);
  });
});
