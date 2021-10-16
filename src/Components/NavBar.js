import {AppBar,Toolbar, Typography,makeStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';

const useStyle =makeStyles ({
    header:{
        background: '#111111'
    },
tabs: {
color: "#ffffff",
textDecoration: "none",
marginRight :20,
fontSize:20
}

})
const NavBar = () => {
const classes = useStyle();

    return(
<p>
    <AppBar className={classes.header} position="static">
        <Toolbar>
<NavLink className={classes.tabs} to ="./" exact> Code For Interview</NavLink>
<NavLink className={classes.tabs} to="all" exact > All users</NavLink>
<NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
        </Toolbar>
    </AppBar>
</p>
    )
}

export default NavBar;
