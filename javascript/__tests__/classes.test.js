import * as solution from '../classes.js';

describe('Testing classes.js', () => {
  describe('Testing the Bicycle class', () => {
    test('instances should have a numWheels property with a value of 2', () => {
      const bicycle = new solution.Bicycle();
      expect(bicycle.numWheels).toBe(2);
    });

    test('should be able to construct a Bicycle with a color property', () => {
      const bicycle = new solution.Bicycle('red');
      expect(bicycle.color).toBe('red');
    });

    test('should be able to construct a Bicycle with a manufacturer property', () => {
      const bicycle = new solution.Bicycle('red', 'Schwinn');
      expect(bicycle.manufacturer).toBe('Schwinn');
    });
  });

  describe('Testing the User class', () => {
    test('the processChangePassword method should change the password and return true if the current password is correct', () => {
      const user = new solution.User('user', 'password');
      const result = user.processChangePassword('password', 'newPassword');
      expect(result).toBe(true);
      expect(user.password).toBe('newPassword');
    });

    test('the processChangePassword method should not change the password and return false if the current password is incorrect', () => {
      const user = new solution.User('user', 'password');
      const result = user.processChangePassword('incorrect', 'newPassword');
      expect(result).toBe(false);
      expect(user.password).toBe('password');
    });
  });

  describe('Testing the Library class', () => {
    test('the createAndAddbook method should be able to create and add a book to the library', () => {
      const library = new solution.Library();
      library.createAndAddBook('The Hobbit', 'J.R.R. Tolkien');
      expect(library.books).toHaveLength(1);
      expect(library.books[0].title).toBe('The Hobbit');
      expect(library.books[0].author).toBe('J.R.R. Tolkien');
    });

    test('the findBooksByAuthor method should return an array of books by the given author', () => {
      const library = new solution.Library();
      library.books = [
        new solution.Book('The Hobbit', 'J.R.R. Tolkien'),
        new solution.Book('The Fellowship of the Ring', 'J.R.R. Tolkien'),
        new solution.Book('The Two Towers', 'J.R.R. Tolkien'),
        new solution.Book('The Return of the King', 'J.R.R. Tolkien'),
        new solution.Book('The Lion, the Witch, and the Wardrobe', 'C.S. Lewis'),
      ];
      const booksByTolkien = library.findBooksByAuthor('J.R.R. Tolkien');
      expect(booksByTolkien).toHaveLength(4);
    });
  });

  describe('Testing the Square class', () => {
    test('should be able to construct a Square with a number to set the length and width', () => {
      const square = new solution.Square(5);
      expect(square.length).toBe(5);
      expect(square.width).toBe(5);
    });

    test('the getArea() method should return the area of the square if the length and width are equal', () => {
      const square = new solution.Square(5);
      expect(square.getArea()).toBe(25);
    });

    test('the getArea() method should return undefined if the length and width are not equal', () => {
      const square = new solution.Square(5);
      square.width = 10;
      expect(square.getArea()).toBeUndefined();
    });
  });
});
