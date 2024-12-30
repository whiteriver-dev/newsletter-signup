Component design methodology: Atomic design principles.
- Primitives
- Components
- Modules
- Templates
- Pages

Things I learned:
- Creating basic React components
- SCSS styling
- UseState handling in React
- Passing props throughout components

Things I will change next time:
- Avoid overengineering - I do not need a SignupField component when I could have just included everything in EmailSignup component. While reusable components are good - SignupField is too small of a component in my opinion to be made into its own React component.
- Prop drilling (passing props through lots of intermediary components) - will try use Redux instead.