import {Helmet} from "react-helmet-async";

const Title = ({ title = "ChatMingle", description = "This is a chat app called chatMingle" }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="desription" content={description} />
    </Helmet>
  )
}

export default Title