import { Link } from "react-router-dom";
import "./styles.css";

export function CardBook({book}) {
   return (
      <div className="content-card">
         <div className="content-card-image">
            <img
               className="image-card"
               src={book.banner}
            />
         </div>
         <div className="content-text">
            <h2 className="title-card">{book.title}</h2>
            <p className="description-card">
               {book.review}
            </p>
            <p className="genre-card">
               {
                 book.genre.join(' - ')
               }
            </p>
            <Link to={`/book/${book.id}`} className="button-card">Saiba Mais!</Link>
         </div>
      </div>
   );
}
