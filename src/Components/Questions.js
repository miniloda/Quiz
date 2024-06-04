

export default function Questions(props){
    const {question} = props

    return(
        <div className="question">
            {question.question}
        </div>
    )

}