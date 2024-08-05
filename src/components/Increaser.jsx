import { useSelector, useDispatch } from "react-redux"
import { addCount, decreaseCount } from "../redux/slices/counterSlice"
const Increaser = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div>

            <h1>Count: {count}</h1>
            <div className="flex flex-row gap-5 justify-center">
                <button className="bg-blue-600 rounded-lg text-white p-2 hover:bg-blue-800" onClick={() => dispatch(addCount(1))}>Increase</button>
                <button className="bg-blue-600 rounded-lg text-white p-2 hover:bg-blue-800" onClick={() => dispatch(decreaseCount(1))}>Decrease</button>
            </div>

        </div>
    )
}

export default Increaser