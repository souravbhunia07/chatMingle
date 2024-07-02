import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, TextField, Typography, useColorScheme } from "@mui/material";
import { Stack } from '@mui/system';
import { sampleUsers } from '../../constants/SampleData';
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';

const NewGroup = () => {

  const groupName = () => useInputValidation({initialValue: "", required: true, minLength: 3, maxLength: 20});

  const submitHandler = () => {};

  const closehandler = () => {};

  const [members, setmembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {

    setmembers(prev => prev.map((i) => i._id === id ? {...i, isAdded: !i.isAdded} : i));

    setSelectedMembers(prev => prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev, id]);
  }; // Defined a function that will be called when a user is selected or deselected

  // console.log(selectedMembers);

  return (
    <Dialog open onClose={closehandler}>
      <Stack 
        p={{xs: "1rem", sm: "3rem"}}
        width={"25rem"} spacing={"2rem"}
      >
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {
            members.map((i) => (
              <UserItem 
                user={i} 
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant={"contained"} size='large' onClick={submitHandler}>Create</Button>
          <Button variant="text" color='error' size='large'>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup