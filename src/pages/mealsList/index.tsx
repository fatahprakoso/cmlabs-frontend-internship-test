import { Container, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMealByCategory } from "../../api/GetMealsByCategory";
import CustomCard from "../../components/general/CustomCard";
import IMeal from "../../models/IMeal";
import LoadingSpinner from "../../components/splash/LoadingSpinner";

const MealList = () => {
  const url = useSearchParams();
  const mealCategory = url[0].get("c");

  /**
   * products state
   * products data that will displayed
   */
  const [meals, setMeals] = useState<IMeal[] | null>(null);

  /**
   * loading state
   * loading state of API's request for products getter's API
   */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(() => true);

    const data = getMealByCategory(mealCategory ? mealCategory : "");

    data
      .then((d) => {
        let mealsFetched = d.data as any;
        mealsFetched = mealsFetched.meals;

        const preprocessedMeals: IMeal[] = mealsFetched.map((c: any) => ({
          id: c.idMeal,
          name: c.strMeal,
          img: c.strMealThumb,
        }));

        setMeals(preprocessedMeals);
      })
      .finally(() => setLoading(() => false));
  }, [mealCategory]);

  return (
    <>
      {loading ? (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <LoadingSpinner />
        </Container>
      ) : (
        <Container>
          <Container maxWidth="lg">
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              justifyContent="space-around"
            >
              {meals?.map((d) => (
                <CustomCard data={d} link={`/meal/${d.id}`} />
              ))}
            </Stack>
          </Container>
        </Container>
      )}
    </>
  );
};

export default MealList;
