import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1}>
        <div
            style={{
                padding: "1rem",
                width: "20rem",
                height: "10rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis excepturi enim magnam? Nostrum quo odit ab ipsum ex, voluptatem eligendi maxime excepturi mollitia rerum, eaque modi, perferendis est explicabo iusto.
        </div>
    </Menu>
  )
}

export default FileMenu