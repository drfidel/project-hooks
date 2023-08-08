import React, {useState, useEffect} from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {

    const [currentcat, setcurrentcat] = useState(0);
    const [mouseEventCnt, setmouseEventCnt] = useState(0);

    useEffect(() => {
      window.document.title = `cat : ${currentcat}`;
      console.log(`useEffect: setting title to ${currentcat}`);
    }, [currentcat])
    
    return (
        <div><span>mouseEventCnt : ${mouseEventCnt}</span>
            {[1,2,3,4,5,6].map((cat) => {
                return (
                    <div key={cat}
                    onMouseOver={() => {
                        setcurrentcat(cat);
                        setmouseEventCnt(mouseEventCnt + 1);
                        console.log(`onMouseOver:${cat}`)
                    }}>
                        <ImageToggleOnScroll
                            primaryImg={`/static/bw/cat${cat}.png`}
                            secondaryImg={`/static/col/catc${cat}.jpg`}
                            alt=""/>
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;