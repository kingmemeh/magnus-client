import {Link} from 'react-router-dom'
import './Sidebar.scss'
import VideoList from '../VideoList/VideoList'

export default function Sidebar({ movie, currentVideo}) {
    return (
        <section className="sidebar">
            <h2 className="sidebar__title">Next Videos</h2>
            <ul className='sidebar__list'>
                {movie
                // .filter(video => video.id !== currentVideo)
                .map(videos => {
                    return (
                        <Link to={`/videos/${videos.id}`} key={videos.id}>
                            <VideoList
                            key={videos.id}
                            title={videos.title}
                            image={videos.backdrop_path}
                            />
                        </Link>
                        
                    )
                })}
            </ul>
        </section>
    )
}