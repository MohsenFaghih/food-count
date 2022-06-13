import React, {useState, useEffect} from 'react';
import { countMealsIngredients } from '../utils/countMealsIngredients';
import { translateIngredient } from '../utils/translationIngredient';

const ShowResult = ({countDailyMeals, setShowResult}) => {

    const [showIngredients, setShowIngredients] = useState(null)
    
    function countEachMeal(meal){
        let count = 0;
        Object.keys(countDailyMeals[meal]).map(item=>{
            count += Number(countDailyMeals[meal][item])
        })
        if(count !== 0) {
            let mealName = meal === 'breakfast' ? 'صبحانه' : meal === 'lunch' ? 'نهار' : 'شام';
            return (<div>{`${count} وعده ${mealName}`}</div>)
        }
    }

    useEffect(()=>{
        setShowIngredients(countMealsIngredients(countDailyMeals))
    },[])
    
    return (
        <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', backgroundColor: 'white', zIndex: 10, padding: '30px 30px 90px 30px', boxSizing: 'border-box', overflow: 'auto'}}>
            <h3>مواد لازم برای:</h3>
            {countEachMeal('breakfast')}
            {countEachMeal('lunch')}
            {countEachMeal('dinner')}
            {showIngredients && (
                <div style={{margin: '30px 0'}}>
                    <ol style={{paddingInlineStart: '20px'}}>
                        {Object.keys(showIngredients).map(ingredient=>(
                            <li key={ingredient} style={{padding: '10px', background: '#dddcde', marginBottom: '3px', borderRadius: '5px'}}>
                                {translateIngredient(ingredient, showIngredients[ingredient])}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', position: 'fixed', bottom: 0, left: 0}}>
                <button type='button' style={{
                    padding: '20px',
                    color: 'white',
                    backgroundColor: '#009573',
                    outline: 'none',
                    border: 'none',
                    borderRadius: '10px',
                    fontFamily: 'sans',
                    cursor: 'pointer',
                    width: '300px',
                    margin: '20px 0',
                    }}
                    onClick={()=>setShowResult(false)}>
                    بستن
                </button>
            </div>
        </div>
    )
}

export default ShowResult