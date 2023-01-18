import classNames from "classnames";
import { FC, useEffect, useState } from "react";

interface LoadingProps {
    isLoading: boolean
}
const Loading: FC<LoadingProps> = ({ isLoading }) => {
    const [cnt, setCnt] = useState(0)
    useEffect(() => {
        const countUp = setInterval(() => {
            console.log("count up")
            setCnt(p => (p + 1) % 4)
        }, 700 / 4)
        return () => {
            clearInterval(countUp)
        }
    }, [])
    return (
        <div className="w-10 h-10 flex flex-row justify-around items-center">
            <div className={classNames(
                isLoading && cnt === 0
                    ? "bg-gray-700" : "bg-gray-300",
                "w-2", "h-2",
            )} />
            <div className={classNames(
                isLoading && cnt === 1
                    ? "bg-gray-700" : "bg-gray-300",
                "w-2", "h-2",
            )} />
            <div className={classNames(
                isLoading && cnt === 2
                    ? "bg-gray-700" : "bg-gray-300",
                "w-2", "h-2",
            )} />
        </div>
    );
}

export default Loading;