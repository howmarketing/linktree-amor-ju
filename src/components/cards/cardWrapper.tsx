import React, { ReactComponentElement, ReactElement } from 'react';

export type ICardWrapperProps = {
    children: ReactElement
}
export const CardWrapper = (props:ICardWrapperProps) => {
    return (
        <div className="mb-24 grid-cols-12 md:max-w-md lg:max-w-md sm:max-w-full bg-gray-200 rounded-md shadow-sm p-4">
            {props.children}
        </div>
    )
}
