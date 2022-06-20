import { useEffect, useRef } from 'react';
import "./More.css";

const More = (props) => {
  const ref = useRef(null);
  const { touchoutside } = props;
  const saveClicked = () => {
    // navigate('/');
    touchoutside && touchoutside();
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("touchoutside");
        touchoutside && touchoutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [touchoutside]);
  if (!props.show)
    return null;

  return (
    <div ref={ref} className="MoreContainer">
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Topics</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Moments</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Newsletters</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Twitter for Proffessionals</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Twitter Ads</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Analytics</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Settings and privacy</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Help Center</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Display</h1>
      <h1 className="Content"><img src="" alt="" className="contentIcons" /> Keyboard shortcuts</h1>
    </div>
  )
}

export default More
