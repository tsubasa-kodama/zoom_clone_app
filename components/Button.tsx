import classNames from "classnames";
import { FC } from "react";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
    size?: "sm" | "md" | "lg"
    elevation?: boolean
}
const Button: FC<ButtonProps> = ({
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
                "bg-theme-0",
                "text-white",
                p,
                fontSize,
                "rounded",
                "outline-none",
                {
                    "hover:-translate-y-1": elevation,
                    "hover:shadow-2xl": elevation,
                },
                "drop-shadow-2xl", "shadow-black",
                "transition-all",
                "hover:bg-opacity-75",
                "active:bg-opacity-90",
                className,
            )}
            {...buttonProps}
        >
            {children}
        </button>
    );
}

export default Button;