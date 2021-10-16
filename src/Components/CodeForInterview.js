import Youtube from "../Assets/Images/youtube.png";
import InstaTele from "../Assets/Images/InstaTele.jpeg";
import { Box , makeStyles, Typography} from "@material-ui/core";

const useStyle = makeStyles({
    image:{
        width:'50%',
        height: '50%'

    },
    component: {
        margin:50
    }
})


const CodeForInterview = () =>{
    const classes = useStyle();
    return (
<Box className={classes.component}>
<Typography  variant="h4" style={{marginBottom: '50px'}}>Code for Interview</Typography>

         <Box style={{display:'flex'  }} >
          <img className={classes.image} src={Youtube}  />
          <img className={classes.image} src={InstaTele} />
          </Box>
</Box>

      
    )
}
export default CodeForInterview;