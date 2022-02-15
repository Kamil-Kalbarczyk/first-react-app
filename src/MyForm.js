import {useState} from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin-bottom: 30px;
`

export const MyForm = () => {

    // const [form, getForm] = useState({
    //     name: '',
    //     age: '',
    //     gender: '',
    //     comment: '',
    // });

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleCommentChange = (event) => setComment(event.target.value);

    const handleChange = (e) => {
        e.preventDefault();
        alert(`Wysłano dane ${name}, ${age}, ${gender}, ${comment}.`)
    }

    return <Form onSubmit={handleChange}>
            <label htmlFor='name'>Imię</label>
            <input id='name' type='text' value={name} onChange={handleNameChange}/>
            <label htmlFor= 'age'>Wiek</label>
            <input id='age' type='number' value={age} onChange={handleAgeChange}/>
            <label htmlFor='gender'>płeć</label>
            <select id='gender' value={gender} onChange={handleGenderChange}>
                <option>Kobieta</option>
                <option>Mężczyzna</option>
            </select>
            <label htmlFor='comment'>Komentarz</label>
            <textarea id='comment' value={comment} onChange={handleCommentChange}/>
            <button>Wyślij</button>
    </Form>
}