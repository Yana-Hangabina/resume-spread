// import React from "react";

// export const RenderOperating = ({ obj }) => {
//   let keys1 = Array(100)
//     .fill(0)
//     .map(() => Array(100).fill(0));
//   for (let key1 in obj) {
//     keys1.push(key1);
//     console.log(key1);
//     for (let key2 in obj[key1]) {
//       keys1[key1].push(key2);
//       console.log(key2);
//       //   values2.push(obj[key1][key2]);
//       console.log(obj[key1][key2]);
//     }
//   }
//   console.log(keys1);
//   return keys1.map((key1) => {
//     return (
//       <>
//         <div>{key1}</div>
//         <div>
//           {keys1[key1].map((key2) => {
//             return (
//               <>
//                 <div>{key2}</div>
//                 <div>{obj[key1][key2]}</div>
//               </>
//             );
//           })}
//         </div>
//       </>
//     );
//   });
// };
