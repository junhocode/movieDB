import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import styled from "styled-components";

interface StarRatingProps {
    setRating : (rating : number) => void;
}

const StarSection = styled('div')`
    .star {
        font-size : auto;
        cursor : pointer;
        color : black;
    }

     .star:hover {
        font-size : auto;
        cursor : pointer;
        color : yellow;
        transition : 0.2s
    }
    
    .filled {
        color : yellow;
        stroke : black;
        stroke-width : 1px;
    }
       
    .empty {
        color : transparent;
        stroke : black;
        stroke-width : 1px;
    } 
        
`;

const StarRating = ({ setRating } : StarRatingProps) => {
    const [rating, setLocalRating] = useState<number>(0);

    const ratingHandler = (rate : number) => {
        setLocalRating(rate);
        setRating(rate);
    };

    return (
        <StarSection>
            <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => ratingHandler(star)}>
                {star <= rating ? <FaStar className="star filled"/> : <FaRegStar className="star empty"/>}
                </span>
            ))}
            </div>
        </StarSection>
      );
    };

export default StarRating;