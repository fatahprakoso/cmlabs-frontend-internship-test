import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import IMealCategory from "../../../models/IMealCategory";
import IMeal from "../../../models/IMeal";

const CustomCard = (props: {
  data: IMealCategory | IMeal;
  link: string;
  hasDesc?: Boolean;
}) => {
  return (
    <Card sx={{ width: 345 }}>
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.data.img}
            alt="get ur meals! assets"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#63898a" }}
            >
              {props.data.name}
            </Typography>
            {props.hasDesc && (
              <Typography variant="body2" color="text.secondary">
                {props.data.description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CustomCard;
