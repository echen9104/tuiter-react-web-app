import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item"
               href="/#">Tuiter</a>
            <Link className={`list-group-item
                    ${active === 'home'?'active':''}`}
                to="/tuiter/home">
                Home
            </Link>
            <Link className={`list-group-item
                    ${active === 'explore'?'active':''}`}
               to="/tuiter/explore">
                Explore
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}
               href="/#">
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}
               href="/#">
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}
               href="/#">
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}
               href="/#">
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}
               href="/#">
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}
               href="/#">
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;