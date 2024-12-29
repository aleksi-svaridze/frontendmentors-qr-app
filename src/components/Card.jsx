import { useState } from "react";
import ImageContent from "./ImageContent";
import TextContent from "./TextContent";


const Card = () => {
    const [data] = useState(
        {
            title: 'Improve your front-end skills by building projects', 
            desc: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
        }
    )
    
    return (
        <div className="w-80 px-4 pt-4 py-10 bg-white rounded-[20px]">
            <ImageContent />
            <TextContent data={data} />
        </div>
    )
}

export default Card;