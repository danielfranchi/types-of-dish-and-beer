import React from 'react';
import axios from 'axios'

import { Categorias } from '../../types/Categorias'
import { Comidas } from '../../types/Comidas'

const Foods = () => {

    const [categoria, setCategoria] = React.useState<Categorias[]>([])
    const [select, setSelct] = React.useState<String>('')
    const [comida, setComida] = React.useState<Comidas[]>([])
    const [input, setInput] = React.useState<String>('')

    React.useEffect(() =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(resposta => setCategoria(resposta.data.categories))
        
    }, [])

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${select}`)
            .then(resposta => setComida(resposta.data.meals))
    }, [select])

    React.useEffect(() =>{
        if(input !== ''){
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(resposta => setComida(resposta.data.meals))
        }  
    }, [input])
    
    return (
        <div className="food-beer-list food-shop">
            <h1>Tipos de pratos</h1>

            <p>
                Selecione uma categoria ou digite a comida (em inglês):
                <input type="text" placeholder="Digite a comida..." onChange={(e) => setInput(e.target.value)}/>
            </p>

            <ul>
                {
                    categoria && categoria.map((item: Categorias) => (
                        <li key={item.idCategory} onClick={() => setSelct(item.strCategory)}> {item.strCategory} </li>
                    ))
                }
            </ul>

            {
                input ?  <h2>Busca: <strong> {input} </strong></h2> :
                        <h2>Tipo selecionado: <strong> {select} </strong></h2>            
            }
            
            {comida !== null && 
                <div className="food-container">
                    {
                        comida.map((item: Comidas) => (
                            <div className="food-item" key={item.idMeal}>
                                <img src={item.strMealThumb} alt={item.strMeal} />
                                <p>{item.strMeal}</p>
                            </div>
                        ))
                    }
                </div>
            }  
        </div>
    )
}

export default Foods;