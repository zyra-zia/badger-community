export default function VideoCard(props) {

    return (
        <div className="col-4 video">
            <div class="card">
                <a href={props.url} class="btn btn-primary transparent">
                    <img src={props.src} class="card-img-top" alt="youtube video" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <a href={props.url} class="btn">View</a>
                </div>
            </div>
        </div>

    );
}