export default function VideoList({title, image}) {
    return (
        <div className="videolist__container">
            <div className="videolist--container">
                <img className='sidebar__video-image'
                 src= {image}
                 alt= {title}>
                 </img>
            </div>
            <div className='sidebar__video-link'>
                <p className='sidebar__video-name'>
                    {title}
                </p>
            </div>
           
        </div>
    )
}