import Title from "./Title"
export default function SectionLayout(props) {

    const {title, id, bg, description} = props;

    return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${bg === 'gray' ? "bg-gray-50" : " bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">          
          <Title text={title}/>
          {description && <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {description}
         </p>
            }
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>           
        {props.children}       
      </div>
    </section>
)
}