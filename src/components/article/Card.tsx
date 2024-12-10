import CardMui from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { ReactNode } from "react";
import { Divider } from "@mui/material";

export function Card(props: { title?: string, children?: ReactNode }) {
  const { title = "No Title", children = null } = props;

  return (
    <CardMui elevation={0}>
      <CardHeader 
        title={title} 
        titleTypographyProps={{
          color: 'textSecondary', 
          variant: 'h6', 
          component: "h6", 
          sx: {
            textTransform: 'uppercase'
          }
        }} 
        subheader={<Divider sx={{ mt: 1}} />}                
      />      
      <CardContent>
        { children}
      </CardContent>
    </CardMui>
  )
}