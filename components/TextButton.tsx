import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./Button";

interface TextButtonProps extends ButtonProps {
}
const TextButton: FC<TextButtonProps> = ({ className, children, ...buttonProps }) => {
    return (
        <button className={classNames(
            "outline-none",
            "text-theme-0",
            "p-2",
            "rounded",
            "hover:bg-black hover:bg-opacity-10",
            "active:bg-black active:bg-opacity-30",
            className,
        )} {...buttonProps}>
            {children}
        </button>
    );
}

export default TextButton;