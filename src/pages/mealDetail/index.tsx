import { Container, Stack, Grid, Typography, Chip } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IMeal from "../../models/IMeal";
import { getMealDetail } from "../../api/GetMealDetail";
import ReactPlayer from "react-player";

const MealDetail = () => {
  const { id } = useParams();

  /**
   * products state
   * products data that will displayed
   */
  const [meal, setMeal] = useState<IMeal | null>(null);

  /**
   * loading state
   * loading state of API's request for products getter's API
   */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(() => true);

    const data = getMealDetail(id ? (id as unknown as number) : 0);

    data
      .then((d) => {
        let mealFetched = d.data as any;
        mealFetched = mealFetched.meals[0];

        const preprocessedMeal: IMeal = {
          id: mealFetched.idMeal,
          name: mealFetched.strMeal,
          img: mealFetched.strMealThumb,
          area: mealFetched.strArea,
          category: mealFetched.strCategory,
          drinkAlternate: mealFetched.strDrintAlternate,
          source: mealFetched.strSource,
          youtube: mealFetched.strYoutube,
          instruction: mealFetched.strInstructions,
          tags: mealFetched.strTags.split(","),
          ingridients: [],
        };

        for (let i = 1; i <= 20; i++) {
          if (mealFetched[`strIngredient${i}`] === "") break;

          preprocessedMeal.ingridients?.push(
            `${mealFetched[`strIngredient${i}`]} ${
              mealFetched[`strMeasure${i}`]
            }`
          );
        }

        setMeal(preprocessedMeal);
      })
      .finally(() => setLoading(() => false));
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2} direction="row" justifyContent="center">
          <Grid item xs={12} order={{ md: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Lemon",
                color: "#9DBC98",
              }}
            >
              {meal?.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} order={{ md: 1 }}>
            <img
              src={meal?.img}
              alt="get ur meals! assets"
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
            />
          </Grid>
          <Grid item xs={12} order={{ md: 3 }}>
            <Stack direction="row" spacing={1}>
              <Chip
                label={meal?.category}
                sx={{ backgroundColor: "#ecdab5", color: "#63898a" }}
              />
              <Chip
                label={meal?.area}
                sx={{ backgroundColor: "#63898a", color: "#ecdab5" }}
              />
              {meal?.tags?.map((d) => (
                <Chip label={d} color="primary" />
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            order={{ md: 4 }}
            alignItems="flex-start"
          >
            <div style={{ height: "100%" }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#63898a",
                }}
              >
                Recipes
              </Typography>
              {meal?.ingridients?.map((d, i) => (
                <Typography sx={{ color: "rgba(48,51,41,1)" }}>
                  {i + 1}. {d}
                </Typography>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={9} order={{ md: 5 }}>
            <div style={{ height: "100%" }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#63898a",
                }}
              >
                Instructions
              </Typography>
              <Typography>{meal?.instruction}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={8} order={{ md: 6 }}>
            <ReactPlayer url={meal?.youtube} width="100%" height="400px" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MealDetail;
