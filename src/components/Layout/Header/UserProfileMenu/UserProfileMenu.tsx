import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function UserProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableRipple
                disableFocusRipple
                disableElevation
                onClick={handleClick}
                sx={{color:"inherit"}}
            >
                <Typography fontWeight="700" component="div">
                    היי, בן אדם
                </Typography>
                <ArrowDropDownIcon/>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ position: "absolute", top: "56px" }}
            >
                <MenuItem onClick={handleClose} >Profile</MenuItem>
                <MenuItem onClick={handleClose} sx={{borderBottom:"1px solid rgb(240, 240, 240)"}}>My account</MenuItem>
                <MenuItem onClick={handleClose} sx={{borderBottom:"1px solid rgb(240, 240, 240)"}}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
