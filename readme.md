#### Attract your user interest with Bip-Tour
[Live Demo](https://codepen.io/oza75/project/editor/ZgWOkv)

## Installation
- Via UNPKG
```html
<script type="text/javascript" src="https://unpkg.com/js-bip-tour@latest/dist/index.js"></script>
```
- Via NPM
```bash
    npm install js-bip-tour
```

## How to use it

- Without a module blunder
```html
  <script type="text/javascript" src="https://unpkg.com/js-bip-tour@latest/dist/index.js"></script>
```
```js
    // in your js
    let tour = new window.Tour(/*options here*/)
    tour.add({selector: "#first-feature", title: "My first Step", description: "Description of my first Step"});
    let secondStep = new window.Bip({selector: "#second-tour", description: "My second Step", title: "Second Step"});
    tour.add(secondStep);
    tour.play();
```

- With webpack
```js
    require('js-bip-tour/css/bip.css'); // include css !important
    import {Tour} from 'js-bip-tour';
    let tour = new Tour()
        .add({selector: "#feature", title: "My first feature", description: "Description of my feature"})
        .add({selector: "#feature-2", title: "My Second feature", description: "Description of my feature"});

    tour.play(); // start the tour
```


## Api
- Constructor
    - *options* : Tour options
        - *nextButton*: Next Button Text. By defaut `Next`;
        - *prevButton*: Previous Button Text. By defaut `Previous`;


   #### Example
```js
   new Tour({nextButton: "Suivant", prevButton: "Précédent"})
```
---
- add : Add new Step
   - *options*:
        - *selector*: selector of where the step must appear
        - *x*: X position of the step. If no selector is specified
        - *y*: Y position of the step. If no selector is specified
        - *title*: The title of the step
        - *description*: The description of the step
        - *color*: Color of step's dot.

 ### Example
```html
    <button id="new-feature">My new Feature</button>
```
```js
    let tour = new Tour();
    tour.add({selector: "#new-feature", title: "My first Step", description: "Description of my first step"});
    tour.play();
```
---
- on : Add an event to execute later when a specific action is executed
    - *event* : type of the action . Must be one of theses values: `TourEvents.FINISH`, `TourEvents.NAVIGATE_PREV`, `TourEvents.NAVIGATE_NEXT`
    - *func* : Your function
 ### Example
```html
    <button id="new-feature">My new Feature</button>
    <button id="new-feature-1">My new Feature</button>
```
```js
    let tour = new Tour();
    tour.add({selector: "#new-feature", title: "My first Step", description: "Description of my first step"});
    tour.add({selector: "#new-feature-1", title: "My Second Step", description: "Description of my Second step"});

    tour.on(TourEvents.FINISH, function () {
        console.log('Tour finished!')
    });

    tour.on(TourEvents.NAVIGATE_PREV, function () {
        console.log('Tour prev button clicked !');
    });

    tour.on(TourEvents.NAVIGATE_NEXT, function () {
        console.log('Tour next button clicked !');
    })

    tour.play();
```
---
### Full Documentation
[Full Documentation](docs/globals.md)
