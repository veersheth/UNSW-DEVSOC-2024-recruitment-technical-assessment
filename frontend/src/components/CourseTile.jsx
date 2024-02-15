import React from "react";
import "../styles/CourseTile.css";

function CourseTile(props) {

  var fullStars = Math.floor(props.stars);
  var emptyStars = 5 - fullStars;

  return (
    <div className="course-tile">
      <div className="course-header">
        <h3 className="code">{props.prefix}{props.code}</h3>
        <div>
          <div className="ratings">
            {[...Array(fullStars)].map((star, index) => (
              <span key={index} className="full-star">★</span>
            ))}
            {[...Array(emptyStars)].map((star, index) => (
              <span key={index} className="empty-star">☆</span>
            ))}
          </div>
          <div className="num-reviews">
            {props.reviews} reviews
          </div>
        </div>
      </div>
      <p className="name">{props.title}</p>

      {props.availability.map(
          (term, index) => (
              <div key={index} className="availability">{term}</div>
          )
      )}
    </div>
  );
}

export default CourseTile;