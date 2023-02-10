export function ReactRotating() {
    return (
        <div className="w-56 h-screen absolute
            right-0 
            
            overflow-hidden 
        ">  
            <img className="
                w-[200px] h-[200px] right-[-30%] bottom-[-10%]
                absolute
                pointer-events-none
                
                animate-rotation
                
            " src="/public/React-icon.svg"></img>
        </div>
    )
}