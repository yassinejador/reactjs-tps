export default function Profile({ imgSrc, imgAlt, about}) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h1>Photo</h1>
                    <img
                        className="avatar"
                        src={imgSrc}
                        alt={imgAlt}
                        width={70}
                        height={70}
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h1>About</h1>
                    <p>{about}</p>
                </div>
            </div>
        </div>
    )
}