import Link from 'next/link';
import Category from './Category';

export default function CategoryList({ categories }) {
  if (!categories) return null;
  console.log(categories);

  return (
    <div className="mt-[40px]">
      <ul className="grid lg:grid-cols-5 md:grid-cols-4 gap-[50px] items-center justify-center">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="lg:w-[200px] w-[250px] h-[91px] border flex items-center justify-center text-black font-bold bg-gray-300"
          >
            <Link href={`/categories/${category.slug}`} className="flex">
              <img src={category.image.url} alt="image"/>
              <Category {...category} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}