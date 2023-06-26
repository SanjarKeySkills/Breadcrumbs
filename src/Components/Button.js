// import React from 'react';
// import styled from 'styled-components';
//
// const ButtonComponent =  styled.button`
// position: relative;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   text-decoration: none;
//   vertical-align: middle;
//   cursor: pointer;
//   user-select: none;
//   border-radius: 0.3rem;
//   padding: 0 ${(props) => props.size === "sm" ? "1.1rem" : props.size === "md" ? "1.4rem" : props.size === "lg" ? "1.6rem" : "1.1rem"};
//   height: ${(props) => props.size === "sm" ? "34px" : props.size === "md" ? "37px" : props.size === "lg" ? "40px" : "34px" };
//   font-family: sans-serif;
//   font-weight: 300;
//   border: 1px solid transparent;
//   backdrop-color: aqua;
// `;
//
// const Button = ({type, variant, className, id, onClick, children}) => {
//     return <ButtonComponent
//         type={type ? type : "button"}
//         variant={variant}
//         className={className ? `btn-component $(className)` : "btn-component"}
//         id={id}
//         onClick={onClick}
//         size={size}
//     >
//
//         {children}
//     </ButtonComponent>;
// };
//
// export default Button;