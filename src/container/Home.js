import React, { useState } from 'react';
import Breakfast from '../components/Breakfast';
import Dinner from '../components/Dinner';
import Lunch from '../components/Lunch';
import ShowResult from './ShowResult';

const Home = () => {
    const [countDailyMeals, setCountDailyMeals] = useState({});
    const [showResult, setShowResult] = useState(false)
    
    const handleMeals = (name, count) => {
        setCountDailyMeals(prev=>({...prev, [name]: count}))
    }

    return (
        <div>
            <Breakfast handleMeals={handleMeals} />
            <Lunch handleMeals={handleMeals} />
            <Dinner handleMeals={handleMeals} />
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <button type='button' style={{
                    padding: '20px',
                    color: 'white',
                    backgroundColor: '#009573',
                    outline: 'none',
                    border: 'none',
                    borderRadius: '10px',
                    fontFamily: 'sans',
                    cursor: 'pointer'
                    }}
                    onClick={()=>setShowResult(true)}>
                    محاسبه مواد مورد نیاز
                </button>
            </div>
            {showResult && <ShowResult countDailyMeals={countDailyMeals} setShowResult={setShowResult} />}
        </div>
    )
}

export default Home