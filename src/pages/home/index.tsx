import { useEffect, useState } from "react";

import LogoTitle from "../../components/general/LogoTitle";
import CustomCard from "../../components/general/CustomCard";

import { Container, Stack } from "@mui/material";

import { getCategories } from "../../api/GetCategories";

import IMealCategory from "../../models/IMealCategory";

const Home = () => {
  /**
   * products state
   * products data that will displayed
   */
  const [categories, setCategories] = useState<IMealCategory[] | null>(null);

  /**
   * loading state
   * loading state of API's request for products getter's API
   */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(() => true);

    const data = getCategories();

    data
      .then((d) => {
        let categoriesFetched = d.data as any;
        categoriesFetched = categoriesFetched.categories;

        const preprocessedCategories: IMealCategory[] = categoriesFetched.map(
          (c: any) => ({
            id: c.idCategory,
            name: c.strCategory,
            description: c.strCategoryDescription,
            img: c.strCategoryThumb,
          })
        );

        setCategories(preprocessedCategories);
      })
      .finally(() => setLoading(() => false));
  }, []);

  return (
    <>
      <Container>
        <LogoTitle level="h1" />
        <Container maxWidth="lg">
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {categories?.map((d) => (
              <CustomCard data={d} hasDesc={true} link={`meals?c=${d.name}`} />
            ))}
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
