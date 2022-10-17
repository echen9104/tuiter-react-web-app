function WhoToFollowListItem(who) {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <image src="${who.avatarIcon}"
                       class="wd-circle-border"
                       width="48px" height="48px">
                </image>
            </div>
            <div class="col-7">
                <div style="white-space: nowrap">
                    <b>
                        ${who.userName}
                        <span class="fa-stack">
                            <i class="fa-solid fa-circle fa-stack-1x"></i>
                            <i class="fa-solid fa-check fa-inverse fa-stack-1x" style="color: white"></i>
                        </span>
                    </b>
                </div>
                <div class="wd-color-light-text">
                    ${who.handle}
                </div>
            </div>
            <div class="btn btn-primary rounded-pill col-3 p-1">
                <div style="font-size: calc(1vw + 1vh)">
                    Follow
                </div>
            </div>
        </div>            
    </li>
    `);
}

export default WhoToFollowListItem;