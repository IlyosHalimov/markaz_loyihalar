// function AboutItem({item1, item2, items, item3, item4}) {
//     if (Array.isArray(item1)) {
//         return (
//           <div>
//             {item1.map((h3, index) => (
//               // Your rendering logic for each item
//               // <div key={index}>{text}</div>
//               <h3 key="index"><br />{h3}</h3>
//             ))}
//             {item2.map((p, index) => (
//               // Your rendering logic for each item
//               // <div key={index}>{text}</div>
//               <h3 key="index"><br />{p}</h3>
//             ))}
//           </div>
//         );
//       } else {
//         return <div>Error: items is not an array!</div>;
//       }
//     };


// export default AboutItem;
function AboutItem({text,text1, imgs}) {
    return <>
    <h3>{text}</h3>
    {text1}
    {imgs}
    </>;
  }
  
  export default AboutItem;