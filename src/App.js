import './App.css';
import Recipe from './Recipe/recipe.jsx';
import Footer from './Footer/footer';
import {useState} from 'react';
import ress from './ress.png';
import Axios from 'axios';


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "";
  const APP_KEY = "";
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const onSubmit = (e)=>{
    e.preventDefault();
    getRecipes()

  }

  const getRecipes = async ()=>{
    var res = await Axios.get(URL);
    setRecipes(res.data.hits)
    console.log(res.data.hits);
  }
  const styles ={
    backgroundImage:`url('${ress}')`,
    backgroundRepeat:'no-repeat',
    backgroundColor: 'rgb(182, 3, 3)',
    width:'100vw',
    zIndex:'-999',
    height:'40vh',
    backgroundPosition:'center',
  }

  return (
    <div className="app">

      <div className="header">
        <div className='h_left'>
        <h2>Food Recipe WrashTech</h2>
          
        </div>
        <div className='h_right'>
              <div className='form'>

                <form  onSubmit={onSubmit}>
                  <input type='text' className="search" placeholder='enter recipe' 
                  onChange={(e)=>setQuery(e.target.value)} value={query} />
                  <input className="btn_submit" type='submit' value='submit'/>

                </form>

              </div>
        </div>
      </div>
      <div style={styles}>

      </div>

      <div className='form_div'>
        
        <div className="col_items">
          {recipes.map((recipe)=>{
            return <Recipe recipe={recipe}/>
          })}
        </div>

      </div>
      <Footer/>

    </div>
  );
}

export default App;