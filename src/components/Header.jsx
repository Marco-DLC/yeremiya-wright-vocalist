import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState({opened:false, closing:false});
  const menuBtnRef = useRef(null);

  useEffect(() => {
    if (sidebarOpen.closing) {
      setTimeout(() => {
        setSidebarOpen((sidebarOpen) => ({...sidebarOpen, closing:false}))
      }, 230)
    }
  }, [sidebarOpen.closing]);

  const handleClick = () => {
    menuBtnRef.current.disabled = true;
    if (sidebarOpen.opened) {
      setSidebarOpen({opened:false, closing:true});
    } else {
      setSidebarOpen({...sidebarOpen, opened:true})
    }

    setTimeout(() => {
      menuBtnRef.current.disabled=false;
    }, 230);
  };

  return (
    <div id="Header">
      <h1>Yeremiya Wright</h1>
      <button ref={menuBtnRef} onClick={handleClick} className={sidebarOpen.opened ? "open" : ""}>
        ☰
      </button>
      <Sidebar id='Sidebar' className={sidebarOpen.opened ? 'open' : 'closed'} />
      <Sidebar id='SidebarClone' className={sidebarOpen.closing ? 'closing' : ''} />
    </div>
  );
}

function Sidebar({ className, id }) {
  return (
    <div id={id} className={className}>
      <a href="#bioScrl">About Me</a>
      <hr />
      <a href="#showcaseScrl">Performances</a>
      <hr />
      <a href="#resumeScrl">Resumes</a>
      <hr />
      <a href="#contactScrl">Contact Me</a>
    </div>
  );
}
