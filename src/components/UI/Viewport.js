import classes from './Viewport.module.css';

const Viewport = (props) => {
    return <div className={`h-screen flex justify-center items-center ${classes.Viewport}`}>{props.children}</div>
}
export default Viewport