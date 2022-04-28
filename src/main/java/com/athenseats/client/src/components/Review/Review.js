import { Card, CardContent, Typography, Rating } from "@mui/material";

function Review(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{props.user}</Typography>
        <Rating
          name="read-only"
          value={props.rating}
          precision={0.5}
          readOnly
        />
        <Typography>{props.review}</Typography>
      </CardContent>
    </Card>
  );
}

export default Review;
