import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
// import Button from "./Components/Button";
import React from "react";
import { useState } from "react";

const App = () => {
    const [show, setShow] = useState(false);

    const handleBar = () => {
        setShow(!show)};

    return (
        <div>
            <button onClick={handleBar}>
                {show ? "Do you push?" : "Can close"}
            </button>

            {show && (
                <div>
                    <ul>
                        <li><a href="#">Click one</a></li>
                        <li>
                            <a href="#">Click two</a>
                        </li>
                        <li>
                            <a href="#">Click three</a>
                        </li>
                        <li>
                            <a href="#">Click four</a>
                        </li>
                    </ul>

                </div>
            )}
        </div>
        )}



// function App() {
//   return (
//     <div className="App">
//       {/*<Breadcrumbs items={[{ title: 'Lalafo', href: '/' }, { title: 'Lalafo', href: '/' }, { title: 'Lalafo', href: '/' }]}/>*/}
//     </div>
//   );
// }
//
// const App = () => {
//     return (
//         <React.Fragment>
//             <h1
//                 style={{ textAlign: "center", fontSize: "17px", marginBottom: "30px"}}
//                 >
//                 Create Reusable Button Component
//             </h1>
//             <div
//                 style={{
//                     display: "flex",
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: "10px",
//                     marginBottom: "10px"
//             }}
//                 >
//                 <Button>Success Button</Button>
//                 <Button>Danger Button</Button>
//                 <Button>Warning Button</Button>
//                 <Button>Primary Button</Button>
//             </div>
//         </React.Fragment>
//     )
// }

export default App;
