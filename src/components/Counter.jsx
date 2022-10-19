import { connect, useDispatch, useSelector } from "react-redux";
import { inc, dec, rnd } from '../action'

const Counter = () => {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div class="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    );
};

export default Counter

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

//Эта функция автоматически оборачивает actions в bindactionscreator и возвращает объект пропсов
// export default connect(mapStateToProps, actions)(Counter);