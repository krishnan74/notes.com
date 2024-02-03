// // Content.jsx
// import { getSearch } from "@/lib/mongo/subject";
// import {marked} from "marked";
// import Result from "./Result";

// export default function Content({ contents }) {
//   console.log(contents, "dfj");
//   return (
//     <>
//       {contents}
//     </>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const search = await fetchSearch("xx");
//     const contentResult = marked(search[0].answer);
//     console.log(search)

//     return {
//       props: {
//         contents: search,
//       },
//     };
//   } catch (error) {
//     console.error("Error in Content component:", error);
//     return {
//       props: {
//         contents: "Error loading data from content page",
//       },
//     };
//   }
// }

// async function fetchSearch(searchTerm) {
//   try {
//     const { content } = await getSearch(searchTerm);
//     if (!content) throw new Error("Failed to fetch data");
//     return content;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Re-throw the error to trigger the error handling in getServerSideProps
//   }
// }


// // import { getAll ,getSearch} from "@/lib/mongo/subject";
// // import { marked } from "marked";


// // async function fetchSearch(searchTerm) {
// //     const { content } = await getSearch(searchTerm);
// //     if (!content) throw new Error("Failed to fetch data");
// //     return content;
// //   }

// //   export default async function Content(){
    
// //     try{
// //         const search = await fetchSearch("f");
// //         const dataConversion = marked(search[0].answer)
// //       console.log(dataConversion)
// //       console.log(search)
// //     return (
// //         <div>
// //             <div dangerouslySetInnerHTML={{__html:dataConversion}} className="md-content"></div>
        
// //         </div>
// //     );
// //     }
// //     catch(error) {
// //         console.error("Error in Demo component:", error);
// //         return <div>Error loading data rom content page</div>;
// //       }
// //   }
