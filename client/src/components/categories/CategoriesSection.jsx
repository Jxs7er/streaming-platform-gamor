import { useFetch } from "@/hooks/api/useFetch";
import { CategoriesServices } from "@/services/modules";
import { useEffect, useRef, useState } from "react";
import { LoadingDots } from "../common/loadings";
import GroupedCategories from "./GroupedCategories";
import TrendsCategories from "./TrendsCategories";

const CategoriesSection = () => {
  const ref = useRef(null);
  const [show, setShow] = useState();
  const [categories, setCategories] = useState([]);

  const [trends, setTrends] = useState([]);
  const [groupByType, setGroupByType] = useState({});

  const { loading, error, refetch } = useFetch({
    handleFunction: () => CategoriesServices.get(),
    setData: setCategories,
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    // Populares
    setTrends(
      categories
        .filter((c) => c.popularity > 85)
        .sort((a, b) => b.popularity - a.popularity),
    );
    // Por Tipo
    const grouped = {};

    categories.forEach((cat) => {
      if (!grouped[cat.type]) {
        grouped[cat.type] = [];
      }

      grouped[cat.type].push(cat);
    });

    setGroupByType(grouped);
  }, [categories]);

  if (loading)
    return (
      <div className="h-[50vh] w-full flex justify-center items-center">
        <LoadingDots
          loading={loading}
          color="bg-gray-900/15"
          tip={"Loading categories..."}
        />
      </div>
    );

  return (
    <div className="bg-[linear-gradient(123deg,_#FAFAFA_80%,_#Fff_20%)] pt-4">
      <TrendsCategories trends={trends} ref={ref} />

      <hr className="my-6" />

      <GroupedCategories groupByType={groupByType} ref={ref} />
    </div>
  );
};

export default CategoriesSection;
