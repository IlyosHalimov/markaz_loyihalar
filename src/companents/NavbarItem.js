// function NavbarItem({items}) {
//     return ( 
//         <>
//         {
//             items.submenu ? (
//                 <>
//                 <li className="dropdown"><a href="/">{items.submenu.nomi}</a>
// <ul>
//     {items.submenu.map((e)=>(
//         <li><a href={e.manzil}>{e.nomi}</a></li>
//     ))}
// </ul>
// </li>
// </>
//             )
//             :
//             (
//                 <li>
//             <a className="active" href={items.manzil}>
//                 {items.nomi}
//             </a>
//         </li>
//             )
//         }
        

//         </>
//      );
// }

// export default NavbarItem;
function NavbarItem({ items }) {
    return (
      <>
        {items.submenu ? (
          <li className="dropdown">
            <a href="#">{items.nomi}</a>
            <ul>
              {items.submenu.map((submenuItem) => (
                <li key={submenuItem.id}>
                  <a href={submenuItem.manzil}>{submenuItem.nomi}</a>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li>
            <a className="active" href={items.manzil}>
              {items.nomi}
            </a>
          </li>
        )}
      </>
    );
  }
  
  export default NavbarItem;
  