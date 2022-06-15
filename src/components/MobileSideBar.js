import "./MobileSidebar.css"
function MobileSideBar({ isOpen,setIsOpen }) {
    return (
        <div className="MobileSidebar_BackDrop" style={{ left: isOpen ? "0" : "-100%" }} onClick={()=>setIsOpen(false)}>
            <div className="MobileSideBar_COntainer"></div>
        </div>
    )
}

export default MobileSideBar