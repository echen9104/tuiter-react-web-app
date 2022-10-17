import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="row mb-2">
        <div class="col-11">
            <!--Got the icon + text in placeholder from this website: https://rahanaislam.com/how-to-add-icon-in-placeholder/-->
            <input class="form-control wd-rounded-corners-all-around" type="text"
                   placeholder="&#xf002; Search Tuiter"
                   style="font-family: Arial, 'Font Awesome 5 Free'">
        </div>
        <div class="col-1">
            <i class="fa-solid fa-gear fa-2x" style="color:#0d6efd"></i>
        </div>
    </div>
    
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-sm-none d-md-block">
            <a class="nav-link" href="#">Entertainment</a>
        </li>
    </ul>
    
    <div class="card">
        <image src="../../images/spacex.webp"
               class="card-image-top img-fluid">
        </image>
        <h1 class="card-img-overlay text-white d-flex align-items-end">SpaceX's Starship</>
    </div>
    
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;
