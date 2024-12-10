import { Box, Typography } from "@mui/material";
import { ArticleModel } from "../../models/ArticleModel";

export type DescriptionProps = Pick<ArticleModel, 'description_long'>

export function Description(props: DescriptionProps) {
  const { description_long } = props;
  return (
    <Box sx={{ mt: 2, mb: 4}}>
      <Typography component="h6" variant="h6" color="textSecondary" sx={{ textTransform: 'uppercase'}}>Descripton</Typography>
      <Typography component="div" variant="body1">{description_long}</Typography>
    </Box>
  )
}