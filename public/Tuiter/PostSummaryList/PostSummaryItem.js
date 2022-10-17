function PostSummaryItem(post) {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                <b class="wd-color-light-text">
                    ${post.topic}
                </b>
                </br>
                <b>
                    ${post.userName}
                    <span class="fa-stack">
                        <i class="fa-solid fa-circle fa-stack-1x"></i>
                        <i class="fa-solid fa-check fa-inverse fa-stack-1x" style="color: white"></i>
                    </span>
                    <span class="wd-color-light-text">
                        ${post.time}
                    </span>
                </b>
                </br>
                <b>
                    ${post.title}
                </b>
                </br>
                <b class="wd-color-light-text">
                    ${post.tweets ? post.tweets : ""}
                </b>
            </div>
            <div class="col-3">
                <image class="img-fluid p-2" src="${post.image}">
                </image>
            </div>
        </div>
    </li>
    `)
}

export default PostSummaryItem;