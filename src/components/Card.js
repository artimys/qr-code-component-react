import classes from './Card.module.css';
import qrCode from '../images/image-qr-code.png';

function Card() {
    return (

        <article className={classes.card}>
            <div className={classes.card__header}>
                <img className={classes.card__image} src={qrCode} alt="QR Code - Scan me" />
            </div>

            <div className={classes.card__body}>
            <h1 className={classes.card__title}>Improve your front-end skills by building projects</h1>
            <p className={classes.card__description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </article>
    );
}

export default Card;