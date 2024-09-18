import React from 'react';
import Button from "@/app/ui/button"
import Img from "@/app/ui/addImg/img"

export default function ImgContainer () {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-200 to-blue-500">
            <Img/>
            <Button btnName="Add Image"/>
        </div>
    )
}