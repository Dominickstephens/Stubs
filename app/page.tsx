import Image from "next/image";
import Ticket from "@/app/ui/ticket"
import Button from "@/app/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Ticket/>
      <Button btnName="Add Stub"/>
    </div>
  );
}
