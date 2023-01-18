import classNames from "classnames";
import { FC, ReactNode } from "react";

interface CenterProps {
    fill?: boolean
    children?: ReactNode
}
const Center: FC<CenterProps> = ({ fill, children }) => {
    return (
        <div className={classNames(
            "flex flex-col justify-center items-center",
            fill ? "w-full h-full" : "",
        )}>
            {children}
        </div>
    );
}

export default Center;
