# Restaurant App Planning

## Header

- Logo
- Nav Items

## Body

- Search
- Restaurants Container
  - Restaurant Card
    - Image
    - Name of the restaurant
    - Star Rating
    - Cuisine
    - Delivery time

## Footer

- Copyright
- Links
- Address
- Contact

## Props / Properties

Properties is something which we can pass to the component. Suppose i want to dynamically pass data to the component we can pass it as a prop.

Look what is that functional component? Yes it's normal javascript function that returns some jsx.
Like argument in js we pass some value to the function just like in react we have props.

Props are just normal arguments to our function.
Passing a prop to the component is just like passing the argument to the function.

When you have to dynamically pass some data to a component. you will pass in as a prop.


Another way to pass the prop is destructuring on the fly.  React is wrapping this inside an object and passing this to the component/function as a prop.
Another cool way of passing the props to the component.

const MyCompo = (props) => {
    const {resName, cuisine, rating} = props;
    return(

    )
}

const MyCompo = ({resName, cuisine, rating}) => {
    return(

    )
}

How that restaurant data come from the backend to us?
It comes in a form of json.


Config driven UI

Cloudinary CDN