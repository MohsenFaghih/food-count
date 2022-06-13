import { breakfast } from "../data/breakfast"
import { lunch } from "../data/lunch"
import { dinner } from "../data/dinner"

function countEachMeal(choosenMeals, mealItems) {
    let result = [];
    Object.keys(choosenMeals).map(mealItem => {
        if(choosenMeals[mealItem] !== 0){
            mealItems.map(item => {
                if(item.enName == [mealItem]) {
                    result.push({ingredient: item.ing, count: choosenMeals[mealItem]})
                }
            })
        }
    })
    return result;
}

function mergeIngredients(meal) {
    let result = {};
    meal.map(item => {
        Object.keys(item.ingredient).map(ing => {
            result = {...result, [ing]: ((result[ing]?result[ing]:0) + (item.ingredient[ing] * item.count)) }
        })
    })
    return result;
}

function mergeAllIngredients(allMeals){
    let result = {};
    allMeals.map(item => {
        Object.keys(item).map(i => {
            result[i] = typeof(result[i]) === 'undefined' ? result[i] = item[i] : result[i] += item[i]
        })
    })
    // Object.keys(breakfastIngredientMerged).map(breakfastItem=>{
    //    result = {
    //        ...result,
    //        [breakfastItem]: (breakfastIngredientMerged[breakfastItem]) + Number(lunchIngredientMerged[breakfastItem]?lunchIngredientMerged[breakfastItem]:0) + Number(dinnerIngredientMerged[breakfastItem]?dinnerIngredientMerged[breakfastItem]:0) 
    //     }
    // })
    // Object.keys(lunchIngredientMerged).map(lunchItem=>{
    //     result = {
    //         ...result, 
    //         [lunchItem]: (lunchIngredientMerged[lunchItem]) + (dinnerIngredientMerged[lunchItem]?dinnerIngredientMerged[lunchItem]:0) 
    //     }
    // })
    // Object.keys(dinnerIngredientMerged).map(dinnerItem=>{
    //     if(!result[dinnerItem]) result = {...result, [dinnerItem]: dinnerIngredientMerged[dinnerItem]}
    // })
    return result;
}

export const countMealsIngredients = (meals) => {

    let breakfastItems = countEachMeal(meals.breakfast, breakfast)
    let lunchItems = countEachMeal(meals.lunch, lunch)
    let dinnerItems = countEachMeal(meals.dinner, dinner)

    let breakfastIngredientMerged = mergeIngredients(breakfastItems)
    let lunchIngredientMerged = mergeIngredients(lunchItems)
    let dinnerIngredientMerged = mergeIngredients(dinnerItems)

    const allNeededIngredients = mergeAllIngredients([breakfastIngredientMerged,lunchIngredientMerged,dinnerIngredientMerged])
    
    return allNeededIngredients
}