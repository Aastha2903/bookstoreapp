// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
import React from "react";

// Function to get the link based on the category
const getLinkByCategory = (name) => {
  switch (name) {
    case "story book":
      return "https://monkeypen.com/pages/adventure-stories";
    case "music book":
      return "https://www.bookfusion.com/books/free?language=en&query=music";
    case "fiction book":
      return "https://monkeypen.com/pages/science-fiction-stories";
    case "Motivational book":
      return "https://www.barnesandnoble.com/b/free-ebooks/ebooks-nook/personal-growth/success-motivation-self-esteem/_/N-ry0Z8qaZ1c3b";
    default:
      return "https://monkeypen.com/pages/free-stories-for-kids";
  }
};

function Cards({ item }) {
  const link = getLinkByCategory(item.name);
  console.log(`name: ${item.name}, Link: ${link}`);

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} width="250px" height="250px" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                <a href={link}>Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;


