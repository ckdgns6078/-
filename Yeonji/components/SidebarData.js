import react, { useEffect, useState } from 'react';
import SignUpModal from '../modals/SignUpModal';
import LogOutModal from '../modals/LogOutModal';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from "@mui/material/styles";
import udttang from "../lib/udttang.png"
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

export const SidebarData = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [logOutModalOn, setLogOutModalOn] = useState(false);


    const id = sessionStorage.getItem("id");
    console.log(id);

    useEffect(() => {
        var src = document.getElementById("box");
        if (id != null) {
            src.innerHTML = "<div>"+ "<Nav.Link>"+sessionStorage.getItem("id")+"</Nav.Link>"+"<button class='profilebutton'> <div class='box'><img class='profile' src='" + sessionStorage.getItem("profile") 
            + "'/></div></Button>" +"</div>";
            
            // imgsrc.innerHTML = "<img className='profile' src='"+sessionStorage.getItem("profile")+"'/></div>"
            // console.log(sessionStorage.getItem("profile"));
            //         <div style="width:50px; height:50px;border-radius:70%; overflow:hidden;">
            //     <img style="width:100%; height:100%; object-fit:cover;" src={sessionStorage.getItem("profile")}></img>
            //   </div>
        }
    })


    return (
        <Box sx={{ flexGrow: 1 }}>

            <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
            <LogOutModal show={logOutModalOn} onHide={() => setLogOutModalOn(false)} />

            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={udttang} className='log' />
                    </Typography>

                    <Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Typography>

                    {/* 로그인을 하면 프로필보여야하니까 */}
                    <div id="box"></div>
                    <div>
                        {
                            id === null ? <Button color="inherit" variant='outlined'onClick={() => setSignUpModalOn(true)}>Login</Button>:<Button color="inherit" variant='outlined' onClick={() => setLogOutModalOn(true)}>Logout</Button>
                        }
                    </div>
                    {/* 종짱이 만들었던 버튼
                    <Button color="inherit" variant='outlined'>Login</Button>
                    &nbsp;&nbsp;
                    <Button color="inherit" variant='outlined'>Logout</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default SidebarData;