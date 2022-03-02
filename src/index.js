import './styles.css'

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Vladislav',
    age: 25,
    ...userStack
}

console.log(user)