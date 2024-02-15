import React from "react";
import CourseTile from "./CourseTile";
import courses from "../assets/courses.json";
import "../styles/Courses.css";

function Courses() {
    return <div id='courses' className="">
    {
      courses.map((course, index) => (
        <CourseTile 
          key={index}
          prefix={course.course_prefix}
          stars={course.average_stars}
          reviews={course.total_reviews}
          code={course.course_code}
          title={course.course_title}
          availability={course.offered_terms}
        />
      ))
    }
    </div>;
}

export default Courses;