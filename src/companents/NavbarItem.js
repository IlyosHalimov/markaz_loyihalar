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

import { Link } from "react-router-dom";

//         </>
//      );
// }

// export default NavbarItem;
function NavbarItem({ items }) {
    return (
        <>
            {items.submenu ? (
                <li className="dropdown">
                    <Link to="#">{items.nomi}</Link>
                    <ul>
                        {items.submenu.map((submenuItem) => (
                            <li key={submenuItem.id}>
                                <Link to={submenuItem.manzil}>
                                    {submenuItem.nomi}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ) : (
                <li>
                    <Link className="active" to={items.manzil}>
                        {items.nomi}
                    </Link>
                </li>
            )}
        </>
    );
}

export default NavbarItem;
