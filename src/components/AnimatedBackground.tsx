import classes from './AnimatedBackground.module.css'

export default function AnimatedBackground() {
  return (
    <div className={classes.gradientBg}>
      <div className={`${classes.circle} ${classes.circle1}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}></div>
    </div>
  );
}
