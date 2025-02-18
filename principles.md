Steps 1- Break the UI into component hierarchy
2. Build a static version in React
3. Add Minimal interactivity
4. Identify where your state will live. 
5. 


Principles
A. Think of all the pieces of Data in your application. json, user created. 
B. Which of these are state? does it remain unchanged? its not a state. Is it passed in from a parent as a prop, then it isnt  state. Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!.

https://react.dev/learn/thinking-in-react

1. Make Components with Props from Parents to Child. You can use deconstructing for this. 
2. Conditionally Render components, for example: 
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
3. Logical AND Operator 
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);

You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.

4. Rendering Lists
5. Keeping Components Pure:  React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!
6. Local Mutation is sometimes allowed: 


function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

7. Side Effects through event handlers. Otherwise useEffect()

8. Adding Iteractivity and useState()
https://react.dev/learn/adding-interactivity

9. Responding to Events
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

10. Passing Event handlers in Props
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

12. manage compex states to reducers
    This can be done in three steps
    1. Move from setting state to dispatching actions
    2. write a reducer fucntion
    3. use the reducer from your compoenent

    We will use Redux Toolkit for this: 

13. useContext() //not sure. 
14. Escape Hatches () - for browser API and pause a video player 
    - When you want a component to "remember@" some information but you dont want that information to trigger new renders, you can use a ref: const ref = yseRef(0);
    - You can use this to store timeOutIDs and dom Elements. 

import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

13. CustomeHooks: 

14 Dom manipulation with Refs