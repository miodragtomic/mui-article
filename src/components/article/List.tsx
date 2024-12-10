import ListMui from '@mui/material/List'
import ListItemMui from '@mui/material/ListItem';

export interface ListProps {
  title?: string;
  children: React.ReactNode[];
}

export function List(props: ListProps) {
  return (
    <ListMui>
      {
        props?.children ?? []
      }
    </ListMui>
  )

}

export interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem(props: ListItemProps) {
  return (
    <ListItemMui>
      {
        props.children
      }
    </ListItemMui>
  )
}