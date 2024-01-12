// const HeroItem = ({ items }) => {
//     if (Array.isArray(items)) {
//       return (
//         <div>
//           {items.map((text, index) => (
//             // Your rendering logic for each item
//             // <div key={index}>{text}</div>
//             <h2 key="index"><br />{text}</h2>
//           ))}
//         </div>
//       );
//     } else {
//       return <div>Error: items is not an array!</div>;
//     }
//   };
  
//   export default HeroItem;
function HeroItem({text, text1, btn}) {
  return ( 
    <>
    <h1>{text}</h1>
    <h2>{text1}</h2>
    {btn}
    </>
    
   );
}

export default HeroItem;
