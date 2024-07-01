import React, { useState } from 'react';
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Stack } from '@mui/system';
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material"; 
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/SampleData';


const SearchComponent = () => {
  const search = useInputValidation("");

  const isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  }

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
              <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
            ))
          }
        </List>
      </Stack>
    </Dialog>
  );
}

export default SearchComponent;
