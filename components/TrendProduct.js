const TrendProduct = ({ categories }) => {
  if (!categories) return null;
          console.log(categories);
  return (
    <div className="mt-[7%]">
      <h4 className="text-[28px] font-bold mb-3">#TopTrends</h4>
      <div className="h-64">
        {categories.map(({ children }) => (
          <>
            {children.map(({ id, assets, slug }) => (
              <div className="grid-cols-4 grid space-around" key={id}>
                {assets.map(({ id, url }) => (
                  <div key={id} className="w-full h-full">
                    <img src={url} alt={slug} width={300} height={300} />
                  </div>
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendProduct;
