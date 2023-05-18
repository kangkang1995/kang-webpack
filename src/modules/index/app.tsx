import React, {memo, useCallback, useState} from "react";
import "./index.css";
import "./less1.less";
import "./style1.scss";
import banner06 from "../../assets/images/banner06.jpg";
import movie4 from "../../assets/video/movie.mp4";

const App = () => {
    const [value, setValue] = useState(1);
    const changeValue = useCallback(() => {
        (data: number) => setValue(data + 1)
    }, []);
    return <div>
        <div>112121211212121421412414</div>
        <div onClick={changeValue}>{value}</div>
        <div>
            <img src={banner06} />
        </div>
        <div>
            <video src={movie4}></video>
        </div>
    </div>;
};

export default memo(App);
