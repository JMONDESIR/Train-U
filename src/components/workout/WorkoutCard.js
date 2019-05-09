import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                                        alt="Contemplative Reptile"
                                        className={classes.media}
                                        height="140"
                                        image={props.workout.img ? props.workout.img:"https://via.placeholder.com/250"}
                                        title="Contemplative Reptile"
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
                        <CardActions>
                                <Button onClick={() => props.handleDelete(props.workout.id) } size="small" color="primary">
                                        Delete
        </Button>
                                <Button onClick={() => props.handleEdit(props.workout.id)} size="small" color="primary">
                                        Edit workout
        </Button>
                        </CardActions>
                </Card>
        );
}

ImgMediaCard.propTypes = {
        classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);