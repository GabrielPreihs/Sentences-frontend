interface Props {
  message: string;
}
export default function Message({ message }: Props) {

  return (
    <p className="">
      {message}
    </p>
  )
}