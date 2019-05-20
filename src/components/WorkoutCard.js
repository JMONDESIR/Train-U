// Drawer

import React from '../../node_modules/react';
import PropTypes from '../../node_modules/prop-types';
import { withStyles } from '../../node_modules/@material-ui/core/styles';
import Card from '../../node_modules/@material-ui/core/Card';
import CardActionArea from '../../node_modules/@material-ui/core/CardActionArea';
import CardActions from '../../node_modules/@material-ui/core/CardActions';
import CardContent from '../../node_modules/@material-ui/core/CardContent';
import CardMedia from '../../node_modules/@material-ui/core/CardMedia';
import Button from '../../node_modules/@material-ui/core/Button';
import Typography from '../../node_modules/@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 250,
        display: "inline-block",
        margin: "2.5px 5px",
        verticalAlign: "top"
    },
    media: {
        objectFit: 'cover',
    },
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Gym patron"
                    className={classes.media}
                    height="140"
                    // testing the value of the image prop
                    image={props.workout.img ? props.workout.img : "https://via.placeholder.com/250"}
                />
                <CardContent>
                    <Typography gutterBottom component="h5" className="fw7" >
                        {props.workout.name}
                    </Typography>
                    <Typography component="p">
                        {props.workout.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
{/* is the current user id equal to the user id from the specific workout? If so, render the edit and delete buttons.  If not, render an empty div */}
            {props.currentUserId === props.workout.userId ?
                (
                    <CardActions>
                        <Button onClick={() => props.handleDelete(props.workout.id)} size="small" color="primary">
                            Delete
        </Button>
                        <Button onClick={() => props.handleEdit(props.workout.id)} size="small" color="primary">
                            Edit workout
        </Button>
                    </CardActions>
                )
                : <div />}

        </Card>
    )
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
