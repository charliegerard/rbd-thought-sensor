<div style="display: block; margin: 0 auto; text-align: center"><img src="rbd-logo-with-controller.jpg" alt="rbd thought sensor logo"/></div>

<section style="text-align: center">
    <h1><strong>rbd-thought-sensor</strong></h1>
    <p>A <strong>thought</strong> sensor for <a href="https://github.com/atlassian/react-beautiful-dnd">react-beautiful-dnd</a>, built with the <a href="https://www.emotiv.com/">Emotiv brain sensor </a> and <a href="https://github.com/charliegerard/Epoc.js">Epoc.js</a>
</section>

*Module built over a 24h hackathon. It needs more work to be implemented properly and be configurable.*

## Demo

![demo](demo.gif)


## (Current) Installation

To make this work, install the following packages:

`npm install --save rbd-thought-sensor` or `yarn add rbd-thought-sensor`

You'll also need [Epoc.js](https://github.com/charliegerard/Epoc.js) to get the data from the brain sensor:

`npm install --save epocjs`

## Example usage

In your application, create a `server.js` file if you don't already have one.

In this file, write some code to handle data from the brain sensor and send it to the front-end via web sockets.
Something like this:

```javascript
const WebSocket = require('ws');
const epoc = require('epocjs')();

const wss = new WebSocket.Server({port: 3030});

wss.on('connection', function connection(ws, req){
    epoc.connectToLiveData(`<path to profile file>`, function(event){
        if(event){
            if(event.winkingRight === 1){
                action = 'tab-forward';
            }
    
            if(event.cognitivAction > 0){
                switch(event.cognitivAction){
                    case 2: //push
                        action = 'push';
                        break;
                    default:
                        break;
                }
            }

            ws.send(action);
        }  
    })
});
```

Then, in the front-end, import the `rbd-thought-sensor` package:

```javascript
import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import thoughtSensor from 'rbd-thought-sensor';

function App(){
    return (
        <DragDropContext
            sensors={[thoughtSensor]}
        >
        </DragDropContext>
    )
}
```

## How to run

**Run the server.js file first** by running `node server.js` and, in another terminal window, run your front-end as usual.

## Current commands

* Wink right to focus on a card.
* Blink to select it.
* Think right to move it to the next column.
* Think about "disappear" to fade them all away.


## To do

Make the commands more configurable.


## Resources

* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
* [RBD Programmatic API](https://github.com/atlassian/react-beautiful-dnd/blob/virtual/docs/sensors/programmatic.md)
* [epoc.js](https://github.com/charliegerard/Epoc.js)