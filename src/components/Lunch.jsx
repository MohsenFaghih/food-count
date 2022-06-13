import React, {useState, useEffect} from 'react'
import { lunch } from '../data/lunch'

const Lunch = ({handleMeals}) => {
    const [count, setCount] = useState({})
    const [allMeals, setAllMeals] = useState(0)

    const handleCount = (name, opt) => {
        if(count[name] === 0 && opt === 'minus') return
        if(opt === 'plus') setCount(prev=>({...prev, [name]: prev[name] + 1}))
        if(opt === 'minus' && count[name] !== 0) setCount(prev=>({...prev, [name]: prev[name] - 1}))
    }

    const countAllMeals = () => {
        let total = 0;
        Object.keys(count).map(item => {
            total += count[item]
        })
        setAllMeals(total)
    }

    useEffect(()=>{
        lunch.map(item=>setCount(prev=>({...prev, [item.enName]: 0})))
    },[])

    useEffect(()=>{
        handleMeals('lunch', count)
        countAllMeals();
    },[count])
        
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline'}}>
                <h3 style={{marginBottom: 0, width: '113px'}}>انتخاب نهار</h3>
                <span style={{fontSize: '12px', marginRight: '15px', color: 'red'}}>{`(${allMeals} وعده نهار انتخاب شده)`}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', overflowX: 'auto'}}>
                {
                    lunch.map(item => (
                        <div key={item.name} style={{minWidth: '170px', width: '170px', padding: '10px', position: 'relative'}}>
                            <p style={{textAlign: 'center'}}>{item.name}</p>
                            <img 
                                src={`${process.env.PUBLIC_URL}/imgs/${item.img}`} 
                                alt={item.name} 
                                style={{height: '100px', maxHeight: '100px', width: '100%', borderRadius: '10px'}}
                            />
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    bottom: 0,
                                    left: '18%',
                                    backgroundColor: 'rgb(0 0 0 / 80%)',
                                    borderRadius: '5px',
                                    gap: '40px',
                                    padding: '0 10px',
                                    color: 'white',
                                    fontSize: '17px',
                                }}>
                                <div style={{cursor: 'pointer', padding: '0 10px'}} onClick={()=>handleCount(item.enName, 'plus')}>+</div>
                                <div>{count[item.enName]}</div>
                                <div style={{cursor: 'pointer', padding: '0 10px'}} onClick={()=>handleCount(item.enName, 'minus')}>-</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Lunch