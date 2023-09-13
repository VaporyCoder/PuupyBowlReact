import { useState } from "react"
import axios from "axios"

const AddPlayer = () => {
    const[name, setName] = useState('')
    const[breed, setBreed] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const {data} = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players', {name,breed})
        const newPlayer = data
        console.log(newPlayer)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    value={name}
                    type='text'
                    name='name'
                    placeholder='Enter name here'
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                <input
                    value={breed}
                    type='text'
                    name='breed'
                    placeholder='Enter breed here'
                    onChange={(e) => setBreed(e.target.value)}
                    />
                </label>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddPlayer