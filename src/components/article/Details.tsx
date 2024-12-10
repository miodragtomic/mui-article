import Stack from "@mui/material/Stack";
import { ArticleModel } from "../../models/ArticleModel";
import { Card } from "./Card";
import { List, ListItem } from "./List";
import React from "react";
import Chip from '@mui/material/Chip';;
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import { AttachmentIcon } from "../icons/AttachmentIcon";
import SvgIcon from "@mui/material/SvgIcon";
import { DotIcon } from "../icons/DotIcon";

export type DetailsProps = Pick<ArticleModel, 'features' | 'attachments' | 'keywords'>

export function Details(props: DetailsProps) {
  return (
    <Card title="Details">
      <Stack direction='column' gap={1}>
        <List title="Features">
          {
            Object.entries(props.features).map( ([featureKey, featureValue ]) => (
              <ListItem 
                key={featureKey}
                icon={<DotIcon />}
                >
                <Typography component="span" color="textDisabled">{featureKey}: </Typography><Typography component="span" color="textPrimary">{featureValue}</Typography>
              </ListItem>
            ))
          }
        </List>
        <List title="Attachments">
          {
            props.attachments.map( (attachment, index) => (
              <ListItem 
                key={index}
                icon={<SvgIcon><AttachmentIcon /></SvgIcon>}
                >
                <Link underline="none" href={attachment.file_link}>{attachment.file_label}</Link>                
              </ListItem>
            ))
          }
        </List>
        <List title="Keywords">
          {[
            <ListItem key="keywords-one-item">
              <Stack direction="row" gap={1} sx={{ml: -1}}>
                {
                  props.keywords.map( (keyword, index) => (              
                    <Chip
                      key={index} 
                      sx={{ bgcolor: theme => theme.palette.primary.light, color: 'white'}}  
                      size="small"
                      label={keyword.toUpperCase()} 
                    />              
                  ))
                }
              </Stack>
            </ListItem>
        ]}
        </List>
      </Stack>      
    </Card>
  ) 
}