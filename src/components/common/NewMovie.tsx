import { useRef, useState } from "react";
import StarRating from "./StarRating";
import Button from "./Button";
import styled from "styled-components";

interface Movie {
    id : number;
    title : string;
    review : string;
    rating : number;
};

interface NewMovieProps {
    movieLog : Movie[];
    setMovieLog : React.Dispatch<React.SetStateAction<Movie[]>>; 
}

function NewMovie ({ movieLog, setMovieLog }: NewMovieProps) {
    const newId = useRef(1);
    const [newMovie, setNewMovie] = useState("");
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);

    const addMovie = () => {
        if (newMovie.trim() === "" || rating === 0) {
            alert ("영화 제목과 리뷰, 별점을 모두 입력해주세요!");
            return;
        }
        const newMovieLog = [...movieLog];
        const newMovieObj = {
            id : newId.current,
            title : newMovie,
            review : newReview,
            rating : rating,
        };

        newId.current++;
        newMovieLog.push(newMovieObj);
        setMovieLog(newMovieLog);
        setNewMovie("");
        setNewReview("");
        setRating(0);
    };

    return ( 
        <Wrapper>
        <h3>New Movie</h3>
        <div className="border">
        <div>오늘은 어떤 영화를 보셨나요?</div>
        <div>
            <input 
            type="text"
            placeholder="영화 제목"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)} />
        </div>
        <div>
            <input 
            type="text"
            placeholder="영화 리뷰"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)} />
        </div>
        <div>
            <StarRating setRating={setRating} />
        </div>
        <div>
            <Button onClick={addMovie}>Rate!</Button>
        </div>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  flex-direction: row; 
  gap: 1rem;
  width: 100%;
  justify-content: center;

  .border {
    display: flex;
    border-style : double;
    display : flex;
    gap : 4rem;
  }
`;

export default NewMovie;