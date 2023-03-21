import ShoppableVideo from '@/components/ShoppableVideo'

const ShoppableVideoPage = () => {
    const shoppabledata = {
        title: "Shoppable Videos",
        breadcrumb: [ { text: "Home", link: "/" }, { text: "Interactive Video", link: "/interactive-video" }, { text: "Shoppable Videos", link: "/interactive-video/shoppable-videos" } ],
        thumbnail: "http://web.msdi.in/wp-content/uploads/2023/03/customer-acquisition-concept-hand-with-magnet-attracts-new-consumers_153097-3220.jpg",
        video: "https://videostori.io/v/l4/IVx51S",
        heading: "Make Customer Surveys Interesting and Collect Feedback",
        description: 'Customer survey videos are videos that are created to collect  opinions or feedback from customers about a product, service, or business. Interactive Videos provide you a medium to explain the survey objectives in the form of a story thus encouraging viewers to participate and enable survey completions. The interactive videos may include graphics, animations, or other visuals to help convey the survey questions. The interactive Video surveys can also enable conditional questions based on viewers responses. This facilitates the viewers not to waste time on questions which are not relevant to him.\nThe interactive video can also be used to do an online assessment of a viewer after the course completion and the answers can be provided real-time to the user as well as the examinee.\nThese  videos can be an effective tool for gathering information and insights from to viewers, sharing them on a real-time basis with businesses and can help businesses make improvements and better meet the needs of their customers. '
    }
return <ShoppableVideo shoppabledata={shoppabledata} />
}

export default ShoppableVideoPage