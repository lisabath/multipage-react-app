import { products } from "./data";

function Products() {

  // 1. create a new array called categories
  // 2. For each category in this Array, filter the products by this category
  // 3. output a title, and a list of the the filtered products

  // return an array of only categories
  const cats = products.map((product, i) => product.category);

  // remove duplicate categories to only have an array of the possible categories
  const categories = cats.filter((element, index) => {
    return cats.indexOf(element) === index;
  });

  // const sporting = products.filter(function(item,index){
  //   return  item.category === 'Sporting Goods';
  // })

  // const electronics = products.filter(function(item,index){
  //   return  item.category === 'Electronics';
  // })

  return (
    <div className="Products">
      <h1>Products</h1>
      <p>
        This is the products page.
      </p>
      <div className="products-container">

        <div className="products-list">
          {

            categories.map((cat, i) => {
              return (
                <>
                <h3>{cat}</h3>
                {products.map(function (product, index) {
                  console.log(product.category, cat);

                  return (
                    product.category === cat ?
                      <div className="products-list__item">
                        <div className="pr-name">{product.name}</div>
                        <div className="pr-price">{product.price}</div>
                      </div>
                      :
                      ''
                  );
                })}
                </> 
              );
          })  
          
        }


        </div>

      </div>

    </div>
  );
}

export default Products;