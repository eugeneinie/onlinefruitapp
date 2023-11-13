"use client"
import React, { useState, ChangeEvent } from 'react'

const mockdata = [
    {
        first: 'Franc',
        class: '6B6',
        gender: 'male'
    },
    {
        first: 'Pauline',
        class: '6B5',
        gender: 'female'
    },
    {
        first: 'John',
        class: '6B6',
        gender: 'male'
    },
    {
        first: 'Mike',
        class: '6B5',
        gender: 'male'
    },
    {
        first: 'Mary',
        class: '6B6',
        gender: 'female'
    },
    {
        first: 'Peter',
        class: '6B4',
        gender: 'male'
    },
    {
        first: 'Paul',
        class: '6B3',
        gender: 'male'
    },
]

export default function Data() {
    const [student, setStudent] = useState('')

    const studentFilter =  mockdata.filter(stud => stud.first.toLowerCase().includes(student.toLowerCase()) || stud.class.toLowerCase().includes(student) || stud.gender.toLowerCase().startsWith(student))
    

    const studentFilters = studentFilter.length === 0 ? (
    <h2>No such value exist</h2>
    ) :
     studentFilter.map((mock, index) => (
        <aside key={index} className='shadow-2xl rounded-md'>
            <p>{mock.first}</p>
            <p>{mock.class}</p>
            <p>{mock.gender}</p>
        </aside>
    ))
    
    function onchange(event:ChangeEvent<HTMLInputElement>){
        return setStudent(event.target.value)
    }
  return (
    <div>
        <div>
            <input type="text" name="text" id="text" placeholder='search student'
            className='border-4 border-blue-500 border-solid p-4 m-6'
            // defaultValue={`6b6`}
            value={student}
            onChange={onchange}
            />
        </div>

        <div className='grid grid-cols-3 gap-5'>
            {studentFilters}
        </div>
    </div>
  )
}
