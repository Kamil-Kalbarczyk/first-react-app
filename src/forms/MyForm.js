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

    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        comment: '',
    });

    const {name, age, gender, comment } = data;

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wysłano dane ${JSON.stringify(data, null, 2)}`)
    }

    return <Form onSubmit={handleSubmit}>
            <label htmlFor='name'>Imię</label>
            <input name='name' id='name' type='text' value={name} onChange={handleChange}/>
            <label htmlFor= 'age'>Wiek</label>
            <input name='age' id='age' type='number' value={age} onChange={handleChange}/>
            <label htmlFor='gender'>płeć</label>
            <select name='gender' id='gender' value={gender} onChange={handleChange}>
                <option>Kobieta</option>
                <option>Mężczyzna</option>
            </select>
            <label htmlFor='comment'>Komentarz</label>
            <textarea name='comment' id='comment' value={comment} onChange={handleChange}/>
            <button>Wyślij</button>
    </Form>
}