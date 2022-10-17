const NavigationSidebar = () => {
        return(`
            <div class="list-group">
                <a href="../navigation.html"
                   class="list-group-item list-group-item-action">
                    <span class="fab fa-twitter"></span>
                </a>
                <a href="../home.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-house-chimney"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Home</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <span class="fa-solid fa-hashtag"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Explore</span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-bell"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Notifications</span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-envelope"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Messages</span>
                </a>
                <a href="../bookmarks/index.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-bookmark"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Bookmarks</span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-list"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Lists</span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <span class="fa-solid fa-user"></span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Profile</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span class="fa-stack" style="width: 16px">
                        <i class="fa-solid fa-circle fa-stack-1x"></i>
                        <i class="fa-solid fa-ellipsis fa-stack-1x" style="color: white"></i>
                    </span>
                    <span class="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">More</span>
                </a>
            </div>

            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                Tweet
                </a>
            </div>
        `);
}
export default NavigationSidebar;