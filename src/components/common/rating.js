import { useEffect, useState } from 'react'
import './rating.css'
const Rating = ({ rating }) => {
    const [star, setStar] = useState([])
    useEffect(() => {
        let starArray = []
        for (let i = 0; i < 5; i++) {
            let starClass = (i < rating) ? 'rated-star' : 'default-star';
            starArray.push(<span className={starClass} key={i} data-testid="star">&#x2605;</span>)
        }
        setStar(starArray);
    }, [rating])
    return (
        <>{star}</>
    )
}
export default Rating;