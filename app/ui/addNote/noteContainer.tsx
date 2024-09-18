import React from 'react';
import Button from "@/app/ui/button"
import Note from "@/app/ui/addNote/note"

export default function ticketContainer () {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-200 to-blue-500">
            <Note/>
            <Button btnName="Add Note"/>
        </div>

    )
}