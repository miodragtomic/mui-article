import ListMui, { ListOwnProps } from '@mui/material/List'
import ListItemMui from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';

export interface ListProps {
  title?: string;  
  children: React.ReactNode[];
  sx?: ListOwnProps['sx']
}

export function List(props: ListProps) {
  return (
    <ListMui      
      sx={{ 
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper',
        ...(props?.sx ?? {})
      }}
      subheader={props?.title ? (
        <ListSubheader
          disableSticky={true}
          sx={{ 
            lineHeight: '36px',
            fontSize: theme => theme.typography.body1.fontSize,
            color: theme => theme.palette.text.disabled
          }}>{props.title}</ListSubheader>
        ) : undefined}
      dense={true}      
    >    
      {
        props?.children ?? []
      }
    </ListMui>
  )

}

export interface ListItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function ListItem(props: ListItemProps) {  
  return (
    <ListItemMui dense={true} sx={{py: 0}}>
      {
        props.icon ? (
        <ListItemIcon sx={{ minWidth: 24, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          { props.icon }
        </ListItemIcon>
        ) : null
      }
        <ListItemText disableTypography={true} sx={{ my: 0, ml: 1}}>    
      {
        props.children
      }
      </ListItemText>
    </ListItemMui>
  )
}