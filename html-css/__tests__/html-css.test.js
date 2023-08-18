import '@inrupt/jest-jsdom-polyfills';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

// The contents of html-css/index.html are loaded into jsdom by jest-environment-jsdom.
// See jest.config.cjs for more details.

describe('Testing HTML-CSS solution', () => {
  const requiredElements = ['nav', 'section', 'article', 'main', 'img', 'ol', 'li', 'footer'];
  requiredElements.forEach((element) => {
    test(`includes required element: <${element}>`, () => {
      expect(document.body.querySelector(element)).not.toBeNull();
    });
  });

  test('includes a heading element (h1-h6)', () => {
    const headingsInDocument = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      .flatMap((heading) => {
        return document.body.querySelectorAll(heading);
      })
      .filter((heading) => heading !== null);
    expect(headingsInDocument).not.toHaveLength(0);
  });

  test('displays the website name, "Devmountain Daily"', () => {
    expect(screen.getByText('Devmountain Daily')).toBeInTheDocument();
  });

  test('the <nav> element contains links to the following pages: "Home", "Topics", "Subscribe", and "Sign In"', () => {
    const nav = document.body.querySelector('nav');
    const pages = ['Home', 'Topics', 'Subscribe', 'Sign In'];
    pages.forEach((page) => {
      expect(nav).toHaveTextContent(page);
    });
  });

  test('has a "Your Name" placeholder', () => {
    expect(screen.getByText('Your Name')).toBeInTheDocument();
  });

  test('has the "Popular Articles" ordered list', () => {
    expect(screen.getByText('Popular Articles').parentElement).toContainHTML('ol');
  });

  test('has the "Image Gallery" section', () => {
    expect(screen.getByText('Image Gallery').parentElement).toContainHTML('img');
  });

  test('has a footer with the text "Learn to Code at Devmountain"', () => {
    expect(document.body.querySelector('footer')).toHaveTextContent('Learn to Code at Devmountain');
  });
});
