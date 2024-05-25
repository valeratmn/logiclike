import React, { useCallback, useEffect, useState } from "react";
import { ICourse } from "../../types";
import { useFetchCoursesData } from "../../api/api";
import Tabs from "../../components/Tabs/Tabs";
import CoursesList from "../../components/CoursesList/CoursesList";
import { ALL_TOPICS } from "../../constants";
import "./Main.scss";

function Main() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [tabs, setTabs] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<string>(ALL_TOPICS);
  const { getData, isLoading, error } = useFetchCoursesData();

  useEffect(() => {
    const fetchData = async () => {
      const { courses, tags, error } = await getData();
      if (courses) setCourses(courses);
      if (tags) setTabs(tags);
      if (error) console.error(error);
    };
    fetchData();
  }, []);

  const onChangeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  if (isLoading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="mainContainer">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onChangeTab} />
      <CoursesList courses={courses} activeTab={activeTab} />
    </div>
  );
}

export default React.memo(Main);
