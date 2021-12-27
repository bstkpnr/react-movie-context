// import React from 'react'


// const fetchData=()=>{
//     new Promise=((resolve)=>{
//         setTimeout(()=>resolve(),3000);
//     });
// }

// export default function Loading() {
//     const [loadingId, setLoadingId] = useState({});

//     const handleClick=async(e)=>{
//         const {id}=e.target;
//         console.log({id});
//         setLoadingId((idLoading)=>({
//             ...idLoading,
//             [id]:true
//         }));
//         try{
//             await fetchData();

//         }catch{

//         }finally{
//             setLoadingId((idLoading)=>({
//                 ...idLoading,
//                 [id]:false
//             }));
//         }
//     }
   
//     return (
//         <div>
//            <button type="button" id={0} onClick={clickHandler}>
//         {loadingId[0] ? "loading..." : 0}
//       </button>
//         </div>
//     )
// }
