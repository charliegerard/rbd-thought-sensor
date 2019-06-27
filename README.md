<div style="text-align:center"><img src="rbd-logo-with-controller.jpg" alt="rbd thought sensor logo"/></div>

<section style="text-align: center">
    <h1><strong>rbd-thought-sensor</strong></h1>
    <p>A <strong>thought</strong> sensor for <a href="https://github.com/atlassian/react-beautiful-dnd">react-beautiful-dnd</a>, built with the <a href="https://www.emotiv.com/">Emotiv brain sensor </a> and <a href="https://github.com/charliegerard/Epoc.js">Epoc.js</a>
</section>

## Demo
---






## Get started
---

### Installation

`npm install --save rbd-thought-sensor` or `yarn add rbd-thought-sensor`

### Basic example

```javascript
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import thoughtSensor from 'rbd-thought-sensor';

function App(){
    return <DragDropContext sensors={[thoughtSensor]}>{/*...*/}</DragDropContext>;
}
```


## Resources

* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
* [RBD Programmatic API](https://github.com/atlassian/react-beautiful-dnd/blob/virtual/docs/sensors/programmatic.md)