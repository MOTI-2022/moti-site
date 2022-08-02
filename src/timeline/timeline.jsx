// Import statements
// import { VerticalTimeline }  from 'react-vertical-timeline-component';
// import imgTest from '../images/Appleseed_Alpha.jpg';
import { Event, DateIcon } from "./timeline_event.jsx";


// // TIMELINE
export function Timeline(props) {

    return (
        <section>
            <Event
                year={props.timelineData.year}
                img={props.timelineData.img}
                title={props.timelineData.title}
                date={props.timelineData.date}
                description={props.timelineData.description}
            />
        </section>

    )
}
