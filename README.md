# Portfolio V2

## Technologies and Libraries used:

- HTML5
- SaSS
- JavaScript
- ReactJS
- Framer Motion

## Components:

## Framer Motion notes:

[Framer-Motion Docs](https://www.framer.com/motion/)

- import at the top of the component as with any library

```
import {motion} from 'framer-motion';
```

- Pre-pend your element tags with motion in order to turn them into a motion element

```
<motion.div>
</motion.div>
```

In accordance with the documentation, you can pass through props that control the animations and transitions:

```
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
/>
```

Props can be passed also by defining variants like so, multiple params can be passed, not just opacity (ie: transitions, axis etc):

```
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
```

To then be used in the motion.div when defining the initial and end states (initial/animate):
You may need to add transition props to slow or speed up your animation with it.

```
<motion.div variants={variants}
            initial="hidden"
            animate="visible">
```

Example component:

```
import { motion } from "framer-motion";

const Tester = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
      ></motion.div>
    </div>
  );
};

export default Tester;
```

- Using state to control animation:
- This takes the above variant conditions and shortens them down:

```
const [open, setOpen] = useState(false);

<motion.div
    animate={open ? "visible" : "hidden"}>

// On click event to switch state example (prev=>!prev is equivalent to saying "If true, set to false and vice versa):
<button onClick={() => setOpen(prev=>!prev)}>Click</button>
```

- List examples:

```
const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChilden: 0.2 }, // This will stagger each child in the list that we are about to render, so each will become visible one after another at 0.2s
    },
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3"];


// Mapped over list:
<motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>


```
