import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./Button";

interface OutlinedButtonProps extends ButtonProps {
}
const OutlinedButton: FC<OutlinedButtonProps> = ({
    size = "sm",
    elevation = false,
    className,
    children,
    ...buttonProps
}) => {
    const p = size === "sm" ? "p-2" : size === "md" ? "p-3" : "p-4"
    const fontSize = size === "sm" ? "text-base" : size ? "text-xl" : "text-3xl"
    return (
        <button
            className={classNames(
                "outline-none",
                "border-2",
                "border-gray-3",
                "rounded",
                fontSize,
                p,
                {
                    "hover:-translate-y-1": elevation,
                    "hover:shadow-2xl": elevation,
                },
                "drop-shadow-2xl", "shadow-black",
                "transition-all",
                "hover:bg-gray-1",
                "active:bg-gray-2",
                className,
            )}
            {...buttonProps}
        >
            {children}
        </button>
    );
}

export default OutlinedButton;