import styled from 'styled-components'
import { useForm } from "react-hook-form";

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin-bottom: 30px;
`


export const MyBoostedForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(`Wysłano dane ${JSON.stringify(data, null, 2)}`)
    }

    return <Form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor='name'>Imię</label>
    <input {...register('name')} id='name' type='text'/>
    <label htmlFor= 'age'>Wiek</label>
    <input {...register('age')} id='age' type='number'/>
    <label htmlFor='gender'>płeć</label>
    <select {...register('gender')} id='gender'>
        <option>Kobieta</option>
        <option>Mężczyzna</option>
    </select>
    <label htmlFor='comment'>Komentarz</label>
    <textarea {...register('comment')} id='comment'/>
    <button>Wyślij</button>
</Form>
}