import Image from 'next/image';
import React from 'react';


export type ICardProps = {
    title?: string;
    banner?: string;
    extraClasses?: string;
    description?: string;
}
export const Card = (props:ICardProps) => {
    return (
        <div className={`${props?.extraClasses || ""} peer/text-white bg-white col-4 border-gray-200 shadow-lg m-8 rounded-lg`}>
            <div className="p-5">
                {
                    props?.banner ? 
                        <div className="flex w-full h-auto content-center items-center overflow-hidden rounded-md bg-gray-200 p-4" style={{
                            textAlign: "center",
                            display:"flex",
                            justifyContent: "stretch",
                            alignItems: "stretch"

                        }}>
                            <Image
                                className="rounded-md shadow-lg flex"
                                style={{minWidth: "100%"}}
                                alt={`${props?.banner || ""} image banner for ${props?.title || ""}`} width={390} height={300} priority src={`${props?.banner || ""}`}/>
                        </div> :
                        ""
                }
                <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white peer-hover/text-white:text-white">
                    {props?.title || "Card title blank"}
                </h5>
                <p className="font-normal text-gray-700 peer-hover/text-white:text-white">
                    {props?.description || ""}
                </p>
            </div>
        </div>
    )
}