# TIC-TAC-TOE GAME

Built the popular X and O game with Javascript! 

### The challenge

Users should be able to:

- Play the tic-tac-toe game in turns

### Screenshot

![](./screenshot.png)

## My process
- Structured HTML and linked stylesheet and JS file
- Styling 
- JS 

### Built with

-  HTML
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript 
- JS DOM


### What I learned

I learned a couple of new things in the styling of the project, such as:

- The hover effect that indicates player turns 
- Styling 'X' and '0' with CSS instead of hard coding!

** Snippets attached below****

```css
.box.x::before,
  .box.x::after,
  .container.x .box:not(.x):not(.circle):hover::before,
  .container.x .box:not(.x):not(.circle):hover::after {
    content: '';
    position: absolute;
    width: calc(var(--mark-size) * .15);
    height: var(--mark-size);
  }
```


