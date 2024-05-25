import React from "react";
import { ICourse } from "../../types";
import "./CourseItem.scss";

interface ICourseItemProps {
  course: ICourse;
}

function CourseItem({ course }: ICourseItemProps) {
  return (
    <div className="courseItem">
      <div
        className="imageWrapper"
        style={{
          backgroundColor: course.bgColor,
        }}
      >
        <img src={course.image} alt={course.name} />
      </div>
      <p>{course.name}</p>
    </div>
  );
}

export default React.memo(CourseItem);
