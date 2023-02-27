import Link from "next/link";
import { useState } from "react";
import Category from "./Category";

export default function CategoryList({ categories }) {
  const [showAll, setShowAll] = useState(false);

  if (!categories) return null;
  console.log(categories);

  const visibleCategories = showAll ? categories : categories.slice(0, 5);

  return (
    <div className="mt-[40px] w-[95%] mx-auto">
      <h2 className="text-center text-3xl font-bold mb-[3%]">
        Shop By Categories
      </h2>
      <ul className="grid lg:grid-cols-5 md:grid-cols-4 gap-[50px] items-center justify-center">
        {visibleCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/categories/${category.slug}`}
              className="justify-center items-center flex"
            >
              <div className="w-[250px] h-[91px] border flex items-center justify-around text-black font-bold drop-shadow-sm">
                <div>
                  {category.assets.map((assets) => (
                    <div key={assets.id} className="w-full h-full">
                      <img
                        src={assets.url}
                        alt={category.slug}
                        className="w-[70px] h-[70px] object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Category {...category} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {showAll && (
        <button
          className="underline text-black font-bold py-2 px-4 rounded-full my-4 hover:text-gray-700"
          onClick={() => setShowAll(false)}
        >
          View Less
        </button>
      )}
      {!showAll && categories.length > 5 && (
        <button
          className="underline text-black font-bold py-2 px-4 rounded-full my-4 hover:text-gray-700"
          onClick={() => setShowAll(true)}
        >
          View All
        </button>
      )}
    </div>
  );
}
