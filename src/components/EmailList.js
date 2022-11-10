import Email from "./Email"

function EmailList (props) {
    const {emails , toggleRead, toggleStar} = props
return (
    <ul>
    {emails.map((email, index) => (
        <Email 
        key={index}
        email = {email}
        toggleRead = {toggleRead}
        toggleStar = {toggleStar}/>
      
    ))}
  </ul>
)
}

export default EmailList