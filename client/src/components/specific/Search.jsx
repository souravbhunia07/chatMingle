import React from 'react';
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Stack } from '@mui/system';
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material"; 

const users = [1, 2, 3];

const SearchComponent = () => {
  const search = useInputValidation("");

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
          label="" 
          value={search.value} 
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon /> 
              </InputAdornment>
            )
          }}
        />

        <List>
          {
            users.map((user) => (
              <ListItem>
                <ListItemText />
              </ListItem>
            ))
          }
        </List>
      </Stack>
    </Dialog>
  );
}

export default SearchComponent;
