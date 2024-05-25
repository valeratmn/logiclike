import React from "react";
import { ICourse } from "../../types";
import CourseItem from "../CourseItem/CourseItem";
import { ALL_TOPICS } from "../../constants";
import "./CoursesList.scss";

interface ICoursesListProps {
  courses: ICourse[];
  activeTab: string;
}

function CoursesList({ courses, activeTab }: ICoursesListProps) {
  const currentList =
    activeTab === ALL_TOPICS
      ? courses
      : courses.filter((course) => course.tags.includes(activeTab));
  return (
    <div className="coursesList">
      {currentList.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default React.memo(CoursesList);
