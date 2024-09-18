import React from 'react';
import Button from "@/app/ui/button"
import Ticket from "@/app/ui/addTicket/ticket"

export default function ticketContainer () {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-200 to-blue-500">
            <Ticket/>
            <Button btnName="Add Stub"/>
        </div>

    )
}