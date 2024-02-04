// import { getAll ,getSearch} from "@/lib/mongo/subject";



// // async function fetchAll() {
// //     const { content } = await getAll();
// //     if (!content) throw new Error("Failed to fetch data");
// //     return content;
// //   }


// async function fetchSearch(searchTerm) {
//   const { content } = await getSearch(searchTerm);
//   if (!content) throw new Error("Failed to fetch data");
//   return content;
// }

// export default async function Demo(props) {

//   try {
//     const sub = await fetchAll();
//     const search = await fetchSearch(props.search);

//     return (


//       <div className="m-[100px]">
//         <h1>question</h1>
//         <ul>
//           {sub.map((item) => (
//             <li key={item._id}>
//               {item.answer}
//             </li>
//           ))}
//         </ul>

     

//         <h1 className="mt-[30px] mb-[10px] text-xl font-bold">search</h1>
//         <ul>
//           {search.map((item) => (
//             <li key={item._id}>
              
//               <h1 className="text-2xl font-bold">{item.unitName}</h1>
//               <h1 className="text-lg font-bold">{item.question}</h1>
//               {item.answer}
//             </li>
//           ))}
//         </ul>

       
//       </div>
//     );
//   } catch (error) {
//     console.error("Error in Demo component:", error);
//     return <div>Error loading data</div>;
//   }
// }
