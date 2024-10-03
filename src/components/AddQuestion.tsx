import { responseGenerate } from "@/utils/openai"

export default async function AddQuestion() {
  async function handleQuestion(form: FormData) {
    'use server'
    console.log(form.entries())
    const response = await responseGenerate('Oi')

    console.log('RESPONSE: ' + JSON.stringify(response))
  }

  return (
    <form action={handleQuestion}>
      <input type="text" name="question" placeholder="Message Joseph" />
    </form>
  )
}