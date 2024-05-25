import axios from "axios";
import { ICourse } from "../types";
import { useState, useCallback } from "react";

export const useFetchCoursesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async (): Promise<{
    courses?: ICourse[];
    tags?: Set<string>;
    error?: string;
  }> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(import.meta.env.VITE_ENDPOINT);
      const courses: ICourse[] = response.data;

      const tags = new Set<string>();
      courses.forEach((course) => {
        course.tags.forEach((tag) => tags.add(tag));
      });

      return { courses, tags };
    } catch (error) {
      const errorMessage = (error as Error).message;
      setError(errorMessage);
      return { error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { getData, isLoading, error };
};
