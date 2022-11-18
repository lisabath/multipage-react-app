import { products } from "./data";

function Products() {
  function handleClick (){
    
  }

  
  const cats = products.map((product, i) => product.category);

  
  const categories = cats.filter((element, index) => {
    return cats.indexOf(element) === index;
  });

  

  return (

    <div className="Products">
      <h1>Films</h1>
      <p>
      Our Film Catalogue
      </p>

{/* //<div class="products-list__item">
//   <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#horror">Horror</a>
//     <a href="#comedy">Comedy</a>
//     <a href="#drama">Drama</a>
//     <a href="#scifi">SciFi</a>
//     <a href="#documentary">Documentary</a>
//   </div>
// </div>

</div> */}

{/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}


  
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
                      <div className="products-list__item" id={product.id}>
                        <img src={product.image} alt='movie cover'/>
                        <div className="pr-name">{product.name}</div>
                        <div className="pr-director">{product.director}</div>
                        <div className="pr-year">{product.year}</div>
                        <div className="pr-price">{product.price}</div>

                        <button onClick={(e) => handleClick(e)}>Add to Cart</button>
                        
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