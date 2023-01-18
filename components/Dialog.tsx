import { Dialog as HDialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { FC, Fragment, ReactNode, useState } from "react";

interface DialogProps {
    open: boolean
    onClose: () => void
    title?: ReactNode
    children?: ReactNode
}
const Dialog: FC<DialogProps> = ({
    open, onClose,
    title, children,
}) => {
    return (
        <Transition show={open} as={Fragment}>
            <HDialog {...{ open, onClose }} className="w-full h-full">
                {/* バックドロップ */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <HDialog.Backdrop className="fixed inset-0 bg-black/30 z-10" />
                </Transition.Child>
                {/* 内容 */}
                <div className="fixed inset-0 flex flex-col justify-center items-center w-full h-full z-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <HDialog.Panel className="bg-white rounded-lg shadow-md h-fit min-w-[30%] min-h-[20%] max-w-[90%] max-h-[80%] flex flex-col">
                            {children}
                        </HDialog.Panel>
                    </Transition.Child>
                </div>
            </HDialog>
        </Transition>
    );
}

export default Dialog;

export function useDialog() {
    const [open, setOpen] = useState(false)
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    const onToggle = () => setOpen(p => !p)
    const dialogProps: DialogProps = {
        open,
        onClose,
    }
    return {
        open: onOpen, toggle: onToggle, close: onClose,
        dialogProps,
    } as const
}

type DialogTitleProps = JSX.IntrinsicElements["div"] & {
    children?: ReactNode
}
export const DialogTitle: FC<DialogTitleProps> = ({ className, children, ...props }) => {
    return (
        <HDialog.Title className={classNames(
            "flex-grow-0 p-2 text-2xl",
            className,
        )} {...props}>
            {children}
        </HDialog.Title>
    );
}
type DialogContentProps = JSX.IntrinsicElements["div"] & {
    children?: ReactNode
    center?: boolean
}
export const DialogContent: FC<DialogContentProps> = ({ className, children, center = false, ...props }) => {
    return (
        <HDialog.Description className={classNames(
            "flex-grow p-4 overflow-auto",
            className,
            center ? [
                "flex", "flex-col", "justify-center", "items-center", "text-center",
            ] : [],
        )} {...props}>
            {children}
        </HDialog.Description>
    );
}
type DialogActionsProps = JSX.IntrinsicElements["div"] & {
    children?: ReactNode
}
export const DialogActions: FC<DialogActionsProps> = ({ children }) => {
    return (
        <div className="flex-grow-0 p-2 flex flex-row justify-end">
            {children}
        </div>
    );
}
