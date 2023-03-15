import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ActionAreaCard = ({ project }) => {
  const { title, description, image, githubLink } = project;

  return (
    <Card
      sx={{
        maxWidth: 500,
        backgroundColor: "black",
        "&:hover": { transform: "scale(1.2)" },
      }}
    >
      <CardActionArea href={githubLink} target="_blank">
        <CardMedia
          component="img"
          height="240"
          width="360"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "rgb(30,233,121)" }}
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {title}
            </a>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "rgb(30,233,121)" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
