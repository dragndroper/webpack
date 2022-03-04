import './styles/index.scss'
import $ from 'jquery'
import 'bootstrap'

const userStack = {
    language: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'Vladislav',
    age: 25,
    ...userStack
}

$('.block').html('jQuery is Working')

console.log(user)