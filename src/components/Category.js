import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Category.css"


function Category(){
  const [categories, setCategories] = useState([])
  // const[show, setShow]= useState(false)
const navigate= useNavigate()
// useEffect(() => {
//   fetch("http://localhost:3000/categories")
//     .then((r) => r.json())
//     .then((categories) => {setCategories(categories)});
//   }, []);

//  console.log(categories);

useEffect(() => {
  fetch("http://localhost:3000/categories")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((categories) => {
      setCategories(categories);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);

  return(
    <section className='section'>
      {categories.map((category) => {
        return (
          <div className='wrapper' key={category.id}>
            <div className='image-card'>
              <img src={category.image_url} alt='category-img' className='image'/>
            </div>
            <div className='overlay'>
              <div className='details'>
                <h3>{category.name}</h3>
                <h4>{category.description}</h4>
              </div>
              <div>
                `<button className='events-btn'onClick={()=>{navigate(`/http://127.0.0.1:3000/categories/${category.id}`)}}>View Events</button>`

              </div>
            </div>
        
          </div>
        )
      })}
    </section>
    )
}

export default Category;