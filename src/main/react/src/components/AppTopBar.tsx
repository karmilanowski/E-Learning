import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon  from '@mui/icons-material/Menu';
import { Box } from "@mui/system"


export const AppTopBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">Korepetycje IT App</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}