export const NavBar = () => {
    return (
    <div className="bg-nav-bar-dark pt-[24px] flex flex-col items-center">
        <div className="flex justify-center gap-[8px] mb-[40px]">
            <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-white opacity-40 rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-white opacity-20 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-[40px]">    
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
            <ItemIcon/>
        </div>

        <div className="flex items-end h-full mb-[44px]">
            <ItemIcon/>
        </div>
    </div>
    );
}

const ItemIcon = () => {
    return <div className="w-[22px] h-[22px] bg-white rounded-full"></div>
}