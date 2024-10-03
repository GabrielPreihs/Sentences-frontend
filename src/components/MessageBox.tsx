import Message from "./Message";

interface Props {
  messages: string[];
}
export default function MessageBox({ messages }: Props) {

  return (
    <div className="flex-1">
      {messages.map(message => <Message message={message} key={message} />)}
    </div>
  )
}