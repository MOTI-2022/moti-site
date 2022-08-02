import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Event = (props) => {
    const {year, img, title, date, description} = props
    return(
        <VerticalTimeline lineColor={ 'black' }>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date={year} // Prop: Year
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={img} // Prop: img
            >
                {/* Prop: Event Title */}
                <h2 className="vertical-timeline-element-title"> {title} </h2>
                {/* <h4> {date} </h4> */}
                {/* Prop: Event Description */}
                <p>
                {description}
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

const DateIcon = ({img}) => {
    return(
        <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={img}
        />
    )
}


export {Event, DateIcon};



// // NOTES
// // OLD FUNCTION
// export default function TimelineEvent(img, h2, desc, date, url) {
//     console.log(img);
//     console.log(h2);
//     return (
//         <section>
//             <div className="cd-timeline__block">
//                 <div className="cd-timeline__img cd-timeline__img--picture">
//                     <img src={img} />
//                 </div>

//                 <div className="cd-timeline__content text-component">
//                 <h2>{ h2 }</h2>
//                 <p className="color-contrast-medium"> { desc } </p>
                
//                 <div className="flex justify-between items-center">
//                     <span className="cd-timeline__date"> { date } </span>
//                     <a href={ url } target="_blank" className="btn btn--subtle">READ MORE</a>
//                 </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// // EVENT 2
// const Event2 = (img, secription) => {
//     return(
//         <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             date='2011' // Parameter: Year
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={'../images/Appleseed_Alpha.jpg'}
//         >
//             {/* Parameter: Event Title */}
//             <h2 className="vertical-timeline-element-title"> Event Title </h2>
//             <h4> September 1, 2011 </h4>
//             {/* Parameter: Event Description */}
//             <p>
//             Hey There. How are you?
//             </p>
//         </VerticalTimelineElement>
//     )
// }

// // EXAMPLE
// var example= {
//     year: "2011",
//     img: "../images/Appleseed_Alpha.jpg",
//     title: "This Event Title",
//     date: "September 1, 2011",
//     description: "This is an event description."
// }

// var heyhey = <Event year={example.year} img={example.img} title={example.title} date={example.date} description={example.description}/>

// // EVENT FUNCTION!!!!!
// {Event(example)}
// function Event({year, img, title, date, description}) {
//     console.log(year);
//     return(
//         <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             date={year} // Parameter: Year
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={img}
//         >
//             {/* Parameter: Event Title */}
//             <h2 className="vertical-timeline-element-title"> {title} </h2>
//             <h4> {date} </h4>
//             {/* Parameter: Event Description */}
//             <p>
//             {description}
//             </p>
//         </VerticalTimelineElement>
//     )
// }