import classes from './Attribution.module.css';

function Attribution() {
    return(
        <div className={classes.attribution}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/artimys" target="_blank"  rel="noreferrer">Arty Simon</a>.
        </div>
    );
}

export default Attribution;